function Ride_Function() {
    let Height, Can_Ride;
    Height = document.getElementById("Height").ariaValueMax;
    Can_Ride = (Height < 52) ? "You are too short ":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride";
}