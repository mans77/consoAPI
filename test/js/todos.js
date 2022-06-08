if (typeof(Storage) !== "undefined") {
    var deb = localStorage.getItem("programming");
    } else {
    document.getElementById("result").innerHTML = "Browser does not support Web Storage.";
}

console.log(deb)


function loadTodos(id) {
    const postlist = document.querySelector("tbody")
    console.log(id)
    let limit = 5;
    let pageCount = 1;
    let postCount = 1;
  
    var output = "";
    const getData = async () =>{
    const response = await fetch(`http://127.0.0.1:5000/users/`+id+`/todos?_limit=${limit}$_page=${pageCount}`);
    const data = await response.json( ); 
    console.log(data);
   
  //    <td> <input id="ha" type="checkbox" /> </td>
    for (let info of data) {
        console.log(info)
    output += `
  
          <tr>
              <td>
                 <input type="checkbox" style="text-align:center;" class="cbox" ng-model="x.dedbuffer">
             </td>
              <td><textarea  class="text-area" name=monTexte disabled >${info.id}</textarea></td>
              <td><textarea   class="text-area">${info.title}</textarea></td>
              <td><textarea class="text-area">${info.userId}</textarea></td>
              <td><button id="modifier"  onclick="showUserEditBox(${info.id})" >Modifier</button></td>
              <td><button id="afficher" onclick="userDelete(${info.id})">Delete</button></td>
          </tr>   
  `
   postlist.innerHTML = output;
  
  
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
  
  function myFunction() {
  document.getElementsByClassName("text-area").style.color = "red";
  console.log("passe")
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
  
  
  
loadTodos(deb)


function userDelete(id) {

    const myDataObject = { 
        "id": id
      };

    const deleteData = async() =>{
    const response = await fetch(`http://127.0.0.1:5000/todos/`+id, {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myDataObject)
    });

    const data = await response.json( );
    loadTodos(id);
    console.log(data);
  };

deleteData();
}
  
document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display ="flex";
});
document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display ="none";
});

document.querySelector("#teuth").addEventListener("click", function(){
    document.querySelector(".popup").style.display ="none";
});
