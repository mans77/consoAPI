var token=sessionStorage.getItem('token')
var champtok=document.getElementById('connected')
var profil=sessionStorage.getItem('profil')
if(token && token!="" && token!=undefined){
  champtok.setAttribute('display','block')
  champtok.textContent="Bonjour "+profil.toUpperCase()+" "+sessionStorage.getItem('username').toUpperCase()
  }

function loadTable() {
    const postlist = document.querySelector("tbody")

    let limit = 5;
    let pageCount = 1;
    let postCount = 1;

    var output = "";
    const getData = async () =>{
    const response = await fetch(`http://127.0.0.1:5000/users?_limit=${limit}$_page=${pageCount}`);
   
    const data = await response.json( ); 
    console.log(data);
   
//    <td> <input id="ha" type="checkbox" /> </td>
    for (let info of data) {
    output += `
  
 
          <tr>
              <td>
                 <input type="checkbox" style="text-align:center;" class="cbox" ng-model="x.dedbuffer">
             </td>
              <td><textarea  disabled class="text-area" name=monTexte disabled >${info.id}</textarea></td>
              <td><textarea disabled  ondblclick="this.contentEditable=true;"  class ="text-area">${info.name}</textarea></td>
              <td><textarea disabled  ondblclick="this.contentEditable=true;" class="text-area">${info.username}</textarea></td>
              <td><textarea disabled class="text-area">${info.phone}</textarea></td>
              <td><textarea disabled class="text-area">${info.website}</textarea></td>
              <td><textarea disabled class="text-area">${info.email}</textarea></td>
              <td><button id="modifier"  onclick="showUserEditBox(${info.id})" >Modifier</button></td>
              <td><a href="posts.html" onclick="send(${info.id})"; class="bouton" id="afficher">Afficher</a></td>
      
            </tr>   
  `
   postlist.innerHTML = output
   
  
  

    }
var bee = document.querySelectorAll("tr")
for(let u of bee){
var check =  document.querySelectorAll('.cbox')
for(let i of check){
i.addEventListener( 'click', function(){
var textArea = u.querySelectorAll('.text-area')
      textArea.forEach(function(item){
         item.disabled = !item.disabled
      })
  })
}


}

}
getData();

const showDate  = () => {
  setTimeout(() => {
      pageCount++;
      getData();
  },100);
}
window.addEventListener('scroll', () => {
  const {scrollHeight, scrollTop, clientHeight} = document.documentElement;

  if(scrollTop + clientHeight >= scrollHeight ) {
      showDate();
  }
})



};

loadTable();


function send(id){
  if (typeof(Storage) !== "undefined") {
  localStorage.setItem("programming", id);
  }
}




function showUserEditBox(id) {


  const myUrl = (`http://127.0.0.1:5000/users/`+id)

  const getData = async ( ) =>{
     const response = await fetch(myUrl);
     const user = await response.json( );
     console.log(user);
     
      Swal.fire({
        title: 'Edit User',
        html:
          '<input id="id" type="hidden" value='+user['id']+'>' +
          '<input id="name" class="swal2-input" placeholder="name" value="'+user['mame']+'">' +
          '<input id="email" class="swal2-input" placeholder="username" value="'+user['email']+'">' +
          '<input id="username" class="swal2-input" placeholder="email" value="'+user['username']+'">' +
          '<input id="phone" class="swal2-input" placeholder="phone" value="'+user['phone']+'">' +
          '<input id="website" class="swal2-input" placeholder="website" value="'+user['website']+'">' +
          '<input id="street" class="swal2-input" placeholder="street" value="'+user['street']+'">' +
          '<input id="suite" class="swal2-input" placeholder="suite" value="'+user['suite']+'">' +
          '<input id="city" class="swal2-input" placeholder="city" value="'+user['city']+'">' +
          '<input id="zipcode" class="swal2-input" placeholder="zipcode" value="'+user['zipcode']+'">' +
          '<input id="lat" class="swal2-input" placeholder="lat" value="'+user['lat']+'">' +
          '<input id="lng" class="swal2-input" placeholder="lng" value="'+user['lng']+'">' +
          '<input id="namecomp" class="swal2-input" placeholder="name company" value="'+user['name_company']+'">' +
          '<input id="catch" class="swal2-input" placeholder="catchPhrase" value="'+user['catchPrase']+'">' +
          '<input id="bs" class="swal2-input" placeholder="bs" value="'+user['bs']+'">',
        focusConfirm: false,
        preConfirm: () => {
          userEdit(user.id);
        }
      })
     }
  
  
  getData( );

 
}


  function userEdit(ident) {
    
    const id = document.getElementById("id").value;
    const username = document.getElementById("username").value;
    const name = document.getElementById("name").value;
    const phone= document.getElementById("phone").value;
    const website = document.getElementById("website").value;
    const email = document.getElementById("email").value;
    const street = document.getElementById("street").value;
    const suite = document.getElementById("suite").value;
    const city = document.getElementById("city").value;
    const zipcode = document.getElementById("zipcode").value;
    const lat = document.getElementById("lat").value;
    const lng = document.getElementById("lng").value;
    const namecomp = document.getElementById("namecomp").value;
    const catcher = document.getElementById("catch").value;
    const bs = document.getElementById("bs").value;
    
    
   
    const myDataObject ={ 
        "id": id,"name": name, "username": username, "phone": phone, "website": website,"email": email, "street": street,"suite": suite,
        "city": city, "zipcode": zipcode,"catchPrase": catcher,"lat": lat,"lng": lng, "name_company": namecomp,"bs": bs
      };


    const putData = async ( ) =>{
    const response = await fetch(`http://127.0.0.1:5000/users/`+ident, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myDataObject)
    });

    const data = await response.json( );
    
      
    
    loadTable();
    console.log(data);
    };
    putData();

  }





function userCreate() {

    const id = document.getElementById("id").value;
    const username = document.getElementById("username").value;
    const name = document.getElementById("name").value;
    const phone= document.getElementById("phone").value;
    const website = document.getElementById("website").value;
    const email = document.getElementById("email").value;
    const street = document.getElementById("street").value;
    const suite = document.getElementById("suite").value;
    const city = document.getElementById("city").value;
    const zipcode = document.getElementById("zipcode").value;
    const lat = document.getElementById("lat").value;
    const lng = document.getElementById("lng").value;
    const namecomp = document.getElementById("namecomp").value;
    const catcher = document.getElementById("catch").value;
    const bs = document.getElementById("bs").value;
    const myDataObject = { 
        "id": parseInt(id),"name": name, "username": username, "phone": phone, "website": website,"email": email, "street": street,"suite": suite,
        "city": city, "zipcode": zipcode,"catchPrase": catcher,"lat": lat,"lng": lng, "name_company": namecomp,"bs": bs
      };

    const postData = async ( ) =>{
    const response = await fetch("http://127.0.0.1:5000/users", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myDataObject)
    });

    const data = await response.json( );
  
    loadTable();
    
    console.log(data);
    };
    postData();

  }


document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display ="flex";
});

document.querySelector("#teuth").addEventListener("click", function(){
    document.querySelector(".popup").style.display ="none";
});

document.querySelector(".close").addEventListener("click", function(){
  document.querySelector(".popup").style.display ="none";
});





