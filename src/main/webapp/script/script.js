
function crearUsuario(){
	
	if(localStorage.getItem("a") == null)
	localStorage.setItem("a", 1);
	
	let nombre = document.getElementsByName('nombre')[0].value;
	let apellidos = document.getElementsByName('apellidos')[0].value;
	
	let preguntaRec = document.getElementsByName('preguntaRec')[0].value;
	let respuestaRec = document.getElementsByName('respuestaRec')[0].value;
	let email = document.getElementsByName('email')[0].value;
	let contraseña = document.getElementsByName('contraseña')[0].value;
	let contraseñaV = document.getElementsByName('contraseñaV')[0].value;
	
	let a = parseInt(localStorage.getItem("a"));
	
	//if(contraseña!=contraseñaV){
		
		alert("ERROR las contraseñas no coinciden");
				
		localStorage.setItem("nombre"+a, nombre);
		localStorage.setItem("apellidos"+a, apellidos);
		localStorage.setItem("preguntaRec"+a, preguntaRec);
		localStorage.setItem("respuestaRec"+a, respuestaRec);
		localStorage.setItem("email"+a, email);
		localStorage.setItem("contraseña"+a, contraseña);				
	//}
	
	console.log(localStorage.getItem("nombre"+1));
	console.log(localStorage.getItem("nombre"+2));
	console.log(localStorage.getItem("nombre"+3));
	console.log(a);
	console.log(localStorage.getItem("a"));
	console.log();
	
	localStorage.setItem("a", a+1);
	
	alert("se guardo");
	
}

function login(){
	
	let email = document.getElementsByName('email')[0].value;
	let contraseña = document.getElementsByName('contraseña')[0].value;
	
	let a = parseInt(localStorage.getItem("a"));
	
	console.log("login");
	
	for(let i=1;i<a;i++)
	{	
		if(email+i!=localStorage.getItem("email"+a))
		{		
			console.log("usuario no existe");
			console.log(a);
			console.log(a);		
			rec();
			break;
		}		
	}
	 

	
	
	//alert("ERRROR la respuesta es incorrecta");
}


	
	
function recuperar(){
	
	
	
	
	
	
}
	
	
	
function rec(){

c = confirm('Quieres recuperar la contraseña');

if(c == true){

window.location = 'recuperacion.html';

}

else{

return false;

}

}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	