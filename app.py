from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_restful import Resource, Api
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from bson import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

app.config['SECRET_KEY'] = 'SUPER-SECRET-KEY'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/NutriRecipe'
mongo = PyMongo(app)
api = Api(app)
jwt = JWTManager(app)

# @app.route('/')
# def home():
#     return "Welcome to the NutriRecipe API!"

class CAD(Resource):
    def get(self):
        try:
            collection = mongo.db['CAD']
            cursor = collection.find({}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })  # Fetch only 'Dish' and 'Image Link'
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No recipes found'}, 404  # Return 404 if no recipes found
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500  # Return 500 for any server-side error

class Chronic_Kidney(Resource):
    def get(self):
        try:
            collection = mongo.db['Chronic Kidney']
            cursor = collection.find({}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })  # Fetch only 'Dish' and 'Image Link'
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No recipes found'}, 404  # Return 404 if no recipes found
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500  # Return 500 for any server-side error

class CAD_BreakFast(Resource):
    def get(self):
        try:
            collection = mongo.db['CAD']
            cursor = collection.find({'Taste': 'BreakFast'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })  # Fetch only 'Dish' and 'Image Link'
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No breakfast recipes found for CAD'}, 404  # Return 404 if no recipes found
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500  # Return 500 for any server-side error

class CAD_Lunch(Resource):
    def get(self):
        try:
            collection = mongo.db['CAD']
            cursor = collection.find({'Taste': 'Lunch'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })  # Fetch only 'Dish' and 'Image Link'
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No lunch recipes found for CAD'}, 404  # Return 404 if no recipes found
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500  # Return 500 for any server-side error

class CAD_Dinner(Resource):
    def get(self):
        try:
            collection = mongo.db['CAD']
            cursor = collection.find({'Taste': 'Dinner'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })  # Fetch only 'Dish' and 'Image Link'
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dinner recipes found for CAD'}, 404  # Return 404 if no recipes found
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500  # Return 500 for any server-side error

class CAD_Snack(Resource):
    def get(self):
        try:
            collection = mongo.db['CAD']
            cursor = collection.find({'Taste': 'Snack'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })  # Fetch only 'Dish' and 'Image Link'
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No snack recipes found for CAD'}, 404  # Return 404 if no recipes found
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500  # Return 500 for any server-side error

class CAD_Dessert(Resource):
    def get(self):
        try:
            collection = mongo.db['CAD']
            cursor = collection.find({'Taste': 'Dessert'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })  # Fetch only 'Dish' and 'Image Link'
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dessert recipes found for CAD'}, 404  # Return 404 if no recipes found
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500  # Return 500 for any server-side error


class Diabetes_Type2(Resource):
    def get(self):
        try:
            collection = mongo.db['Diabetes Type 2']
            cursor = collection.find({}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No recipes found'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Diabetes_Type2_BreakFast(Resource):
    def get(self):
        try:
            collection = mongo.db['Diabetes Type 2']
            cursor = collection.find({'Taste': 'BreakFast'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No breakfast recipes found for Diabetes Type 2'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Diabetes_Type2_Lunch(Resource):
    def get(self):
        try:
            collection = mongo.db['Diabetes Type 2']
            cursor = collection.find({'Taste': 'Lunch'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No lunch recipes found for Diabetes Type 2'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Diabetes_Type2_Dinner(Resource):
    def get(self):
        try:
            collection = mongo.db['Diabetes Type 2']
            cursor = collection.find({'Taste': 'Dinner'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dinner recipes found for Diabetes Type 2'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Diabetes_Type2_Snack(Resource):
    def get(self):
        try:
            collection = mongo.db['Diabetes Type 2']
            cursor = collection.find({'Taste': 'Snack'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No snack recipes found for Diabetes Type 2'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Diabetes_Type2_Dessert(Resource):
    def get(self):
        try:
            collection = mongo.db['Diabetes Type 2']
            cursor = collection.find({'Taste': 'Dessert'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dessert recipes found for Diabetes Type 2'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Gluten_Intolerant(Resource):
    def get(self):
        try:
            collection = mongo.db['Gluten Intolerant']
            cursor = collection.find({}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No recipes found'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Gluten_Intolerant_BreakFast(Resource):
    def get(self):
        try:
            collection = mongo.db['Gluten Intolerant']
            cursor = collection.find({'Taste': 'BreakFast'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No breakfast recipes found for Gluten Intolerant'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Gluten_Intolerant_Lunch(Resource):
    def get(self):
        try:
            collection = mongo.db['Gluten Intolerant']
            cursor = collection.find({'Taste': 'Lunch'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No lunch recipes found for Gluten Intolerant'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Gluten_Intolerant_Dinner(Resource):
    def get(self):
        try:
            collection = mongo.db['Gluten Intolerant']
            cursor = collection.find({'Taste': 'Dinner'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dinner recipes found for Gluten Intolerant'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Gluten_Intolerant_Snack(Resource):
    def get(self):
        try:
            collection = mongo.db['Gluten Intolerant']
            cursor = collection.find({'Taste': 'Snack'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No snack recipes found for Gluten Intolerant'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Gluten_Intolerant_Dessert(Resource):
    def get(self):
        try:
            collection = mongo.db['Gluten Intolerant']
            cursor = collection.find({'Taste': 'Dessert'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dessert recipes found for Gluten Intolerant'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class High_Blood_Pressure(Resource):
    def get(self):
        try:
            collection = mongo.db['High Blood Pressure']
            cursor = collection.find({}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No recipes found'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class High_Blood_Pressure_BreakFast(Resource):
    def get(self):
        try:
            collection = mongo.db['High Blood Pressure']
            cursor = collection.find({'Taste': 'BreakFast'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No breakfast recipes found for High Blood Pressure'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class High_Blood_Pressure_Lunch(Resource):
    def get(self):
        try:
            collection = mongo.db['High Blood Pressure']
            cursor = collection.find({'Taste': 'Lunch'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No lunch recipes found for High Blood Pressure'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class High_Blood_Pressure_Dinner(Resource):
    def get(self):
        try:
            collection = mongo.db['High Blood Pressure']
            cursor = collection.find({'Taste': 'Dinner'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dinner recipes found for High Blood Pressure'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class High_Blood_Pressure_Snack(Resource):
    def get(self):
        try:
            collection = mongo.db['High Blood Pressure']
            cursor = collection.find({'Taste': 'Snack'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No snack recipes found for High Blood Pressure'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class High_Blood_Pressure_Dessert(Resource):
    def get(self):
        try:
            collection = mongo.db['High Blood Pressure']
            cursor = collection.find({'Taste': 'Dessert'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dessert recipes found for High Blood Pressure'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class High_Cholesterol(Resource):
    def get(self):
        try:
            collection = mongo.db['High_Cholesterol']
            cursor = collection.find({}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No recipes found'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class High_Cholesterol_BreakFast(Resource):
    def get(self):
        try:
            collection = mongo.db['High_Cholesterol']
            cursor = collection.find({'Taste': 'BreakFast'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No breakfast recipes found for High Cholesterol'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class High_Cholesterol_Lunch(Resource):
    def get(self):
        try:
            collection = mongo.db['High_Cholesterol']
            cursor = collection.find({'Taste': 'Lunch'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No lunch recipes found for High Cholesterol'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class High_Cholesterol_Dinner(Resource):
    def get(self):
        try:
            collection = mongo.db['High_Cholesterol']
            cursor = collection.find({'Taste': 'Dinner'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dinner recipes found for High Cholesterol'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class High_Cholesterol_Snack(Resource):
    def get(self):
        try:
            collection = mongo.db['High_Cholesterol']
            cursor = collection.find({'Taste': 'Snack'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No snack recipes found for High Cholesterol'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class High_Cholesterol_Dessert(Resource):
    def get(self):
        try:
            collection = mongo.db['High_Cholesterol']
            cursor = collection.find({'Taste': 'Dessert'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dessert recipes found for High Cholesterol'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Iron_Deficiency(Resource):
    def get(self):
        try:
            collection = mongo.db['Iron_Deficiency']
            cursor = collection.find({}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No recipes found'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Iron_Deficiency_BreakFast(Resource):
    def get(self):
        try:
            collection = mongo.db['Iron_Deficiency']
            cursor = collection.find({'Taste': 'BreakFast'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No breakfast recipes found for Iron Deficiency'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Iron_Deficiency_Lunch(Resource):
    def get(self):
        try:
            collection = mongo.db['Iron_Deficiency']
            cursor = collection.find({'Taste': 'Lunch'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No lunch recipes found for Iron Deficiency'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Iron_Deficiency_Dinner(Resource):
    def get(self):
        try:
            collection = mongo.db['Iron_Deficiency']
            cursor = collection.find({'Taste': 'Dinner'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dinner recipes found for Iron Deficiency'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Iron_Deficiency_Snack(Resource):
    def get(self):
        try:
            collection = mongo.db['Iron_Deficiency']
            cursor = collection.find({'Taste': 'Snack'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No snack recipes found for Iron Deficiency'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Iron_Deficiency_Dessert(Resource):
    def get(self):
        try:
            collection = mongo.db['Iron_Deficiency']
            cursor = collection.find({'Taste': 'Dessert'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dessert recipes found for Iron Deficiency'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Lactose_Intolerant(Resource):
    def get(self):
        try:
            collection = mongo.db['Lactose_Intolerant']
            cursor = collection.find({}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No recipes found'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Lactose_Intolerant_BreakFast(Resource):
    def get(self):
        try:
            collection = mongo.db['Lactose_Intolerant']
            cursor = collection.find({'Taste': 'BreakFast'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No breakfast recipes found for Lactose Intolerant'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Lactose_Intolerant_Lunch(Resource):
    def get(self):
        try:
            collection = mongo.db['Lactose_Intolerant']
            cursor = collection.find({'Taste': 'Lunch'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No lunch recipes found for Lactose Intolerant'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500
        
class Lactose_Intolerant_Dinner(Resource):
    def get(self):
        try:
            collection = mongo.db['Lactose_Intolerant']
            cursor = collection.find({'Taste': 'Dinner'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dinner recipes found for Lactose Intolerant'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Lactose_Intolerant_Snack(Resource):
    def get(self):
        try:
            collection = mongo.db['Lactose_Intolerant']
            cursor = collection.find({'Taste': 'Snack'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No snack recipes found for Lactose Intolerant'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Lactose_Intolerant_Dessert(Resource):
    def get(self):
        try:
            collection = mongo.db['Lactose_Intolerant']
            cursor = collection.find({'Taste': 'Dessert'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dessert recipes found for Lactose Intolerant'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Vitamin_D3(Resource):
    def get(self):
        try:
            collection = mongo.db['Vitamin_D3']
            cursor = collection.find({}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No recipes found'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Vitamin_D3_BreakFast(Resource):
    def get(self):
        try:
            collection = mongo.db['Vitamin_D3']
            cursor = collection.find({'Taste': 'BreakFast'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No breakfast recipes found for Vitamin D3'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Vitamin_D3_Lunch(Resource):
    def get(self):
        try:
            collection = mongo.db['Vitamin_D3']
            cursor = collection.find({'Taste': 'Lunch'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No lunch recipes found for Vitamin D3'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Vitamin_D3_Dinner(Resource):
    def get(self):
        try:
            collection = mongo.db['Vitamin_D3']
            cursor = collection.find({'Taste': 'Dinner'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dinner recipes found for Vitamin D3'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Vitamin_D3_Snack(Resource):
    def get(self):
        try:
            collection = mongo.db['Vitamin_D3']
            cursor = collection.find({'Taste': 'Snack'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No snack recipes found for Vitamin D3'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Vitamin_D3_Dessert(Resource):
    def get(self):
        try:
            collection = mongo.db['Vitamin_D3']
            cursor = collection.find({'Taste': 'Dessert'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dessert recipes found for Vitamin D3'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Chronic_Kidney_BreakFast(Resource):
    def get(self):
        try:
            collection = mongo.db['Chronic Kidney']
            cursor = collection.find({'Taste': 'Breakfast'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No breakfast recipes found for Chronic Kidney'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Chronic_Kidney_Lunch(Resource):
    def get(self):
        try:
            collection = mongo.db['Chronic Kidney']
            cursor = collection.find({'Taste': 'Lunch'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No lunch recipes found for Chronic Kidney'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Chronic_Kidney_Dinner(Resource):
    def get(self):
        try:
            collection = mongo.db['Chronic Kidney']
            cursor = collection.find({'Taste': 'Dinner'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dinner recipes found for Chronic Kidney'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Chronic_Kidney_Snack(Resource):
    def get(self):
        try:
            collection = mongo.db['Chronic Kidney']
            cursor = collection.find({'Taste':'Snacks'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No snack recipes found for Chronic Kidney'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500

class Chronic_Kidney_Dessert(Resource):
    def get(self):
        try:
            collection = mongo.db['Chronic Kidney']
            cursor = collection.find({'Taste': 'Desserts'}, {'Dish': 1, 'Image Link': 1, '_id': 0, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1 })
            
            results = []
            for document in cursor:
                results.append(document)
            
            if not results:
                return {'message': 'No dessert recipes found for Chronic Kidney'}, 404
            
            return jsonify(results)
        except Exception as e:
            return {'message': str(e)}, 500
        
class Lactose_Intolerant_1(Resource):
    def get(self):
        try:
            # Fetch a specific recipe from 'High Cholesterol' collection
            recipe_name = 'Dairy-Free Coconut-Pumpkin Pie'
            collection = mongo.db['Lactose_Intolerant']
            recipe = collection.find_one({'Dish': recipe_name}, {'_id': 0, 'Dish': 1, 'Image Link': 1, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1})
            
            if not recipe:
                return {'message': f'No recipe found for {recipe_name}'}, 404
            
            return jsonify(recipe)
        except Exception as e:
            return {'message': str(e)}, 500

class Lactose_Intolerant_2(Resource):
    def get(self):
        try:
            # Fetch a specific recipe from 'High Cholesterol' collection
            recipe_name = 'Peppermint Divinity'
            collection = mongo.db['Lactose_Intolerant']
            recipe = collection.find_one({'Dish': recipe_name}, {'_id': 0, 'Dish': 1, 'Image Link': 1, 'Taste': 1, 'Ingredients': 1, 'Instructions': 1})
            
            if not recipe:
                return {'message': f'No recipe found for {recipe_name}'}, 404
            
            return jsonify(recipe)
        except Exception as e:
            return {'message': str(e)}, 500

class NutriRecipe(Resource):
    def get(self):
        try:
            # List of collections within the NutriRecipe database
            collections = ['CAD', 'Diabetes Type 2', 'Vitamin_D3', 'Lactose_Intolerant', 'Iron_Deficiency',
                           'High_Cholesterol', 'High Blood Pressure', 'Gluten Intolerant', 'Chronic Kidney']
            
            all_recipes = {}
            
            # Iterate over each collection
            for collection_name in collections:
                collection = mongo.db[collection_name]
                recipes = list(collection.find({}, {'_id': 0}))
                all_recipes[collection_name] = recipes
            
            return jsonify(all_recipes)
        except Exception as e:
            return {'message': str(e)}, 500

api.add_resource(NutriRecipe, '/NutriRecipe')
api.add_resource(Lactose_Intolerant_1, '/Lactose_Intolerant/Shaker_Lemon_Pie')
api.add_resource(Lactose_Intolerant_2, '/Lactose_Intolerant/Desserts/Tropical Mini Pavlovas')


api.add_resource(Chronic_Kidney, '/menu/Chronic_Kidney')
api.add_resource(Chronic_Kidney_BreakFast, '/menu/Chronic_Kidney/BreakFast')
api.add_resource(Chronic_Kidney_Lunch, '/menu/Chronic_Kidney/Lunch')
api.add_resource(Chronic_Kidney_Dinner, '/menu/Chronic_Kidney/Dinner')
api.add_resource(Chronic_Kidney_Snack, '/menu/Chronic_Kidney/Snack')
api.add_resource(Chronic_Kidney_Dessert, '/menu/Chronic_Kidney/Desserts')


api.add_resource(Diabetes_Type2, '/menu/Diabetes_Type2')
api.add_resource(Diabetes_Type2_BreakFast, '/menu/Diabetes_Type2/BreakFast')
api.add_resource(Diabetes_Type2_Lunch, '/menu/Diabetes_Type2/Lunch')
api.add_resource(Diabetes_Type2_Dinner, '/menu/Diabetes_Type2/Dinner')
api.add_resource(Diabetes_Type2_Snack, '/menu/Diabetes_Type2/Snack')
api.add_resource(Diabetes_Type2_Dessert, '/menu/Diabetes_Type2/Dessert')

api.add_resource(Gluten_Intolerant, '/menu/Gluten_Intolerant')
api.add_resource(Gluten_Intolerant_BreakFast, '/menu/Gluten_Intolerant/BreakFast')
api.add_resource(Gluten_Intolerant_Lunch, '/menu/Gluten_Intolerant/Lunch')
api.add_resource(Gluten_Intolerant_Dinner, '/menu/Gluten_Intolerant/Dinner')
api.add_resource(Gluten_Intolerant_Snack, '/menu/Gluten_Intolerant/Snack')
api.add_resource(Gluten_Intolerant_Dessert, '/menu/Gluten_Intolerant/Dessert')

api.add_resource(High_Blood_Pressure, '/menu/High_Blood_Pressure')
api.add_resource(High_Blood_Pressure_BreakFast, '/menu/High_Blood_Pressure/BreakFast')
api.add_resource(High_Blood_Pressure_Lunch, '/menu/High_Blood_Pressure/Lunch')
api.add_resource(High_Blood_Pressure_Dinner, '/menu/High_Blood_Pressure/Dinner')
api.add_resource(High_Blood_Pressure_Snack, '/menu/High_Blood_Pressure/Snack')
api.add_resource(High_Blood_Pressure_Dessert, '/menu/High_Blood_Pressure/Dessert')

api.add_resource(High_Cholesterol, '/menu/High_Cholesterol')
api.add_resource(High_Cholesterol_BreakFast, '/menu/High_Cholesterol/BreakFast')
api.add_resource(High_Cholesterol_Lunch, '/menu/High_Cholesterol/Lunch')
api.add_resource(High_Cholesterol_Dinner, '/menu/High_Cholesterol/Dinner')
api.add_resource(High_Cholesterol_Snack, '/menu/High_Cholesterol/Snack')
api.add_resource(High_Cholesterol_Dessert, '/menu/High_Cholesterol/Dessert')

api.add_resource(Iron_Deficiency, '/menu/Iron_Deficiency')
api.add_resource(Iron_Deficiency_BreakFast, '/menu/Iron_Deficiency/BreakFast')
api.add_resource(Iron_Deficiency_Lunch, '/menu/Iron_Deficiency/Lunch')
api.add_resource(Iron_Deficiency_Dinner, '/menu/Iron_Deficiency/Dinner')
api.add_resource(Iron_Deficiency_Snack, '/menu/Iron_Deficiency/Snack')
api.add_resource(Iron_Deficiency_Dessert, '/menu/Iron_Deficiency/Dessert')

api.add_resource(Lactose_Intolerant, '/menu/Lactose_Intolerant')
api.add_resource(Lactose_Intolerant_BreakFast, '/menu/Lactose_Intolerant/BreakFast')
api.add_resource(Lactose_Intolerant_Lunch, '/menu/Lactose_Intolerant/Lunch')
api.add_resource(Lactose_Intolerant_Dinner, '/menu/Lactose_Intolerant/Dinner')
api.add_resource(Lactose_Intolerant_Snack, '/menu/Lactose_Intolerant/Snack')
api.add_resource(Lactose_Intolerant_Dessert, '/menu/Lactose_Intolerant/Dessert')

api.add_resource(Vitamin_D3, '/menu/Vitamin_D3')
api.add_resource(Vitamin_D3_BreakFast, '/menu/Vitamin_D3/BreakFast')
api.add_resource(Vitamin_D3_Lunch, '/menu/Vitamin_D3/Lunch')
api.add_resource(Vitamin_D3_Dinner, '/menu/Vitamin_D3/Dinner')
api.add_resource(Vitamin_D3_Snack, '/menu/Vitamin_D3/Snack')
api.add_resource(Vitamin_D3_Dessert, '/menu/Vitamin_D3/Dessert')

api.add_resource(CAD, '/menu/CAD')
api.add_resource(CAD_BreakFast, '/menu/CAD/BreakFast')
api.add_resource(CAD_Lunch, '/menu/CAD/Lunch')
api.add_resource(CAD_Dinner, '/menu/CAD/Dinner')
api.add_resource(CAD_Snack, '/menu/CAD/Snack')
api.add_resource(CAD_Dessert, '/menu/CAD/Dessert')

if __name__ == "__main__":
    app.run(debug=True, port=8000)
        


