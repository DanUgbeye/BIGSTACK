
var inputNum = document.querySelector("#input");

var convertButton = document.querySelector("#convert");

var inSelec = document.querySelector("#input-unit");
var outSelec = document.querySelector("#output-unit")

function weightConvert(){
    // console.log(e.target)
    var inputSel = document.querySelector("#input-unit").value;
    var outputSel = document.querySelector("#output-unit").value;
    var inputNo = document.querySelector("#input").value;

    if(!inputNo){
        document.querySelector("#output").value = null;

    }else{ 
    
        if(inputSel == outputSel){
            document.querySelector("#output").value = inputNo;
        }
    
        if(inputSel == "kg" && outputSel == "pound"){
            Math.fround(document.querySelector("#output").value = (inputNo * 2.2046));
        }
    
        if(inputSel == "pound" && outputSel == "kg"){
            Math.fround(document.querySelector("#output").value = (inputNo * 0.4536));
        }
    }
    
}


inputNum.addEventListener('input', weightConvert )
inSelec.addEventListener('click', weightConvert);
outSelec.addEventListener('click', weightConvert);





