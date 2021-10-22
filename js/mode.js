let currentMode = function() {
    let toggle = document.getElementById("toggle");
    let mode = JSON.parse(localStorage.getItem("mode"));
    let clockImg = document.querySelector('#clock-img');

    if (mode == 1){
        document.body.classList.toggle("dark-theme");
        toggle.src = "img/sun.png";
        clockImg.src = "img/Clock-No-Hands-PNG-Clipart-white.png";
    }else if(mode == 0){
        document.body.classList.remove("dark-theme");
        toggle.src = "img/moon.png";
        clockImg.src = "img/Clock-No-Hands-PNG-Clipart.png";
    }
}

currentMode();