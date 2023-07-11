function Ride_Function() {
    let Height, Can_Ride;
    Height = document.getElementById("Height").ariaValueMax;
    Can_Ride = (Height < 52) ? "You are too short ":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle("Jeep", "Trail Hawak", 2019, "White And Black");
let Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");


function myFunction() {
    document.getElementById("Keywords_and_Contructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + "manufactured in" + Erik.Vehicle_Year;
}


function add_string() {
    let start_string = "Hello";
    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("World");
    document.getElementById("Nested_Function").innerHTML = start_string;
}