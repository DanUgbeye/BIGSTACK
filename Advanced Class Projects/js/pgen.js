let pField = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&=";


let button = document.querySelector('#pword-gen button');

document.querySelector('.copy-icon').onMouseOut = function () {
    document.querySelector("#popup-text").innerHTML = "copy to clipboard";
    document.querySelector("#popup-text").style.display = "block";
    document.querySelector("#popup-text").style.opacity = "1";
}



button.onclick = () => {

    let noChar = +document.querySelector('#pword-gen .sel input').value;
    let output = document.querySelector('#print');
    let copyIcons = document.querySelector('.copy')
    let copyIconWhite = document.querySelector('#white');
    let copyIconBlack = document.querySelector('#black');

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

            copyIconWhite.style.display = "none";
            copyIconBlack.style.display = "block";

            if (output.value == "") {
                alert('Nothing to copy')
            }

            output.select();
            output.setSelectionRange(0, 999);
            navigator.clipboard.writeText(output.value);

            var popup = document.querySelector("#popup-text");
            popup.innerHTML = "Copied";
            // alert('copied');
        }
    }

}



// Swal.fire({title: 'success',text:ffhirh,icon})