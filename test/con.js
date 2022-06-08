var login=document.getElementById('connexion');
var nomuser=document.getElementById('username')
var motdpass=document.getElementById('password')
var token=sessionStorage.getItem('token')
login.addEventListener('click',()=>{
console.log(nomuser,motdpass)
})

const connexion = () => {
    // alert(motdpass.value+""+nomuser.value);
    // var data={"username":nomuser.value,"password":motdpass.value}
    // data=JSON.stringify(data)
    opts={
        method:  'POST',
        headers:{
          'Content-Type': 'application/json'
        }, 
        mod:'cors',
        body:JSON.stringify({"username":nomuser.value,"password":motdpass.value})
      }
    fetch('http://127.0.0.1:5000/token',opts)
      .then(resp=>{ 
                    if (resp.status===200) return resp.json();
                    else return "Problem!"})
      .then(data=>{
        sessionStorage.setItem('token',data.access_token)
        sessionStorage.setItem('profil',data.profil)
        sessionStorage.setItem('username',nomuser.value)
        console.log('Ca vient de backend',data)
        window.location.replace("afficher.html");
      })
      .catch(error=>{
        console.error('Il y a une erreur',error);
      })

    // console.log(reponse);
}