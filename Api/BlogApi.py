from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)


class BlogApi(Resource):
    def get(self):
        return "HEY"


api.add_resource(BlogApi, "/blog")

if __name__ == "__main__":
    app.run(debug=True)
