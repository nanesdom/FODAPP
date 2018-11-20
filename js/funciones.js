function verMensaje(msj){
				mensaje = document.getElementById('mensaje');
				mensaje2 = document.getElementById('mensaje2');

				mensaje2.style.top="-80px";	
				
				mensaje2.style.background= "#e74c3c";

				mensaje.style.background= "#e74c3c";	
				mensaje.innerHTML=msj;
				mensaje.style.transition=".5s all";
				mensaje.style.top="0px";	
																		
				//DESAPARECER
				setTimeout(function(){
					mensaje.style.top="-80px";
				},5000);
			}

			function verMensaje2(msj){
				mensaje = document.getElementById('mensaje2');
				mensaje2 = document.getElementById('mensaje');

				mensaje2.style.top="-80px";		
				

				mensaje.style.background="green";
				mensaje.innerHTML=msj;
				mensaje.style.transition=".5s all";
				mensaje.style.top="0px";				
													
				//DESAPARECER
				setTimeout(function(){
					mensaje.style.top="-80px";					
				},5000);
			}

			function verMensaje4(msj){
				mensaje = document.getElementById('mensaje2');
				mensaje2 = document.getElementById('mensaje');

				mensaje2.style.top="-80px";		
				

				mensaje.style.background="blue";
				mensaje.innerHTML=msj;
				mensaje.style.transition=".5s all";
				mensaje.style.top="0px";				
													
				//DESAPARECER
				setTimeout(function(){
					mensaje.style.top="-80px";					
				},5000);
			}

			function verMensaje3(mensaje){
				ventana = document.getElementById('ventana');
				ventana.style.transition=".5s all";			
				ventana.style.left="10%";
				ventana.innerHTML="<h3>"+mensaje+"</h3>"																						
			}

			window.addEventListener('offline', desconectado, true);
			window.addEventListener('online', conectado, true);
			var desconectadoInternet = false;

			function desconectado(){
				verMensaje('Por favor revisa tu conexion a internet');
				desconectadoInternet = true;
			}
			function conectado(){
				verMensaje2('Ya hay internet!');
				desconectadoInternet = false;
			}


function openPop(idAbrir, idCerrar){
	abrir = document.getElementById(idAbrir);
	cerrar = document.getElementById(idCerrar);

	abrir.style.opacity="1";
	abrir.style.zIndex="9999";
	abrir.style.display="initial";

	cerrar.style.opacity="0";
	cerrar.style.zIndex="0";
	cerrar.style.display="none";

}

function openTest(idAbrir, idBtn){
	abrir = document.getElementById(idAbrir);
	abrirBtn = document.getElementById(idBtn);

	cerrar1 = document.getElementById('test1');
	cerrar2 = document.getElementById('test2');
	cerrar3 = document.getElementById('test3');
	cerrar4 = document.getElementById('test4');
	cerrar5 = document.getElementById('test5');
	cerrar8 = document.getElementById('test8');
	cerrar22 = document.getElementById('test22');
	cerrar33 = document.getElementById('test33');
	cerrar44 = document.getElementById('test44');
	cerrar55 = document.getElementById('test55');

	

	cerrar1.style.opacity="0";
	cerrar1.style.zIndex="0";
	cerrar1.style.display="none";
	cerrar2.style.opacity="0";
	cerrar2.style.zIndex="0";
	cerrar2.style.display="none";
	cerrar3.style.opacity="0";
	cerrar3.style.zIndex="0";
	cerrar3.style.display="none";
	cerrar4.style.opacity="0";
	cerrar4.style.zIndex="0";
	cerrar4.style.display="none";
	cerrar5.style.opacity="0";
	cerrar5.style.zIndex="0";
	cerrar5.style.display="none";
	cerrar8.style.opacity="0";
	cerrar8.style.zIndex="0";
	cerrar8.style.display="none";
	cerrar22.classList.add('btn1');
	cerrar33.classList.add('btn1');
	cerrar44.classList.add('btn1');
	cerrar55.classList.add('btn1');
	cerrar22.classList.remove('btn3');
	cerrar33.classList.remove('btn3');
	cerrar44.classList.remove('btn3');
	cerrar55.classList.remove('btn3');
	cerrar22.disabled = false;
	cerrar33.disabled = false;
	cerrar44.disabled = false;
	

	abrir.style.opacity="1";
	abrir.style.zIndex="9999";
	abrir.style.display="initial";

	abrirBtn.classList.remove('btn1');
	abrirBtn.classList.add('btn3');
	if (idBtn == "test55") {

	}else{
		abrirBtn.disabled = "true";	
	}
	

}

function ir(direccion){
	location.assign(direccion);
}

function salir(){
	ir('index.html');	
	localStorage.clear();
}

function curso(){
	var x = Math.floor((Math.random() * 3) + 1);
	if (x==1) {
		ir("texto.html");
	}
	if (x==2) {
		ir("video.html");
	}
	if (x==3) {
		ir("visual.html");
	}
}


function siguiente(cerrar, abrir){
	cerrar = document.getElementById(cerrar);
	abrir = document.getElementById(abrir);

	cerrar.style.display="none";
	abrir.style.display="inherit";
}

function entrar(){
	usuario = document.getElementById('username');
	expediente = document.getElementById('expediente');

	if (usuario.value == "") {
		usuario.style.border= "none";
		usuario.style.backgroundColor="rgba(255, 0, 0, .1)";
		usuario.style.borderBottom= "3px solid #e74c3c";
		usuarioColocado  = false;

	}else{
		usuario.style.border= "none";
		usuario.style.backgroundColor="transparent";
		usuario.style.borderBottom= "1px solid #648c01";
		usuarioColocado  = true;
	}
	if (expediente.value == "") {
		expediente.style.border= "none";
		expediente.style.backgroundColor="rgba(255, 0, 0, .1)";
		expediente.style.borderBottom= "3px solid #e74c3c";
		passwordColocado  = false;
	}else{
		expediente.style.border= "none";
		expediente.style.backgroundColor="transparent";
		expediente.style.borderBottom= "1px solid #648c01";
		passwordColocado  = true;
	}

	//ENVIAR DATOS
	if (!desconectadoInternet) {
		if(usuarioColocado && passwordColocado){

			localStorage.setItem('user', usuario.value);
			localStorage.setItem('expediente', expediente.value);

			ir('dashboard.html');
		}else{
			verMensaje('Ups! Por favor completa los campos señalados :(');
		}
	}else{
		verMensaje('No puedes iniciar, revisa tu conexión a internet');
	}
}

function range(){
	range1 = document.getElementById('range').value;
	show = document.getElementById('showRange');
	inpRange = document.getElementById('inpRange');
	show.innerHTML = "$"+range1;
	inpRange.value=range1;
}

function range2(){
	range1 = document.getElementById('range');
	show = document.getElementById('showRange');
	inpRange = document.getElementById('inpRange').value;
	show.innerHTML = "$"+inpRange;
	range1.value=inpRange;
}

function test1(){
	range=document.getElementById('range').value;
	Ff=document.getElementById('F');
	Oo=document.getElementById('O');
	Dd=document.getElementById('D');
	Aa=document.getElementById('A');
	foda=document.getElementById('foda');
	prom=document.getElementById('prom');
	chk1=document.getElementById('chk1');
	chk2=document.getElementById('chk2');
	chk3=document.getElementById('chk3');
	chk4=document.getElementById('chk4');
	chk5=document.getElementById('chk5');
	chk6=document.getElementById('chk6');
	chk7=document.getElementById('chk7');
	chk8=document.getElementById('chk8');
	chk9=document.getElementById('chk9');
	chk10=document.getElementById('chk10');
	chk11=document.getElementById('chk11');
	chk12=document.getElementById('chk12');
	chk13=document.getElementById('chk13');
	chk14=document.getElementById('chk14');
	chk15=document.getElementById('chk15');
	chk16=document.getElementById('chk16');
	chk17=document.getElementById('chk17');
	chk18=document.getElementById('chk18');
	chk19=document.getElementById('chk19');
	chk20=document.getElementById('chk20');
	chk21=document.getElementById('chk21');
	chk22=document.getElementById('chk22');
	chk23=document.getElementById('chk23');
	chk24=document.getElementById('chk24');
	chk25=document.getElementById('chk25');
	chk26=document.getElementById('chk26');
	chk27=document.getElementById('chk27');

	r=2;
	d=2;
	f=0;
	a=2;
	o=0;
	debilidad= -0.28;
	fortaleza = 0.33;
	amenaza = -0.33;
	oportunidad = 0.33;
	c1=0;
	c2=0;
	c3=0;
	c4=0;

	if (range == 0) {
		r = 0;
	}
	if (range > 0 && range <= 5000) {
		r = 0.5;
	}
	if (range >5000 && range <= 10000) {
		r = 1;
	}
	if (range > 10000 && range <= 15000) {
		r = 1.5;
	}
	if (range > 15000) {
		r = 2;
	}
	if (chk1.checked == true || chk2.checked == true || chk3.checked == true || chk4.checked == true || chk5.checked == true || chk6.checked == true || chk7.checked == true){
		Dd.innerHTML=" ";
	}
	if (chk8.checked == true || chk9.checked == true || chk10.checked == true || chk11.checked == true || chk12.checked == true || chk13.checked == true || chk14.checked == true){
		Ff.innerHTML=" ";
	}
	if (chk15.checked == true || chk16.checked == true || chk17.checked == true || chk18.checked == true || chk19.checked == true || chk20.checked == true || chk21.checked == true){
		Aa.innerHTML=" ";
	}
	if (chk22.checked == true || chk23.checked == true || chk24.checked == true || chk25.checked == true || chk26.checked == true || chk27.checked == true){
		Oo.innerHTML=" ";
	}
	if (chk1.checked == true) {
		d+= debilidad;
		Dd.innerHTML += "<h5>• "+chk1.value+"</h5>"; 
		c1++;
	}
	if (chk2.checked == true) {
		d += debilidad;
		Dd.innerHTML += "<h5>• "+chk2.value+"</h5>"; 
		c1++;
	}
	if (chk3.checked == true) {
		d += debilidad;
		Dd.innerHTML += "<h5>• "+chk3.value+"</h5>"; 
		c1++;
	}
	if (chk4.checked == true) {
		d += debilidad;
		Dd.innerHTML += "<h5>• "+chk4.value+"</h5>"; 
		c1++;
	}
	if (chk5.checked == true) {
		d += debilidad;
		Dd.innerHTML += "<h5>• "+chk5.value+"</h5>"; 
		c1++;
	}
	if (chk6.checked == true) {
		d += debilidad;
		Dd.innerHTML += "<h5>• "+chk6.value+"</h5>"; 
		c1++;
	}
	if (chk7.checked == true) {
		d += debilidad;
		Dd.innerHTML += "<h5>• "+chk7.value+"</h5>"; 
		c1++;
	}

	if (chk8.checked == true) {
		f+= fortaleza;
		Ff.innerHTML += "<h5>• "+chk8.value+"</h5>"; 
		c2++;
	}
	if (chk9.checked == true) {
		f += fortaleza;
		Ff.innerHTML += "<h5>• "+chk9.value+"</h5>"; 
		c2++;
	}
	if (chk10.checked == true) {
		f += fortaleza;
		Ff.innerHTML += "<h5>• "+chk10.value+"</h5>"; 
		c2++;
	}
	if (chk11.checked == true) {
		f += fortaleza;
		Ff.innerHTML += "<h5>• "+chk11.value+"</h5>"; 
		c2++;
	}
	if (chk12.checked == true) {
		f += fortaleza;
		Ff.innerHTML += "<h5>• "+chk12.value+"</h5>"; 
		c2++;
	}
	if (chk13.checked == true) {
		f += fortaleza;
		Ff.innerHTML += "<h5>• "+chk13.value+"</h5>"; 
		c2++;
	}
	if (chk14.checked == true) {
		f += fortaleza;
		Ff.innerHTML += "<h5>• "+chk14.value+"</h5>"; 
		c2++;
	}

	if (chk15.checked == true) {
		a+= amenaza;
		Aa.innerHTML += "<h5>• "+chk15.value+"</h5>"; 
		c3++;
	}
	if (chk16.checked == true) {
		a += amenaza;
		Aa.innerHTML += "<h5>• "+chk16.value+"</h5>"; 
		c3++;
	}
	if (chk17.checked == true) {
		a += amenaza;
		Aa.innerHTML += "<h5>• "+chk17.value+"</h5>"; 
		c3++;
	}
	if (chk18.checked == true) {
		a += amenaza;
		Aa.innerHTML += "<h5>• "+chk18.value+"</h5>"; 
		c3++;
	}
	if (chk19.checked == true) {
		a += amenaza;
		Aa.innerHTML += "<h5>• "+chk19.value+"</h5>"; 
		c3++;
	}
	if (chk20.checked == true) {
		a += amenaza;
		Aa.innerHTML += "<h5>• "+chk20.value+"</h5>"; 
		c3++;
	}
	if (chk21.checked == true) {
		a += amenaza;
		Aa.innerHTML += "<h5>• "+chk21.value+"</h5>"; 
		c3++;
	}

	if (chk22.checked == true) {
		o+= oportunidad;
		Oo.innerHTML += "<h5>• "+chk22.value+"</h5>"; 
		c4++;
	}
	if (chk23.checked == true) {
		o += oportunidad;
		Oo.innerHTML += "<h5>• "+chk23.value+"</h5>"; 
		c4++;
	}
	if (chk24.checked == true) {
		o += oportunidad;
		Oo.innerHTML += "<h5>• "+chk24.value+"</h5>"; 
		c4++;
	}
	if (chk25.checked == true) {
		o += oportunidad;
		Oo.innerHTML += "<h5>• "+chk25.value+"</h5>"; 
		c4++;
	}
	if (chk26.checked == true) {
		o += oportunidad;
		Oo.innerHTML += "<h5>• "+chk26.value+"</h5>"; 
		c4++;
	}
	if (chk27.checked == true) {
		o += oportunidad;
		Oo.innerHTML += "<h5>• "+chk27.value+"</h5>"; 
		c4++;
	}

	promedio = r + f + d + o + a;

	if (c1 > c2 && c1 > c3 && c1 > c4) {
		console.log('mas debilidad');

		foda.innerHTML = "Tienes mas debilidades que nada, pero no te preocupes, todo se puede mejorar, te asignaremos un tutor.";
	}
	if (c3 > c2 && c3 > c1 && c3 > c4) {
		console.log('mas amenazas');
		foda.innerHTML = "Tienes mas amenazas que nada, pero no te preocupes, esas amenazas aún se pueden detener, te asignaremos un tutor.";
	}

	if (c2 >= c1 && c2 >= c3 && c2 >= c4) {
		console.log('mas fortaleza');
		foda.innerHTML = "Tienes mas fortalezas que nada, sigue así, así se cosechan los grandes éxitos.";
	}

	if (c4 >= c1 && c4 >= c3 && c4 > c2) {
		console.log('mas oportunidad');
		foda.innerHTML = "Tienes mas oportunidades que nada, hay que aprovecharlas para que se conviertan en fortalezas y empiecen a dar frutos.";
	}

	if (promedio >=0 && promedio <4) {
		prom.innerHTML="No te preocupes por el dinero, gestionaremos una beca para ti.";
	}
	if (promedio >=4 && promedio <7) {
		prom.innerHTML="Tu situacion económica no es tan mala, te recomendamos ser más ahorrativo y aprovechar tus ingresos en la escuela.";
	}
	if (promedio >=7) {
		prom.innerHTML="Tu situación económica es buena, aprovecha esta gran fortaleza y empieza a ahorrar y quizá a invertir en algun negocio.";
	}
	openTest('test5', 'test22');
	if (promedio>10) {
		promedio=10;
	}
	localStorage.setItem('promedio1', promedio);

	document.getElementById('btnEco').setAttribute('onclick',  "openTest('test5', 'test22')");
	document.getElementById('test22').setAttribute('onclick',  "openTest('test5', 'test22')");
}

function test3(){
	resEmo = document.getElementById('resEmo');


	p1=document.getElementsByName('1p');
	flag1 = false;
	p2=document.getElementsByName('2p');
	flag2 = false;
	p3=document.getElementsByName('3p');
	flag3 = false;
	p4=document.getElementsByName('4p');
	flag4 = false;
	p5=document.getElementsByName('5p');
	flag5 = false;
	p6=document.getElementsByName('6p');
	flag6 = false;
	p7=document.getElementsByName('7p');
	flag7 = false;
	p8=document.getElementsByName('8p');
	flag8 = false;

	contador1 = 0;
	contador2 = 0;
	contador3 = 0;
	contador4 = 0;

	for(var i = 0; i < p1.length; i++){
		if(p1[i].checked){
			flag1 = true;
			if (p1[i].value == "1") {
				contador2 ++;
			}
			if (p1[i].value == "2") {
				contador3 ++;
			}
			if (p1[i].value == "3") {
				contador4 ++;
			}
			if (p1[i].value == "4") {
				contador1 ++;
			}
			break;
		}
	}
	for(var i = 0; i < p2.length; i++){
		if(p2[i].checked){
			flag2 = true;
			if (p2[i].value == "1") {
				contador1 ++;
			}
			if (p2[i].value == "2") {
				contador2 ++;
			}
			if (p2[i].value == "3") {
				contador4 ++;
			}
			if (p2[i].value == "4") {
				contador3 ++;
			}
			break;
		}
	}
	for(var i = 0; i < p3.length; i++){
		if(p3[i].checked){
			flag3 = true;
			if (p3[i].value == "1") {
				contador3 ++;
			}
			if (p3[i].value == "2") {
				contador2 ++;
			}
			if (p3[i].value == "3") {
				contador1 ++;
			}
			if (p3[i].value == "4") {
				contador4 ++;
			}
			break;
		}
	}
	for(var i = 0; i < p4.length; i++){
		if(p4[i].checked){
			flag4 = true;
			if (p4[i].value == "1") {
				contador2 ++;
			}
			if (p4[i].value == "2") {
				contador1 ++;
			}
			if (p4[i].value == "3") {
				contador3 ++;
			}
			if (p4[i].value == "4") {
				contador4 ++;
			}
			break;
		}
	}
	for(var i = 0; i < p5.length; i++){
		if(p5[i].checked){
			flag5 = true;
			if (p5[i].value == "1") {
				contador2 ++;
			}
			if (p5[i].value == "2") {
				contador3 ++;
			}
			if (p5[i].value == "3") {
				contador4 ++;
			}
			if (p5[i].value == "4") {
				contador1 ++;
			}
			break;
		}
	}
	for(var i = 0; i < p6.length; i++){
		if(p6[i].checked){
			flag6 = true;
			if (p6[i].value == "1") {
				contador3 ++;
			}
			if (p6[i].value == "2") {
				contador1 ++;
			}
			if (p6[i].value == "3") {
				contador2 ++;
			}
			if (p6[i].value == "4") {
				contador4 ++;
			}
			break;
		}
	}
	for(var i = 0; i < p7.length; i++){
		if(p7[i].checked){
			flag7 = true;
			if (p7[i].value == "1") {
				contador1 ++;
			}
			if (p7[i].value == "2") {
				contador2 ++;
			}
			if (p7[i].value == "3") {
				contador3 ++;
			}
			if (p7[i].value == "4") {
				contador4 ++;
			}
			break;
		}
	}
	for(var i = 0; i < p8.length; i++){
		if(p8[i].checked){
			flag8 = true;
			if (p8[i].value == "1") {
				contador1 ++;
			}
			if (p8[i].value == "2") {
				contador2 ++;
			}
			if (p8[i].value == "3") {
				contador4 ++;
			}
			if (p8[i].value == "4") {
				contador3 ++;
			}
			break;
		}
	}

	if (flag1 == false || flag2 == false || flag3 == false || flag4 == false || flag5 == false || flag6 == false || flag7 == false || flag8 == false) {
		alert("Tienes respuestas vacías!");
	}else{
		if (contador1 > contador2 && contador1 > contador3 && contador1 > contador4) {
			console.log("Pesimista");
			promedio3 = 2.5;
			resEmo.innerHTML="<h2>Usted tiene gran tendencia al pesimismo. Es conveniente que analice un poco sus actitudes.</h2>";
			resEmo.innerHTML+=" <img src='media/1.png' style='width: 450px; height: 450px; margin: 20px;'>";
		}
		if (contador2 >= contador1 && contador2 > contador3 && contador2 > contador4) {
			console.log("Poco Positivo");
			promedio3 = 5;
			resEmo.innerHTML="<h2>Poca actitud positiva. Recuerde que todo puede verse bajo un ángulo más favorable, y eso, como aprenderá en esta obra, puede dar ventajas.</h2>";
			resEmo.innerHTML+=" <img src='media/2.png' style='width: 250px; height: 250px; margin: 20px;'>";
		}
		if (contador3 >= contador2 && contador3 >= contador1 && contador3 > contador4) {
			console.log("Positivo");
			promedio3 = 7.5;
			resEmo.innerHTML="<h2>Buena actitud positiva, dotada de adecuada sensatez. No deje de fortalecerla, siempre bajo el control de la lógica.</h2>";
			resEmo.innerHTML+=" <img src='media/3.png' style='width: 250px; height: 250px; margin: 20px;'>";
		}
		if (contador4 >= contador2 && contador4 >= contador3 && contador4 >= contador1) {
			console.log("Super Positivo");
			promedio3 = 10;
			resEmo.innerHTML="<h2>Actitud positiva en grado superlativo, pero carente del equilibrio que dan el sentido de prudencia y el ejercicio de la reflexión. Fortalezca estas últimas cualidades, para compensar tanto optimismo.</h2>";
			resEmo.innerHTML+=" <img src='media/4.png' style='width: 250px; height: 250px; margin: 20px;'>";
		}
	}

	
	
	localStorage.setItem('promedio3', promedio3);

	document.getElementById('btnRes').setAttribute('onclick',  "verRes()");
	document.getElementById('btnRes').innerHTML="Ver Resultado Final";
	
}

function verRes(){
	cerrar55 = document.getElementById('test55');
	resFinal = document.getElementById('resFinal2');
	prom1 = localStorage.getItem('promedio1');
	prom2 = localStorage.getItem('promedio2');
	prom3 = localStorage.getItem('promedio3');
	prom111 = parseFloat(localStorage.getItem('promedio1'));
	prom222 = parseFloat(localStorage.getItem('promedio2'));
	prom333 = parseFloat(localStorage.getItem('promedio3'));

	if (prom1 == null || prom2 == null || prom3 == null) {
		verMensaje('Aún no has contestado todos los test.')
	}else{
		cerrar55.disabled = false;
		openTest('test8', 'test55');
		suma = prom111 + prom222 + prom333;
		promFinal = suma/3;
			resFinal.innerHTML = "<h2><b>Tu promedio final es de: </b>" + promFinal+"</h2><br>";

		grafica();
	}
}

function grafica() {
  var marksCanvas = document.getElementById("marksChart");
  resFinal = document.getElementById('resFinal2');
  prom = [7.5, 7.5, 7.2];
  r1 = parseFloat(localStorage.getItem('promedio1'));
  r2 = parseFloat(localStorage.getItem('promedio2'));
  r3 = parseFloat(localStorage.getItem('promedio3'));
  res = [r1, r2, r3];

  if (res[0] < prom[0] || res[1] < prom[1] || res[2] < prom[2]) {
  	resFinal.innerHTML += "<h2><br>Tus problemas son:</h2><br>";
  }
  if (res[0] >= prom[0] && res[1] >= prom[1] && res[2] >= prom[2]) {
  	resFinal.innerHTML += "<h2><br>¡No tienes problemas! Felicidades! Disfruta!</h2><br>";
  }
  if (res[0] < prom[0]){
    resFinal.innerHTML += "<h2><b>Económicos </b><br> Es un tema muy delicado, lo sabemos. Pero recuerda que puedes acudir a tu escuela para poder solicitar becas de manutencion y ademas te pueden dar un apoyo económico a cambio de un poco de trabajo. Todo se puede solucionar.</h2><br>";
  }
  if (res[1] < prom[1]){
    resFinal.innerHTML += "<h2><b>Cognitivos </b><br> Recuerda que esta es una parte fundamental para seguir en la escuela. Trata de estudiar fuera de clase y siempre aprender algo nuevo. Incluso aunque salgas de la escuela sigue estudiando.</h2><br>";
  }
  if (res[2] < prom[2]){
    resFinal.innerHTML += "<h2><b>Emocionales </b><br> Recuerda que al ser seres vivos tenemos sentiemientos. Pero hay que aprender a dominarlas y evitar que nos dominen. Relacionate con mas personas, sal de tu zona de comfort y verás como las cosas camboian.</h2><br>";
  }

  var marksData = {
    labels: ["Economico", "Cognitivo", "Emocional"],
    datasets: [{
      label: "Resultados",
      backgroundColor: "rgba(255,130,0,0.6)",
      borderColor: "rgba(255,0,0,0.9)",
      pointBorderColor: "rgba(200,200,0,0.6)",
      pointBackgroundColor: "blue",
      pointBorderWidth: 3,
      pointRadius: 6,
      data: res
    }, {
      label: "Persona promedio",
      backgroundColor: "transparent",
      borderColor: "rgba(0,0,200,0.6)",
      pointBorderColor: "rgba(0,0,255,0.6)",
      pointBackgroundColor: "blue",
      pointBorderWidth: 3,
      pointRadius: 6,
      data: prom
    }]
  };

  var chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 10,
        stepSize: 1,
        fontSize: 20
      },
      pointLabels: {
        fontSize: 20
      }
    },
    legend: {
        fontSize: 20
    }
  };

  var radarChart = new Chart(marksCanvas, {
    type: 'radar',
    data: marksData,
    options: chartOptions
  });
}

function closePop(idPop){
	pop= document.getElementById(idPop);
	pop.style.display="none";
}