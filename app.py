from flask import Flask, render_template

app = Flask(__name__)

# Sample data (you can replace this with your own data)
sample_data = [
    {"name": "John", "age": 25, "occupation": "Engineer"},
    {"name": "Alice", "age": 30, "occupation": "Doctor"},
    {"name": "Bob", "age": 22, "occupation": "Student"},
]

@app.route("/")
def index():
    return render_template("table.html", sample_data=sample_data)

if __name__ == "__main__":
    app.run(debug=True)
