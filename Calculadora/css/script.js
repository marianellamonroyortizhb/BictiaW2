// Variables
let Numero1 = null;
let Numero2 = null;

let total = document.getElementById('total');

Numero1 = document.getElementById('N1').value;
Numero2 = document.getElementById('N2').value;

num1 = parseInt(Numero1,10)
num2 = parseInt(Numero2,10)

//Operaciones matemáticas
function suma(num1, num2){
	let result_suma = num1 + num2
	return result_suma
	
}
total.innerHTML = resul_suma;

function resta(num1, num2){
	let result_resta = num1 - num2
	return result_resta
	
}
total.innerText = resul_resta;

function multip(num1, num2){
	let result_multip = num1 * num2
	return result_multip
}
total.innerText = resul_mult;

function division(num1, num2){
	let result_div = num1 / num2
	return result_div
}
total.innerText = resul_div;
