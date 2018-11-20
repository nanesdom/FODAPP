function startTest()
{
	firstSetup();
	nextQuest();
}

function firstSetup()
{

	numGame = 0;
	game = shuffle([1,2,3,4,5,6,7,9,10]);

	resValues = [[0,0,1,0],[0,0,0,1],[1,0,0,0],[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1],[0,0,1,0],[0,1,0,0]];

	resValues.splice(7, 0, resValues[game[0] - 1]);

	questions =["¿Cuántos triángulos hay en la imagen?", 
				"¿Qué hora marca el reloj?", 
				"¿Cuántas manzanas son rojas?", 
				"¿Cuales son los siguientes 3 elementos de la sucesión?", 
				"¿Cuál es el resultado de la operación?", 
				"Si la banana y la naranja son frutas, ¿qué son el tren y la bicicleta?", 
				"¿Cuántas letras A hay en la imagen?", 
				"¿Cuál fue la respuesta correcta a la primera pregunta?", 
				"¿Cuantas esquinas (ángulos de 90°) se forman?", 
				"Si la vaca y el pollo son animales, ¿Qué son el cuchillo y la espatula?"];

	answers = [["14", "16", "18", "24"],
				["Dos con diez", "Dos con cincuenta", "Diez con dos", "Diez con diez"],
				["4", "3", "2", "1"],
				["64, 128, 256", "48, 70, 100", "70, 128, 220", "64, 138, 266"],
				["91", "55", "8", "7"],
				["Sinonimos", "Grandes", "Medios de transporte", "Ninguna de las anteriores"],
				["3", "4", "5", "7"],
				["24", "26", "28", "30"],
				["Armas", "Utensilios de cocina", "Calientes", "Ninguna	de las anteriores"]			
	];

	if (game[0] < 8) 
	{
		answers.splice(7, 0, answers[game[0] - 1]);
	}
	else
	{
		answers.splice(7, 0, answers[game[0] - 2]);	
	}
	game.splice(7, 0, 8);

	gamesWon = 0;
}

function checkAns()
{
	bottomImg = document.getElementsByClassName("ckImg");

	if(numGame < 10)
	{
		bottomImg[numGame].src = "sourcesCognitivo/chk.png";
		numGame++;
	
		console.log(document.querySelector('input[name="ans"]:checked').value);
		if(parseInt(document.querySelector('input[name="ans"]:checked').value) == 1)
		{
			gamesWon++;
		}

		if(numGame < 10)
		{
			nextQuest();
		}
		else
		{
			if (gamesWon > 6) {
				document.getElementById("questTest").innerHTML = '<h2 class="textRes">Bien Hecho! Has pasado el test cognitivo!</h2>';
				document.getElementById("imgTest").src = "sourcesCognitivo/bien.png";
				document.getElementById("imgTest").width = "250";
				document.getElementById("imgTest").height = "250";
			}else{
				document.getElementById("questTest").innerHTML = '<h2 class="textRes">Muy Mal! No has pasado el test cognitivo, pero no te preocupes, te asignaremos un tutor.</h2>';
				document.getElementById("imgTest").src = "sourcesCognitivo/mal.png";
				document.getElementById("imgTest").width = "250";
				document.getElementById("imgTest").height = "250";
			}
			document.getElementById('btnEmo').style.display="initial";
			document.getElementById('btnSig').style.display="none";
			localStorage.setItem('promedio2', gamesWon);

		}

	}
}

function nextQuest()
{
	document.getElementById("imgTest").src = "sourcesCognitivo/res" + game[numGame] + ".jpg";
	document.getElementById("questTest").innerHTML = '<h2>' + questions[game[numGame] - 1] + '</h2> <br>' +
														'<h4><input type="radio" name="ans" value="' + resValues[game[numGame] - 1][0] + '" checked>' + answers[game[numGame] - 1][0] + '</h4><br>' +
														'<h4><input type="radio" name="ans" value="' + resValues[game[numGame] - 1][1] + '">' + answers[game[numGame] - 1][1] + '</h4><br>' +
														'<h4><input type="radio" name="ans" value="' + resValues[game[numGame] - 1][2] + '">' + answers[game[numGame] - 1][2] + '</h4><br>' +
														'<h4><input type="radio" name="ans" value="' + resValues[game[numGame] - 1][3] + '">' + answers[game[numGame] - 1][3] + '</h4><br>';
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}