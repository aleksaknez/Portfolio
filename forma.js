function slanje(){

	var ime = document.forma.ime.value;
	var reIme = /^[A-Z]{1}[a-z]{2,}$/;    

	if(reIme.test(ime)){ /* testiramo da li je pattern tacan*/
		document.getElementById('greskaIme').innerHTML="<p style='color:green;'>Tacan Format</p>";
		} else{
		document.getElementById('greskaIme').innerHTML="<p style='color:red;'>Pogresan format</p>";
		}


	var prezime = document.forma.prezime.value;
	var rePrezime = /^[A-Z]{1}[a-z]{2,}$/;    				
	if(reIme.test(prezime)){ /* testiramo da li je pattern tacan*/
		document.getElementById('greskaPrezime').innerHTML="<p style='color:green;'>Tacan Format</p>";
		} else{
		document.getElementById('greskaPrezime').innerHTML="<p style='color:red;'>Pogresan format</p>";
		}


	var email = document.forma.mail.value;
	var reEmail = /^[a-z]{2,}[0-9]{0,}\@[a-z]{2,}\.[a-z]{3}$/;    				
	if(reEmail.test(email)){ /* testiramo da li je pattern tacan*/
		document.getElementById('greskaEmail').innerHTML="<p style='color:green;'>Tacan Format</p>";
		} else{
		document.getElementById('greskaEmail').innerHTML="<p style='color:red;'>Pogresan format</p>";
		}



	var tel = document.forma.tel.value;
	var reTel = /^[0]{1}[6]{1}[0-6|9]{1}\/[0-9]{7}$/;    					
	if(reTel.test(tel)){ /* testiramo da li je pattern tacan*/
		document.getElementById('greskaTel').innerHTML="<p style='color:green;'>Tacan Format</p>";
		} else{
		document.getElementById('greskaTel').innerHTML="<p style='color:red;'>Pogresan format</p>";
		}



	}