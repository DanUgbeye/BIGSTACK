
let inputNum = document.querySelector("#input");

let convertButton = document.querySelector("#convert");

let inSelec = document.querySelector("#input-unit");
let outSelec = document.querySelector("#output-unit")

function weightConvert(){
    // console.log(e.target)
    let inputSel = document.querySelector("#input-unit").value;
    let outputSel = document.querySelector("#output-unit").value;
    let inputNo = document.querySelector("#input").value;

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





