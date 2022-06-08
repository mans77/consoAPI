var login=document.getElementById('connexion');
var nomuser=document.getElementById('username').value;
var motdpass=document.getElementById('password').value;
login.addEventListener('click',()=>{
  console.log(nomuser,motdpass)
})