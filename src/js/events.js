import {add, reset, decrease} from './counter.js'

let addBtn = document.getElementById("add");
addBtn.addEventListener("click", add);
//Aquí estarán los eventos que ejecutarán
//cada una de las funciones realizadas

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", reset);

let decreaseBtn = document.getElementById("decrease");
decreaseBtn.addEventListener("click", decrease);