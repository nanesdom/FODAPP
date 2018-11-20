function per(){
	handleUpdate();
}

function handleUpdate(e){	
	// var x = Math.floor((Math.random() * 3) + 1);
	// if (x==1) {
	// 	conjunto1();
	// }
	// if (x==2) {
	// 	conjunto2();
	// }
	// if (x==3) {
	// 	conjunto3();
	// }
	conjunto1();
}

function conjunto1(){
	body = document.body;
	fondo = document.querySelector('.imgFondo');
	
	body.style.setProperty('--color-fuerte', "#000");
	body.style.setProperty('--color-medio', "#555");
	body.style.setProperty('--color-contraste', "#fbc531");
	body.style.setProperty('--color-contraste2', "#e84118");
	fondo.src="media/fondo1.jpg";
}
function conjunto2(){
	body = document.body;
	fondo = document.querySelector('.imgFondo');
	
	body.style.setProperty('--color-fuerte', "#2f3640");
	body.style.setProperty('--color-medio', "#40739e");
	body.style.setProperty('--color-contraste', "#e1b12c");
	body.style.setProperty('--color-contraste2', "#e84393");
	fondo.src="media/fondo.jpg";
}

function conjunto3(){
	body = document.body;
	fondo = document.querySelector('.imgFondo');
	
	body.style.setProperty('--color-fuerte', "#4F1E51");
	body.style.setProperty('--color-medio', "#D980FA");
	body.style.setProperty('--color-contraste', "#C4E538");
	body.style.setProperty('--color-contraste2', "#12CBC4");
	fondo.src="media/fondo2.jpg";
}

function loadPerfil(){
	namee = localStorage.getItem('user');
	expedientee = localStorage.getItem('expediente');

	nombre = document.getElementById('name');
	showName = document.getElementById('showName');
	expediente = document.getElementById('correo');

	nombre.value=namee;
	showName.innerHTML=namee;
	expediente.value=expedientee;
}

function variables(){
	idUser = localStorage.getItem('user');

	if (idUser == "" || idUser == " " || idUser == null) {
		salir();
	}// else{

	// 	formData = new FormData();
	// 		formData.append('idUser', idUser);

	// 		loadPerfilBD = new XMLHttpRequest();
	// 		loadPerfilBD.open('POST', 'php/loadPerfil.php');

			

	// 		loadPerfilBD.send(formData);

	// 		loadPerfilBD.onreadystatechange = function() {

	// 			if (loadPerfilBD.readyState == 4 && loadPerfilBD.status == 200) {

	// 					respuesta = JSON.parse(loadPerfilBD.responseText);						

	// 					resultado = respuesta.logueado;

	// 					// console.log(resultado);
	// 					if (resultado == "ok") {							
	// 						localStorage.setItem('user', respuesta.username);
	// 						localStorage.setItem('correo', respuesta.correo);							
	// 						localStorage.setItem('id', respuesta.id);
	// 						localStorage.setItem('edad', respuesta.edad);							
	// 						localStorage.setItem('imgPerfil', respuesta.imgPerfil);
	// 						verMensaje4('Bienvenido');						
	// 					}
	// 					else{
	// 						salir();
	// 					}
		   
	// 			}
	// 		}

	// 		// console.log(idUser);
	// }

}

function load(){
	variables()
	per();
	loadPerfil();
	loadPage();

	localStorage.removeItem('promedio1');
	localStorage.removeItem('promedio2');
	localStorage.removeItem('promedio3');
}

function loadPage(){
	body = document.body;

	body.style.opacity="1";
}