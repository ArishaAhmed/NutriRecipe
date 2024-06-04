
from flask import Flask, request, jsonify, send_file, send_from_directory
from flask_pymongo import PyMongo
from flask_restful import Resource, Api, reqparse
from flask_jwt_extended import create_access_token, JWTManager, get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
from flask_cors import CORS
import os
from bson import ObjectId

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'SUPER-SECRET-KEY'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/NutriRecipe'
mongo = PyMongo(app)
api = Api(app)
jwt = JWTManager(app)

# Configure file upload path
app.config['UPLOAD_FOLDER'] = 'profile_pics'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Define JSON schema validation for user registration
user_register_parser = reqparse.RequestParser()
user_register_parser.add_argument('firstName', type=str, required=True, help='First name is required')
user_register_parser.add_argument('lastName', type=str)
user_register_parser.add_argument('username', type=str, required=True, help='Username is required')
user_register_parser.add_argument('password', type=str, required=True, help='Password is required')

# User registration resource
class UserRegister(Resource):
    def post(self):
        # Parse and validate JSON payload
        args = user_register_parser.parse_args(strict=True)
        
        # Insert user into database
        user_data = {
            'firstName': args['firstName'],
            'lastName': args['lastName'],
            'username': args['username'],
            'password': generate_password_hash(args['password']),
        }

        try:
            # Insert the user into the MongoDB users collection
            result = mongo.db.users.insert_one(user_data)
            inserted_id = str(result.inserted_id)
            
            # Return the inserted user's ID
            return {'message': 'User registered successfully'}, 201
        
        except Exception as e:
            return {'message': str(e)}, 500

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
        user = mongo.db.users.find_one({'_id': ObjectId(current_user_id)})
        if user:
            user.pop('password')
            user.pop('_id')
            return {'user': user}, 200
        return {'message': 'User not found'}, 404

# class UpdatePassword(Resource):
#     @jwt_required()
#     def post(self):
#         data = request.get_json()
#         current_user_id = get_jwt_identity()
#         current_password = data.get('current_password')
#         new_password = data.get('new_password')
#         user = mongo.db.users.find_one({'_id': ObjectId(current_user_id)})

#         if user and check_password_hash(user['password'], current_password):
#             hashed_new_password = generate_password_hash(new_password)
#             mongo.db.users.update_one(
#                 {'_id': ObjectId(current_user_id)},
#                 {'$set': {'password': hashed_new_password}}
#             )
#             return {'message': 'Password updated successfully'}, 200

#         return {'message': 'Current password is incorrect'}, 400

class UpdateUserProfile(Resource):
    @jwt_required()
    def post(self):
        current_user_id = get_jwt_identity()
        user = mongo.db.users.find_one({'_id': ObjectId(current_user_id)})

        if not user:
            return {'message': 'User not found'}, 404

        data = request.form.to_dict()
        update_data = {}
        if 'firstName' in data:
            update_data['firstName'] = data['firstName']
        if 'lastName' in data:
            update_data['lastName'] = data['lastName']

        if 'current_password' in data and 'new_password' in data:
            if check_password_hash(user['password'], data['current_password']):
                hashed_new_password = generate_password_hash(data['new_password'])
                update_data['password'] = hashed_new_password
            else:
                return {'message': 'Current password is incorrect'}, 400

        profile_pic = request.files.get('profile_picture')
        if profile_pic:
            filename = secure_filename(profile_pic.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            profile_pic.save(filepath)
            update_data['profile_picture'] = filename

        mongo.db.users.update_one({'_id': ObjectId(current_user_id)}, {'$set': update_data})
        return {'message': 'Profile updated successfully'}, 200

class DownloadProfilePicture(Resource):
    def get(self, filename):
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(ProtectedResource, '/secure')
# api.add_resource(UpdatePassword, '/update_password')
api.add_resource(UpdateUserProfile, '/update_profile')
api.add_resource(DownloadProfilePicture, '/profile_pics/<filename>')

if __name__ == "__main__":
    app.run(debug=True)
