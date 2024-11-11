
from pymongo import MongoClient

def upgrade():
    client = MongoClient("mongodb://localhost:27017/stefanini")
    db = client["stefanini"]
    db.create_collection("logs")
    
    db.logs.create_index([("logs", 1)], unique=True)
    client.close()