let number = 0;
function add(){
    let numberResult = document.getElementById("number");
    numberResult.innerHTML = ++number;
}

function reset(){
    //Escribir tu código que hace un reset a 0
    number = 0;
    let numberResult = document.getElementById("number");
    numberResult.innerHTML = number;
}

function decrease(){
    //Escribir tu código que resta
    let numberResult = document.getElementById("number");
    if(number > 0){
        numberResult.innerHTML = --number;
    }
    
};

export {add, reset, decrease}