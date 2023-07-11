function full_sentence() {
    let part_1 = "Guess what day";
    let part_2 = "it is ...";
    let part_3 = "April Fools!";
    let whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("stringMethod").innerHTML = whole_sentence;
}

function slice_Method() {
    let sentence = "Slice and Dice";
    let section = sentence.slice(10, 14);
    document.getElementById("slice").innerHTML = section;


}

function precision_method() {
    let myNumber = 123.45678910111213;
    document.getElementById("specificlength").innerHTML = myNumber.toPrecision(5);
}