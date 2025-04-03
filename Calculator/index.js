// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = ""
}
function Equalto(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "ERROR"
    }
}