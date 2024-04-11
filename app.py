from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_restful import Resource, Api
from flask_jwt_extended import create_access_token, JWTManager, get_jwt_identity, jwt_required
from bson import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

app.config['SECRET_KEY'] = 'SUPER-SECRET-KEY'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/nutri'  # Change database name as per your preference
mongo = PyMongo(app)
api = Api(app)
jwt = JWTManager(app)

class UserRegistration(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return {'message': 'Missing username or password'}, 400
        
        if mongo.db.users.find_one({'username': username}):
            return {'message': 'Username already taken'}, 400

        hashed_password = generate_password_hash(password)
        mongo.db.users.insert_one({'username': username, 'password': hashed_password})
        return {'message': 'User created successfully'}, 200

class UserLogin(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        user = mongo.db.users.find_one({'username': username})

        if user and check_password_hash(user['password'], password):
            access_token = create_access_token(identity=str(user['_id']))
            return {'access_token': access_token}, 200
        
        return {'message': 'Invalid Credentials'}, 401

class ProtectedResource(Resource):
    @jwt_required()
    def get(self):
        current_user_id = get_jwt_identity()
        return {'message': f"Hello User {current_user_id}, You accessed the Protected Resource"}, 200


api.add_resource(UserRegistration, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(ProtectedResource, '/secure')

if __name__ == "__main__":
    print("Hello World")
    app.run(debug=True)
