let i = 200;

function setColor()
{
	var elem = document.getElementById("butt");
	var back = document.getElementById("main");
	
	if(elem.style.backgroundColor === "blue"){
		elem.style.backgroundColor = "red";
		main.style.backgroundColor = "blue";
	}else{
		elem.style.backgroundColor = "blue";
		main.style.backgroundColor = "red";
	}
}



var today = new Date();
document.getElementById('time').innerHTML=today;