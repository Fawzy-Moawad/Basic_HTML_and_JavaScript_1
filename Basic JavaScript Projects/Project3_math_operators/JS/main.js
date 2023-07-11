function addition() {
   let add = 1+2;
    document.getElementById("Add").innerHTML = "1 + 2 = " + add;
}

function subtraction() {
    let sub = 9-7;
    document.getElementById("Sub").innerHTML = "9 - 7 = " + sub;
}

function multiplication() {
    let mult = 12*5;
    document.getElementById("Mlt").innerHTML = "12 * 5 = " + mult;
}

function division() {
    let div = 39/3;
    document.getElementById("Div").innerHTML = "39 / 3 = " + divide;
}

function random() {
    document.getElementById("Ran").innerHTML = Math.random()*10;

function modulus_operator() {
    let modulus = 38%4;
    document.getElementById("Mod").innerHTML = "when you divide 38 by 4 you have a remainder of :  " + modulus;
}

function Increment() {
    let value = document.getElementById("Incrementtexet").innerHTML;
    value++;
    document.getElementById("Incrementtexet").innerHTML = value;
}

function Decrement() {
    let value = document.getElementById("Decrementtext").innerHTML;
    value--;
    document.getElementById("Decrementtext").innerHTML = value;
}