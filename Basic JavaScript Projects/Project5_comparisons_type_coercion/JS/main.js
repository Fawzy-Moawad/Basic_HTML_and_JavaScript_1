let x = true;
document.write(typeof x);
document.write("<br>");

document.write("10 + 10");
document.write("<br>");

document.write("10 == 10");
document.write("<br>");

f = 1;
m = 1;
document.write(f===m);
document.write("<br>");

document.write(10 > 5 && 11> 6);
document.write("<br>");

document.write(10 < 5 || 11< 6);
document.write("<br>");

function not_function() {
    document.getElementById("Not").innerHTML = !(1 > 2);
}