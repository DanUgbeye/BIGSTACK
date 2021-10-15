var toggle = document.getElementById("toggle");
var mode = JSON.parse(localStorage.getItem("mode"));
let clockImg = document.querySelector('#clock-img');

// console.log(mode);

if (mode == 1){
    document.body.classList.toggle("dark-theme");
    toggle.src = "img/sun.png";
    clockImg.src = "img/Clock-No-Hands-PNG-Clipart-white.png";

    // console.log('dark')
}else if(mode == 0){
    document.body.classList.remove("dark-theme");
    toggle.src = "img/moon.png";
    clockImg.src = "img/Clock-No-Hands-PNG-Clipart.png";
    // console.log('light')
}