/*function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(cityName).style.display = "block"; 
}*/

function openDocs(docsName) {
    var i;
    var x = document.getElementsByClassName("docs");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(docsName).style.display = "block"; 
}
function myFunction () {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
		} else {
			x.className = "topnav";
		}
}
function myAlert() {
    alert("Thank you for your feedback!!!");
}
