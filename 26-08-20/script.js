// var Tiene alcance global
var dato = "Pepito"
console.log(dato)
var dato = 28
console.log(dato)

// let Tiene alcance de bloque
let dato2 = "Joselito"
console.log(dato2)
dato2 = 22
console.log(dato2)

// const
//const dato3
//const dato3 = {"Pepita", "Joselito"}
//console.log(dato3)
//dato3.push('Pepito')
//console.log(dato3)

// Ejemplos de variables globales
// var outerWidht = 400
// var nombre = "Pepito"

// Ejemplos de condicionales
if(true){
	var nombre = "Pepito"
}
console.log(nombre)

let deporte = "futbol"

if(true){
	let deporte = "Pepito"
	console.log(deporte)
}

//Operaciones matemáticas
function suma(num1, num2){
	return num1 + num2
}

console.log(suma(2, 4))
console.log(suma(234, 12344))
console.log(suma(225, 42345))
console.log(suma(2345, 23454))
console.log(suma(276465, 42345))

//Operaciones matemáticas
function resta(num1, num2){
	return num1 - num2
}

console.log(resta(2, 4))
console.log(resta(234, 12344))
console.log(resta(225, 42345))
console.log(resta(2345, 23454))
console.log(resta(276465, 42345))

//Operaciones matemáticas
function multip(num1, num2){
	return num1 * num2
}

console.log(multip(2, 4))
console.log(multip(234, 12344))
console.log(multip(225, 42345))
console.log(multip(2345, 23454))
console.log(multip(276465, 42345))

function division(num1, num2){
	return num1 / num2
}

console.log(division(2, 4))
console.log(division(234, 12344))
console.log(division(225, 42345))
console.log(division(2345, 23454))
console.log(division(276465, 42345))

let hora = 10

if(hora >= 9){
	console.log('Estamos en servicio')
}else if(hora>= 8){
	console.log('Estamos abriendo, ingresa a las 9')
}else{
	console.log('La tienda está cerrada')
}

const genero = "mujer"
const edad = 18

if(genero == "mujer" && edad >= 18){
	console.log('Si, es mujer, puede ingresar')
}else{
	console.log('No puede ingresar')
}

let user = 1190302403

if(!user){
	alert('El usuario no está registrado')
}else{
	console.log('El usuario está registrado')
}

//if(name == '' && correo == ''){
//	alert('Por favor llene todos los campos')
//}

function diadelasemana(){
	switch (dia){
		case "lunes":
			console.log('Es lunes, día de trabajo')
			break;
		case "martes":
			console.log('Es martes, día de trabajo')
			break;
		case "miercoles":
			console.log('Es miércoles, día de trabajo')
			break;
		case "jueves":
			console.log('Es jueves, día de trabajo')
			break;
		case "viernes":
			console.log('Es viernes, día de trabajo')
			break;
		case "sabado":
			console.log('Es sábado, día de trabajo')
			break;
		case "domingo":
			console.log('Es domingo, día de trabajo')
			break;
	}
}
