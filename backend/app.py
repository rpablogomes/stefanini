from flask import Flask
from db import init_app
from flask_cors import CORS
from movies import movies_routes
from logs import logs_routes

app = Flask(__name__)
init_app(app)

# CORS configuration
CORS(app, origins=["http://localhost:3000"])

app.register_blueprint(movies_routes)
app.register_blueprint(logs_routes)

if __name__ == "__main__":
    app.run(debug=True)