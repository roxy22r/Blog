from flask import  jsonify, request,Flask

app = Flask(__name__)
app.config["DEBUG"] = True

blogItems = [{'id': 1, 'title': 'Learn Python', 'content': 'someeeeText asdfa  s'},
             {'id': 2, 'title': 'Sky Python', 'content': 'someeeeText asdfa  s'},
             {'id': 3, 'title': 'fire Python', 'content': 'someeeeText asdfa  s'},
             {'id': 4, 'title': 'deep Python', 'content': 'someeeeText asdfa  s'}]


@app.route("/Blog/conenents", methods=['GET'])
def getBlogContent():
    return jsonify(blogItems)


app.run()
