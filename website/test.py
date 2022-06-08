from flask import request
def aout():
    if request.method=="POST":
        todo=request.form['todos']

     