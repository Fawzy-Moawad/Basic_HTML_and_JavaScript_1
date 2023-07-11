var x = 10;
function Add_numbers_1() {
    var x =99;
    document.write(10 + x + "<br>");
}

function Add_numbers_2() {
    document.write(x + 11);
    console.log(x);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "It is currently before 6pm.";
    }
}