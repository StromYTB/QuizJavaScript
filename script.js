function result()
{
	var score=0;
	if(document.getElementById('correct1').checked){	
        score++;
        document.getElementById("answer1").innerHTML = ("Správná odpověď - PvE neboli Save The World byl první mód ve Fortnitu")
	}
	if(document.getElementById('correct2').checked){	
        score++;
        document.getElementById("answer2").innerHTML = ("Správná odpověď - Vydání Save The World")
        
	}
	if(document.getElementById('correct3').checked){
        score++;
        document.getElementById("answer3").innerHTML = ("Správná odpověď - Po roce 2023 se stal hlavním vývojářem Fortnite po Donald Mustardovi, který odešel z Epic Games")
	}

    if(document.getElementById('correct4').checked){
        score++;
        document.getElementById("answer4").innerHTML = ("Správná odpověď - Minecraft je SandBox hra kde můžete dělat cokoliv chcete")
	}

    if(document.getElementById('correct5').checked){
        score++;
        document.getElementById("answer5").innerHTML = ("Správná odpověď - Minecraft byl ten den vydán s názvem Cave Game")
	}

    if(document.getElementById('correct6').checked){
        score++;
        document.getElementById("answer6").innerHTML = ("Správná odpověď - Notch vytvořil Minecraft pod názvem Cave Game")
	}

    if(document.getElementById('correct7').checked){
        score++;
        document.getElementById("answer7").innerHTML = ("Správná odpověď - Nejnovější verze přidala Velbloudy, Archeloogie,nové bambusové blocky a další.. ")
	}

    if(document.getElementById('correct8').checked){
        score++;
        document.getElementById("answer8").innerHTML = ("Správná odpověď - Pal Wolrd je nejnovější a nejpopulárnější hra na začátku nového roku 2024, která trochu kopíruje Pokémony, ale podle všech hráčů je o dost lepší než Pokémon hry")
	}

    if(document.getElementById('correct9').checked){
        score++;
        document.getElementById("answer9").innerHTML = ("Správná odpověď - Kvůli hře Fortnite, skoro každá hra přidala Battle pass, ale není vždy stejný, někteří jsou horší a některé lepší ")
	}

    if(document.getElementById('correct10').checked){
        score++;
        document.getElementById("answer10").innerHTML = ("Správná odpověď - ano je to Overwatch 2, první den co jí přidali na Steam, tak dostala nejvíce špatných recenzí ze všech her na Steamu")
	}

    if(document.getElementById('wrong1').checked){
        document.getElementById("answer1").innerHTML = ("Špatná odpověď")
    }

    if(document.getElementById('wrong1Special').checked){
        document.getElementById("answer1").innerHTML = ("Špatná odpověď - Před Battle Royale bylo PvE mód s názvem Save The World")
    }

    if(document.getElementById('wrong2').checked){
        document.getElementById("answer2").innerHTML = ("Špatná odpověď")
    }

    if(document.getElementById('wrong2Special').checked){
        document.getElementById("answer2").innerHTML = ("Špatná odpověď - To je vydání Battle Royale ne Save The World")
    }

    if(document.getElementById('wrong3').checked){
        document.getElementById("answer3").innerHTML = ("Špatná odpověď")
    }

    if(document.getElementById('wrong3Special').checked){
        document.getElementById("answer3").innerHTML = ("Špatná odpověď - Donald Mustard už není hlavní vývojář, odešel z Epic Games")
    }

    if(document.getElementById('wrong4').checked){
        document.getElementById("answer4").innerHTML = ("Špatná odpověď")
    }

    if(document.getElementById('wrong5').checked){
        document.getElementById("answer5").innerHTML = ("Špatná odpověď")
    }

    if(document.getElementById('wrong5Special').checked){
        document.getElementById("answer5").innerHTML = ("Špatná odpověď - ten den byl vydána první celá verze Minecraftu")
    }

    if(document.getElementById('wrong6').checked){
        document.getElementById("answer6").innerHTML = ("Špatná odpověď")
    }

    if(document.getElementById('wrong6Special').checked){
        document.getElementById("answer6").innerHTML = ("Špatná odpověď - to je hlavní vývojář Minecraft teď, ale nevytvořil Minecraft samotný")
    }

    if(document.getElementById('wrong7').checked){
        document.getElementById("answer7").innerHTML = ("Špatná odpověď")
    }

    if(document.getElementById('wrong8').checked){
        document.getElementById("answer8").innerHTML = ("Špatná odpověď")
    }

    if(document.getElementById('wrong8Special').checked){
        document.getElementById("answer8").innerHTML = ("Špatná odpověď - Byla to nejprodávanější hra na konci roku 2023")
    }

    if(document.getElementById('wrong9').checked){
        document.getElementById("answer9").innerHTML = ("Špatná odpověď")
    }

    if(document.getElementById('wrong10').checked){
        document.getElementById("answer10").innerHTML = ("Špatná odpověď")
    }

    if(document.getElementById('wrong10Special').checked){
        document.getElementById("answer10").innerHTML = ("Špatná odpověď - Byla to nejvíc špatně recenzovaná hra v roce 2020, kvůli jejímu špatnému startu, ale po verzi 2.0 vydaná na konci minulého roku 2023, tak je to velmi dobrá hra, velmi doporučuji ")
    }


    

    

 alert("Tvé skóre je: "+score);

}

