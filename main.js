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