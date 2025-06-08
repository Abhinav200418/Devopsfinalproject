from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os

app = Flask(__name__)
CORS(app)

# Direct MongoDB URI (with correct cluster and credentials)
mongo_uri = "mongodb+srv://abhinav75:abhinav75@cluster1.vauwb40.mongodb.net/candidates?retryWrites=true&w=majority&appName=Cluster1"
client = MongoClient(mongo_uri)
db = client["candidates"]
collection = db["profiles"]

@app.route('/api/add-candidate', methods=['POST'])
def add_candidate():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No data received'}), 400
        result = collection.insert_one(data)
        return jsonify({'message': 'Candidate added', 'id': str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/get-candidates', methods=['GET'])
def get_candidates():
    try:
        candidates = list(collection.find({}, {'_id': 0}))
        return jsonify(candidates), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/')
def home():
    return "Backend is running!"

if __name__ == '__main__':
    app.run(debug=True)


