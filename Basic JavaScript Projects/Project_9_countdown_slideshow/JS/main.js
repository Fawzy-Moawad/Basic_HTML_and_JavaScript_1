//countdown timer function
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
//imag slideshow functions
let slideIndex = 1;
showSlides(slideIndex);

//next/previous controls
function plusSlide(n) {
    showSlides(slideIndex+= n);
}
//thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[1].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}