let pField = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&=%?.,+_/";


let button = document.querySelector('#pword-gen button');

function hover() {
    if(document.querySelector('#print').value == ""){
        document.querySelector("#popup-text").style.display = "none";
    }else{
        document.querySelector("#popup-text").style.display = "block";

        setTimeout(()=>{
            document.querySelector("#popup-text").style.display = "none";
        }, 2000)
    }
}

function onLeave(){
    document.querySelector("#popup-text").style.display = "none";
}


button.onclick = () => {

    let noChar = +document.querySelector('#pword-gen .sel input').value;
    let output = document.querySelector('#print');
    let copyIcons = document.querySelector('.copy')
    let copyIconWhite = document.querySelector('#white');
    let copyIconBlack = document.querySelector('#black');
    let popup = document.querySelector("#popup-text");

    popup.innerHTML = "Copy to Clipboard";
    popup.style.top = "-145%";
    copyIconWhite.style.display = "block";
    copyIconBlack.style.display = "none";

    let pword = "";

    if (noChar == null) {
        alert("Input number of Characters to generate");
    } else if (noChar < 8) {
        alert('Password length is too short\n Input number greater than or equal to 8');
    } else if (noChar > 1000) {
        alert('Input number less than or equal to 999');
    } else {
        while (noChar > 0) {
            let rand = Math.floor(Math.random() * pField.length);
            pword += pField[rand];
            --noChar;
        }

        output.value = pword;

        copyIcons.onclick = () => {

            let timer;

            if(timer != undefined ){
                clearTimeout(timer);
            }

            copyIconWhite.style.display = "none";
            copyIconBlack.style.display = "block";
            popup.style.display = "block";

            if (output.value == "") {
                alert('Nothing to copy')
            }

            output.select();
            output.setSelectionRange(0, 999);
            navigator.clipboard.writeText(output.value);

            popup.innerHTML = "Copied";
            popup.style.top = "-100%";

            timer = setTimeout(()=>{
                popup.style.display = "none";
            }, 2000)
        }
    }

}



// Swal.fire({title: 'success',text:ffhirh,icon})