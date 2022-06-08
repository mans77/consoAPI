from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_cors import CORS

db = SQLAlchemy()


def create_app():

    app = Flask(__name__)
    app.config['SECRET_KEY'] = "groupe5"
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:OUIOUI@localhost/crud_app_test'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    app.config["JWT_SECRET_KEY"] = "groupe5"  # Change this!
    jwt = JWTManager(app)
    CORS(app)
    db.init_app(app)
    


    from .auth import auth

    app.register_blueprint(auth, url_prefix  ="/")
        
    return app