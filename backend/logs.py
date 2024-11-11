from flask import Blueprint, jsonify
from db import mongo

logs_routes = Blueprint('logs', __name__)

@logs_routes.route("/logs", methods=["GET"])
def get_logs():
    logs = mongo.db.logs.find()
    logs_list = [{"movie_research": log["movie_research"], "user": log["user"], "timestamp": log["timestamp"]} for log in logs]
    return jsonify(logs_list), 200