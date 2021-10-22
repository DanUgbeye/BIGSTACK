let toggle = document.getElementById("toggle");
let tog = document.getElementById("toggle-link");
let clockImg = document.querySelector('#clock-img');

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

    let toggled;

    switched(toggled);

    if(document.body.classList.contains("dark-theme")){
        toggle.src = "img/sun.png";
        clockImg.src = "img/Clock-No-Hands-PNG-Clipart-white.png";
    }else{
        toggle.src = "img/moon.png";
        clockImg.src = "img/Clock-No-Hands-PNG-Clipart.png";
    }
}