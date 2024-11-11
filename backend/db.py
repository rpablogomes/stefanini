from flask import Flask
from flask_pymongo import PyMongo
import os

mongo = PyMongo()

def init_app(app: Flask):
    app.config["MONGO_URI"] = os.getenv("MONGO_URI", "mongodb://localhost:27017/stefanini")
    mongo.init_app(app)