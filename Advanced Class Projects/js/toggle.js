var toggle = document.getElementById("toggle");
var tog = document.getElementById("toggle-link")

function switched(toggled){
    
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")){
        toggled = 1;
    }else{
        toggled = 0;
    };

    localStorage.setItem("mode", JSON.stringify(toggled))
}

toggle.onclick, tog.onclick = function(){

    var toggled;

    switched(toggled);

    if(document.body.classList.contains("dark-theme")){
        toggle.src = "img/sun.png";
    }else{
        toggle.src = "img/moon.png";
    }
}