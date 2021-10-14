var toggle = document.getElementById("toggle");
var mode = JSON.parse(localStorage.getItem("mode"));
// console.log(mode);

if (mode == 1){
    document.body.classList.toggle("dark-theme");
    toggle.src = "img/sun.png";
    // console.log('dark')
}else if(mode == 0){
    document.body.classList.remove("dark-theme");
    toggle.src = "img/moon.png";
    // console.log('light')
}