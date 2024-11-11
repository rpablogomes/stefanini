from flask import Blueprint, jsonify, request
from db import mongo
import requests
from datetime import datetime
from flask_cors import cross_origin
import os
from dotenv import load_dotenv

load_dotenv()

api_token = os.getenv('API_TOKEN')  #api token from .env

movies_routes = Blueprint('movies', __name__)

@movies_routes.route("/movies", methods=["POST"]) # movies route
@cross_origin() #cors permission
def get_movies():
     
    data = request.get_json() #data from body request
    movie_research = data.get("movie_research")
    user = data.get("user")
    
    response = requests.get(
        f'https://the-one-api.dev/v2/movie?name=/{movie_research}/i',
        headers={"Authorization": f"Bearer {api_token}"}
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