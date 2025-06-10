# === BACKEND APP ===
# File: app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import certifi
app = Flask(__name__)
CORS(app)

# MongoDB connection (with SSL fix)
mongo_uri = "mongodb+srv://abhinav75:abhinav75@cluster1.vauwb40.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
client = MongoClient(mongo_uri, tlsCAFile=certifi.where())
db = client["candidates"]

# Collections
collection = db["profiles"]
rca_collection = db["rca_entries"]

# ----------------------------------
# Candidate APIs
# ----------------------------------

@app.route('/api/add-candidate', methods=['POST'])
def add_candidate():
    try:
        data = request.get_json()
        print("📥 Received:", data)
        if not data:
            return jsonify({'error': 'No data received'}), 400
        result = collection.insert_one(data)
        print("✅ Inserted:", result.inserted_id)
        return jsonify({'message': 'Candidate added', 'id': str(result.inserted_id)}), 201
    except Exception as e:
        print("❌ Error:", e)
        return jsonify({'error': str(e)}), 500

@app.route('/api/get-candidates', methods=['GET'])
def get_candidates():
    try:
        candidates = []
        for c in collection.find():
            candidate = dict(c)
            candidate['id'] = str(candidate['_id'])
            candidate['avatar'] = ''.join([n[0] for n in candidate['name'].split()]).upper() if 'name' in candidate else ''
            del candidate['_id']
            candidates.append(candidate)
        return jsonify(candidates), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ----------------------------------
# RCA APIs
# ----------------------------------

@app.route('/api/add-rca', methods=['POST'])
def add_rca():
    try:
        data = request.get_json()
        if not data or not all(k in data for k in ("title", "cause", "action")):
            return jsonify({'error': 'Missing RCA fields'}), 400
        result = rca_collection.insert_one(data)
        return jsonify({'message': 'RCA added', 'id': str(result.inserted_id)}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/get-rca', methods=['GET'])
def get_rca():
    try:
        entries = list(rca_collection.find({}, {'_id': 0}))
        return jsonify(entries), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ----------------------------------
@app.route('/')
def home():
    return "✅ Backend is running with MongoDB Atlas and RCA support!"

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
