// $("document").ready(function(){
//   $("#add").on("click",function(){
//     window.location.href = "http://127.0.0.1:5000/load";  
//   });
// });

const adduser=document.getElementById("add")
adduser.addEventListener('click',()=>{
  console.log("pow")
  window.location.href = "http://127.0.0.1:5000/load"
})

$("document").ready(function(){
  $("#pav").on("click",function(){
    window.location.href = "http://127.0.0.1:5000/login";  
  });
});
