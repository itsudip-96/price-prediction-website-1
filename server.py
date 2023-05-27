from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/p', methods=['GET','POST'])
def predict_home_price():
    bed = float(request.form['bed'])
    bath = float(request.form['bath'])
    flr = int(request.form['flr'])
    cnd = int(request.form['cnd'])

    response = jsonify({
        'ep': util.get_estimated_price(bed,bath,flr,cnd)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Home Price Prediction...")
    util.t()
    app.run()