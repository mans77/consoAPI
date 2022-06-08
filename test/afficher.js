var token=sessionStorage.getItem('token')
var champtok=document.getElementById('connected')

if(token && token!="" && token!=undefined){
  champtok.setAttribute('display','block')
  champtok.textContent="Bonjour "+sessionStorage.getItem('profil').toUpperCase()+" "+sessionStorage.getItem('username').toUpperCase()
  }


