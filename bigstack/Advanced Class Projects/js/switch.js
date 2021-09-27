var comingSoon = document.querySelector(".coming-soon")
var toDo = document.querySelector(".to-do")
var weight = document.querySelector(".weight")
var pwordGen = document.querySelector(".pword-gen")


comingSoon.onclick = function(){

    document.querySelector("#coming-soon").style.display= "flex"
    document.querySelector("#to-do").style.display= "none"
    document.querySelector("#weight").style.display= "none"
    document.querySelector("#pword-gen").style.display= "none"
    document.querySelector(".footer").style.display= "flex"
    
}

toDo.onclick = function(){

    document.querySelector("#coming-soon").style.display= "none"
    document.querySelector("#to-do").style.display= "flex"
    document.querySelector("#weight").style.display= "none"
    document.querySelector("#pword-gen").style.display= "none"
    document.querySelector(".footer").style.display= "none"
}

weight.onclick = function(){

    document.querySelector("#coming-soon").style.display= "none"
    document.querySelector("#to-do").style.display= "none"
    document.querySelector("#weight").style.display= "flex"
    document.querySelector("#pword-gen").style.display= "none"
    document.querySelector(".footer").style.display= "none"
}

pwordGen.onclick = function(){

    document.querySelector("#coming-soon").style.display= "none"
    document.querySelector("#to-do").style.display= "none"
    document.querySelector("#weight").style.display= "none"
    document.querySelector("#pword-gen").style.display= "flex"
    document.querySelector(".footer").style.display= "none"
}