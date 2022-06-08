$("document").ready(function(){
    $(".loadpost").on("click",function(){ 
      window.location.href = "http://127.0.0.1:5000/loadpost";  
    });
  });
  $("document").ready(function(){
    $(".addpost").on("click",function(){ 
      window.location.href = "http://127.0.0.1:5000/newpost";  
    });
  });

  $("document").ready(function(){
    $(".loadtodos").on("click",function(){ 
      window.location.href = "http://127.0.0.1:5000/newtodos";  
    });
  });
  $("document").ready(function(){
    $(".addtodos").on("click",function(){ 
      window.location.href = "http://127.0.0.1:5000/addtodos";  
    });
  });
  $("document").ready(function(){
    $(".addalbum").on("click",function(){ 
      window.location.href = "http://127.0.0.1:5000/addalbum";  
    });
  });
  $("document").ready(function(){
    $(".loadalbum").on("click",function(){ 
      window.location.href = "http://127.0.0.1:5000/loadalbum";  
    });
  });
  $("li:gt(2)").hide();

  $(".show-more a").on("click", function() {
      $("li:gt(2)").toggle();
      if ($("li:gt(2)").is(":visible")) {
        $(this).html("Show less");
      } else {
        $(this).html("Show more");    
      }
  });