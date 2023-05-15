
    
    
     // DARK BUTTON
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


    // LINK COPA LIBERTADORES Y LPF ->

    document.addEventListener("DOMContentLoaded", function() {
       
          
          // Find the button element and add the click event listener
          var btnAddInactive = document.getElementById("btnAddInactive");
          var infoPartido = document.querySelectorAll(".infoPartido");
          var lpf = document.getElementById('btnTorneoLpf');

          lpf.addEventListener("click", function(){
            const   mayo = document.getElementById("mayo");
            const   junio = document.getElementById("junio");
            const   julio = document.getElementById("julio");
            
            lpf.classList.toggle('clicked');
            btnAddInactive.classList.remove('clicked');
                infoPartido.forEach(function(element){
                    if(element.id === "copaLibertadores"){
                        element.classList.toggle('inactive');
                        mayo.classList.remove('inactive');
                        junio.classList.remove('inactive');
                        julio.classList.remove('inactive');
                        
                        
                    }else{
                        element.classList.remove('inactive');
                    }
                    
                })
            })
          btnAddInactive.addEventListener("click", function(){
            const   mayo = document.getElementById("mayo");
            const   junio = document.getElementById("junio");
            const   julio = document.getElementById("julio");
            
            btnAddInactive.classList.toggle('clicked');
            lpf.classList.remove('clicked');
                infoPartido.forEach(function(element){
                    if(element.id !== "copaLibertadores"){
                        element.classList.toggle('inactive');
                       junio.classList.remove('inactive');
                       julio.classList.remove('inactive');
                       mayo.classList.remove('inactive');
                        
                    }else{
                        element.classList.remove('inactive');
                    }
                    
                })
            }
            
          );
          
        });

    // MENU OPEN-CLOSE
document.addEventListener("DOMContentLoaded", function() {
var iconList = document.getElementById("iconList");
var menu = document.getElementById("top-left menu");
var hambIcon = document.getElementById("iconList");


iconList.addEventListener('click',function(){
    menu.classList.toggle('inactive');
    hambIcon.classList.toggle('open');
})
});



    
                                        
                                                         //INTERACCION BOTONES DE LOS MESES 




                                                         //PARA MOSTRAR SOLAMENTE 1 MES 
                                                         
document.addEventListener("DOMContentLoaded", function() {
const   mayo = document.getElementById("mayo");
var botonMayo = document.getElementById("botonMayo")

const   junio = document.getElementById("junio");
var botonJunio = document.getElementById("botonJunio")

const   julio = document.getElementById("julio");
var botonJulio = document.getElementById("botonJulio")



if(botonMayo.classList.contains('clicked')){
    
    junio.classList.add('inactive');
    julio.classList.add('inactive');

}

botonJunio.addEventListener('click',function(){
    mayo.classList.add('inactive');
    botonMayo.classList.remove('clicked')
    julio.classList.add('inactive');
});
botonJulio.addEventListener('click',function(){
    mayo.classList.add('inactive');
    junio.classList.add('inactive');
})
botonMayo.addEventListener('click',function(){
    junio.classList.add('inactive');
    julio.classList.add('inactive');
})
});

document.addEventListener("DOMContentLoaded",function(){
    const   mayo = document.getElementById("mayo");
    var botonMayo = document.getElementById("botonMayo")

    const   junio = document.getElementById("junio");
    var botonJunio = document.getElementById("botonJunio")

    const   julio = document.getElementById("julio");
    var botonJulio = document.getElementById("botonJulio")


    botonMayo.addEventListener('click',function(){
        let buttonClicked = false;
        if(!buttonClicked){
            mayo.classList.add('inactive');
            buttonClicked = true;
        }else{
            console.log('PIRRO')
        }
    });
    botonJunio.addEventListener('click',function(){
        let buttonClicked = false;
        if(!buttonClicked){
            junio.classList.add('inactive');
            buttonClicked = true;
        }else{
            console.log('PIRRO')
        }
    });
    botonJulio.addEventListener('click',function(){
        let buttonClicked = false;
        if(!buttonClicked){
            julio.classList.add('inactive');
            buttonClicked = true;
        }else{
            console.log('PIRRO')
        }
    });
});

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
    

    botonJunio.addEventListener('click',function(){
        mesJunio.classList.toggle('inactive')
    })
   })
   document.addEventListener("DOMContentLoaded",function(){
    var   botonJulio = document.getElementById("botonJulio");
    const mesJulio = document.getElementById("julio");

    botonJulio.addEventListener('click',function(){
        mesJulio.classList.toggle('inactive')
    })
   })

   document.addEventListener("DOMContentLoaded",function(){
    var myButton = document.getElementById("botonMayo");

    myButton.addEventListener("click", function() {
      myButton.classList.toggle("clicked");
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
      myButton.classList.toggle("clicked");
    });
   })

   document.addEventListener('DOMContentLoaded',function(){



    // PARA ELIMINAR EL HOVER DE OTROS BOTONES
    // Get all buttons
    const buttons = document.querySelectorAll('button');

    // Initialize the currently clicked button variable to null
    let currentlyClicked = null;

    // Add click event listener to each button
    buttons.forEach(button => {
    button.addEventListener('click', () => {
    // Remove "clicked" state from the previously clicked button
    if (currentlyClicked) {
      currentlyClicked.classList.remove('clicked');
    }

    // Add "clicked" state to the newly clicked button
    button.classList.add('clicked');

    // Set the currently clicked button variable to the newly clicked button
    currentlyClicked = button;
  });
});
        

   })


  //-----------------------------------------------------------------------------------------------------------------------------------------------

 // MENU -->


