function addValue(value) {
    var value;
    // value=parseInt(value);
    // mainDisplay +=value;
    // document.getElementById("mainDisplay").innerHTML +=value;
    mainDisplay.value +=value;
    // alert(value);
}
function calCulation() {
    mainDisplay.value= eval(mainDisplay.value);
}

function clearAll() {
    mainDisplay.value= "";
}
function signValue() {
    mainDisplay.value= mainDisplay.value * -1;
}
function removeLast() {
    mainDisplay.value= mainDisplay.value.substring(0, mainDisplay.value.length-1);
}