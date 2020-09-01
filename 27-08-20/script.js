const Message = document.getElementById('MessageFill')

function CheckInfo(e){
	e.preventDefault()
	let UsName = document.getElementById('InputName').value;
	let UsLastname = document.getElementById('InputLastname').value;
	let UsPassword = document.getElementById('InputPassword').value;
	let UsEmail = document.getElementById('InputEmail').value;

	if (UsName == '' || UsLastname == '' || UsPassword == '' || UsEmail == '' )
	{
		Message.innerText = 'Por favor completa todos los datos obligatorios'
	}
}
