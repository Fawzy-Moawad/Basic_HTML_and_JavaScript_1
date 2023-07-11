function countdown() {
    let seconds = document.getElementById("seconds").ariaValueMax;

    functiontick() {
        seconds = seconds - 1;
        timer.innerhtml = seconds;
        if (seconds > 0) {
            setTimeout(tick, 1000);
        }else {
            alert("Time's up!");
        }
    }
    tick();
}