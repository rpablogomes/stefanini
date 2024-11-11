from flask import Flask, jsonify, request
from db import mongo, init_app
import requests
from datetime import datetime
from flask_cors import CORS, cross_origin

app = Flask(__name__)
init_app(app)

CORS(app, origins=["http://localhost:3000"]) #cors configuration

@app.route("/movies", methods=["POST"]) # movies route
@cross_origin() #cors permission
def get_movies():
     
    data = request.get_json() #data from body request
    movie_research = data.get("movie_research")
    user = data.get("user")

    token = 'oxgzOdbTRorURE-r1BgQ' #api token
    
    response = requests.get(
        f'https://the-one-api.dev/v2/movie?name=/{movie_research}/i',
        headers={"Authorization": f"Bearer {token}"}
    )
    
    if response.status_code == 200:
        movie_data = response.json()

        print(movie_data)
        
        mongo.db.logs.insert_one({
            "movie_research": movie_research,
            "user": user,
            "timestamp": datetime.now()
        })
        
        return jsonify(movie_data), 200
    else:
        return jsonify({"error": "Failed to retrieve movie data"}), response.status_code

@app.route("/logs", methods=["GET"]) #logs route
@cross_origin() #cors permission
def get_logs():
    logs = mongo.db.logs.find()
    logs_list = [{"movie_research": log["movie_research"], "user": log["user"], "timestamp": log["timestamp"]} for log in logs]
    return jsonify(logs_list), 200

if __name__ == "__main__":
    app.run(debug=True)