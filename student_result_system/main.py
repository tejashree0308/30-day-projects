from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)

def init_db():
    conn = sqlite3.connect("students.db")
    cur = conn.cursor()
    cur.execute("""
    CREATE TABLE IF NOT EXISTS students(
        roll INTEGER PRIMARY KEY,
        name TEXT,
        maths INTEGER,
        science INTEGER,
        english INTEGER,
        total INTEGER,
        percent REAL,
        grade TEXT
    )
    """)
    conn.commit()
    conn.close()

init_db()

def calculate_grade(m, s, e):
    total = m + s + e
    percent = total / 3

    if percent >= 90:
        grade = "A"
    elif percent >= 75:
        grade = "B"
    elif percent >= 50:
        grade = "C"
    else:
        grade = "Fail"

    return total, round(percent,2), grade


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        roll = request.form["roll"]
        name = request.form["name"]
        maths = int(request.form["maths"])
        science = int(request.form["science"])
        english = int(request.form["english"])

        total, percent, grade = calculate_grade(maths, science, english)

        conn = sqlite3.connect("students.db")
        cur = conn.cursor()
        cur.execute("INSERT INTO students VALUES(?,?,?,?,?,?,?,?)",
                    (roll, name, maths, science, english, total, percent, grade))
        conn.commit()
        conn.close()

        return redirect("/")

    conn = sqlite3.connect("students.db")
    cur = conn.cursor()
    cur.execute("SELECT * FROM students")
    data = cur.fetchall()
    conn.close()

    return render_template("index.html", students=data)


if __name__ == "__main__":
    app.run(debug=True)