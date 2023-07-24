//A function using a while loop
function count_to_Ten() {
    let Digit = "";
    let x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//A function using a for loop
let Instruments = [
    "Guitar",
    "Drums",
    "Piano",
    "Bass",
    "Violin",
    "Trumpet",
    "Flute",
];
let content = "";
let y;
function for_Loop() {
    for (y=0; y < Instruments.length; y++) {
        content += Instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

//A function with an array
function color_array() {
    let colors = [];
    colors[1] = "Green";
    colors[2] = "Red";
    colors[3] = "Blue";
    colors[4] = "Yellow";
    colors[5] = "Orange";
    colors[6] = "Purple";
    document.getElementById("Array").innerHTML = "My favourite color is " + colors[6] + ".";
}

//creating an object with the let keyword
function car() {
    let car = {
        make: "Nissan",
        year: "2023",
        color: "Black",
    };
    document.getElementById("car").innerHTML = "I have a " + car.year + " " + car.color + " " + car.make + ".";
}