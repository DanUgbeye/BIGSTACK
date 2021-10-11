// The data/time we want to countdown to
var countDownDate = new Date("Oct 10, 2021 12:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {

    var now = new Date().getTime();

    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left

    var trueDays = timeleft / (1000 * 60 * 60 * 24);
    var days = Math.floor(trueDays);

    var trueHours = (trueDays - Math.floor(trueDays)) * 24;
    var hours = Math.floor(trueHours);

    var trueMinutes = (trueHours - Math.floor(trueHours)) * 60;
    var minutes = Math.floor(trueMinutes);

    var trueSeconds = (trueMinutes - Math.floor(trueMinutes)) * 60;
    var seconds = Math.floor(trueSeconds);

    // Outputing the Time left

    if((days < 10 && days > 0) || days == 0){
        document.getElementById("days").innerHTML = "0"+ days + " <br> days"
    } else{
        document.getElementById("days").innerHTML = days + " <br> days"
    }

    if((hours < 10 && hours > 0) || hours == 0 ){
        document.getElementById("hours").innerHTML = "0"+ hours + "<br> hrs "
    } else{
        document.getElementById("hours").innerHTML = hours + " <br> hrs "
    }
    
    if((minutes < 10 && minutes > 0) || minutes == 0 ){
        document.getElementById("mins").innerHTML = "0"+ minutes + " <br> mins "
    } else{
        document.getElementById("mins").innerHTML = minutes + " <br> mins "
    }
    
    if((seconds < 10 && seconds > 0) || seconds == 0 ){
        document.getElementById("secs").innerHTML = "0"+ seconds + " <br> secs "
    } else{
        document.getElementById("secs").innerHTML = seconds + " <br> secs "
    }
    
    
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        
        document.querySelector(".launch").style.visibility = "hidden"

        // document.getElementById("days").innerHTML = "--"
        // document.getElementById("hours").innerHTML = "--"
        // document.getElementById("mins").innerHTML = "--"
        // document.getElementById("secs").innerHTML = "--"
        // document.getElementById("elapsed").innerHTML = "TIME UP!!";
    }
}, 1000);


