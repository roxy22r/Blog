from flask import  jsonify, request,Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["DEBUG"] = True


blogItems = [{'id': '1', 'title': 'Learn Python', 'content': 'someeeeText asdfa Learn  s'},
             {'id': '2', 'title': 'Sky Python', 'content': 'someeeeText asdfa  s Sky'},
             {'id': '3', 'title': 'fire Python', 'content': 'someeeeText asdfa  s fire '},
             {'id': '4', 'title': 'deep Python', 'content': 'someeeeText asdfa  s deep'}]


@app.route("/Blog/contents", methods=['GET'])
def getBlogContent():
    return jsonify(blogItems)



app.run()
