let box = 0;
setInterval(setClock, 1000);

let animation = setInterval(() => {
    if(box == 0){
        document.querySelector('.container-analog').style.setProperty('box-shadow', '0 0 20px black');
        box = 1;
    }else if(box == 1){
       document.querySelector('.container-analog').style.setProperty('box-shadow', '0 0 40px black');
       box = 0;
    }
}, 500)




function setClock(){

    let secHand = document.querySelector('.sec');
    let minHand = document.querySelector('.min');
    let hourHand = document.querySelector('.hour');

    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes() ) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secHand, secondsRatio);
    setRotation(minHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
animation;
