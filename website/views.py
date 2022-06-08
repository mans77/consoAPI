from flask import Blueprint, render_template, request,flash, redirect, url_for
from .models import Users
from  .auth import selectapi

views = Blueprint("views", __name__)

<<<<<<< HEAD
@views.route("/", methods=["GET","POST"])
def home():
         
  return render_template('home.html')
=======

    
    

@views.route("/", methods=["GET","POST"])
def home():
     nnr = 0
     if request.method == "POST":
          nbr = request.form.get("nbre")  
          selectapi("users", int(nbr))
          #users = Users.query.all()[nnr:int(nbr)]
          #print(users)
          return redirect(url_for('auth.load', nbr=nbr))
          
     return render_template('home.html')
>>>>>>> a5948f9eaf249e43934e984e82d1e2381e69fcec



