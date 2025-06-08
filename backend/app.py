from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from prometheus_client import start_http_server, Counter, Histogram, Summary
import time
import logging
import os
import sys
print(sys.executable)

# --- OpenTelemetry Setup ---
from opentelemetry import trace
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter
from opentelemetry.sdk.resources import SERVICE_NAME, Resource
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor

# Tracing configuration
trace.set_tracer_provider(
    TracerProvider(resource=Resource.create({SERVICE_NAME: "candidate-app"}))
)
tracer_provider = trace.get_tracer_provider()
otlp_exporter = OTLPSpanExporter(endpoint="http://localhost:4318/v1/traces")
tracer_provider.add_span_processor(BatchSpanProcessor(otlp_exporter))

# --- Flask App Setup ---
app = Flask(__name__)
CORS(app)
FlaskInstrumentor().instrument_app(app)

# Logging setup
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# MongoDB setup
mongo_uri = "mongodb+srv://abhinav75:abhinav75@cluster1.vauwb40.mongodb.net/candidates?retryWrites=true&w=majority&appName=Cluster1"
client = MongoClient(mongo_uri)
db = client["candidates"]
collection = db["profiles"]

# Prometheus Metrics
REQUEST_COUNT = Counter('http_requests_total', 'Total HTTP Requests', ['method', 'endpoint', 'http_status'])
REQUEST_LATENCY = Histogram('http_request_latency_seconds', 'Request latency', ['method', 'endpoint'])
REQUEST_SIZE = Summary('http_request_size_bytes', 'Request size', ['method', 'endpoint'])

# Helper to record Prometheus metrics
def observe_metrics(endpoint, method, status, start_time, request_data):
    duration = time.time() - start_time
    REQUEST_COUNT.labels(method=method, endpoint=endpoint, http_status=status).inc()
    REQUEST_LATENCY.labels(method=method, endpoint=endpoint).observe(duration)
    REQUEST_SIZE.labels(method=method, endpoint=endpoint).observe(len(str(request_data)))


# Routes
@app.route('/api/add-candidate', methods=['POST'])
def add_candidate():
    start_time = time.time()
    try:
        data = request.get_json()
        if not data:
            observe_metrics('/api/add-candidate', 'POST', 400, start_time, data)
            return jsonify({'error': 'No data received'}), 400

        result = collection.insert_one(data)
        logging.info(f"Inserted candidate: {data}")
        observe_metrics('/api/add-candidate', 'POST', 201, start_time, data)
        return jsonify({'message': 'Candidate added', 'id': str(result.inserted_id)}), 201

    except Exception as e:
        logging.error(f"Error in add_candidate: {e}")
        observe_metrics('/api/add-candidate', 'POST', 500, start_time, str(e))
        return jsonify({'error': str(e)}), 500


@app.route('/api/get-candidates', methods=['GET'])
def get_candidates():
    start_time = time.time()
    try:
        candidates = list(collection.find({}, {'_id': 0}))
        logging.info("Fetched candidates")
        observe_metrics('/api/get-candidates', 'GET', 200, start_time, '')
        return jsonify(candidates), 200
    except Exception as e:
        logging.error(f"Error in get_candidates: {e}")
        observe_metrics('/api/get-candidates', 'GET', 500, start_time, str(e))
        return jsonify({'error': str(e)}), 500


@app.route('/')
def home():
    start_time = time.time()
    observe_metrics('/', 'GET', 200, start_time, '')
    return "Backend is running!"


# Main entry point
if __name__ == '__main__':
    # Prometheus exporter on port 8000
    start_http_server(8000)
    app.run(debug=True, host="0.0.0.0", port=5000)
