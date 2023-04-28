document.addEventListener("DOMContentLoaded", function() {
    var darkButton = document.getElementById("darkButton");
    
    darkButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        var infoPartidos = document.querySelectorAll(".infoPartido");
        infoPartidos.forEach(function(infoPartido) {
            infoPartido.classList.toggle("dark-mode");
        });
    });
    
});


document.addEventListener("DOMContentLoaded", function() {
var iconList = document.getElementById("iconList");

iconList.addEventListener('click',function(){
    darkButton.classList.toggle('inactive')
})
});


                                        
                                                         //INTERACCION BOTONES DE LOS MESES 


document.addEventListener("DOMContentLoaded",function(){
    var botonMayo = document.getElementById("botonMayo");
    const mesMayo = document.getElementById("mayo");

    botonMayo.addEventListener('click',function(){
        mesMayo.classList.toggle('inactive')
    })
})

   document.addEventListener("DOMContentLoaded",function(){
    var   botonJunio = document.getElementById("botonJunio");
    const mesJunio = document.getElementById("junio");

    mesJunio.addEventListener('click',function(){
        mesJunio.classList.toggle('inactive')
    })
   })

   document.addEventListener("DOMContentLoaded",function(){
    var myButton = document.getElementById("botonMayo");

    myButton.addEventListener("click", function() {
      myButton.classList.add("clicked");
    });
   })
   document.addEventListener("DOMContentLoaded",function(){
    var myButton = document.getElementById("botonJunio");

    myButton.addEventListener("click", function() {
      myButton.classList.toggle("clicked");
    });
   })
   document.addEventListener("DOMContentLoaded",function(){
    var myButton = document.getElementById("botonJulio");

    myButton.addEventListener("click", function() {
      myButton.classList.add("clicked");
    });
   })

   document.addEventListener('DOMContentLoaded',function(){

    function toggleClickedClass(button) {
        var buttons = document.querySelectorAll(".clicked");
      
        buttons.forEach(function(otherButton) {
          if (otherButton !== button && otherButton.classList.contains("clicked")) {
            otherButton.classList.remove("clicked");
          }
        });
      
        button.classList.add("clicked");
      }
      
        

   })


  //-----------------------------------------------------------------------------------------------------------------------------------------------
