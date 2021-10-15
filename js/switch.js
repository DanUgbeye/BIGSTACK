var comingSoon = document.querySelector(".coming-soon");
var toDo = document.querySelector(".to-do");
var weight = document.querySelector(".weight");
var pwordGen = document.querySelector(".pword-gen");


comingSoon.onclick = function () {

    document.querySelector(".coming-soon").classList.add("active");
    document.querySelector(".to-do").classList.remove("active");
    document.querySelector(".weight").classList.remove("active");
    document.querySelector(".pword-gen").classList.remove("active");
    document.querySelector(".analog-clock").classList.remove("active");

    document.querySelector("#coming-soon").style.display = "flex";
    document.querySelector("#to-do").style.display = "none";
    document.querySelector("#weight").style.display = "none";
    document.querySelector("#pword-gen").style.display = "none";
    document.querySelector("#analog-clock").style.display = "none";

}

toDo.onclick = function () {

    document.querySelector(".coming-soon").classList.remove("active");
    document.querySelector(".to-do").classList.add("active");
    document.querySelector(".weight").classList.remove("active");
    document.querySelector(".pword-gen").classList.remove("active");
    document.querySelector(".analog-clock").classList.remove("active");

    document.querySelector("#coming-soon").style.display = "none";
    document.querySelector("#to-do").style.display = "flex";
    document.querySelector("#weight").style.display = "none";
    document.querySelector("#pword-gen").style.display = "none";
    document.querySelector("#analog-clock").style.display = "none";

}

weight.onclick = function () {

    document.querySelector(".coming-soon").classList.remove("active");
    document.querySelector(".to-do").classList.remove("active");
    document.querySelector(".weight").classList.add("active");
    document.querySelector(".pword-gen").classList.remove("active");
    document.querySelector(".analog-clock").classList.remove("active");

    document.querySelector("#coming-soon").style.display = "none";
    document.querySelector("#to-do").style.display = "none";
    document.querySelector("#weight").style.display = "flex";
    document.querySelector("#pword-gen").style.display = "none";
    document.querySelector("#analog-clock").style.display = "none";

}

pwordGen.onclick = function () {

    document.querySelector(".coming-soon").classList.remove("active");
    document.querySelector(".to-do").classList.remove("active");
    document.querySelector(".weight").classList.remove("active");
    document.querySelector(".pword-gen").classList.add("active");
    document.querySelector(".analog-clock").classList.remove("active");

    document.querySelector("#coming-soon").style.display = "none";
    document.querySelector("#to-do").style.display = "none";
    document.querySelector("#weight").style.display = "none";
    document.querySelector("#pword-gen").style.display = "flex";
    document.querySelector("#analog-clock").style.display = "none";

}

function analogClock(){

    document.querySelector(".coming-soon").classList.remove("active");
    document.querySelector(".to-do").classList.remove("active");
    document.querySelector(".weight").classList.remove("active");
    document.querySelector(".pword-gen").classList.remove("active");
    document.querySelector(".analog-clock").classList.add("active");

    document.querySelector("#coming-soon").style.display = "none";
    document.querySelector("#to-do").style.display = "none";
    document.querySelector("#weight").style.display = "none";
    document.querySelector("#pword-gen").style.display = "none";
    document.querySelector("#analog-clock").style.display = "flex";
}