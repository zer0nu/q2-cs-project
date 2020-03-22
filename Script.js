//confirm password functions
function confpw(){
    if (document.getElementById("first").value == document.getElementById("second").value){
		changepic()
    } 
	else {
        alert("The passwords do NOT match.")
    }
}
//function that changes picture upon login
function changepic(){
	pic = document.getElementById("switch").value
	sessionStorage.pic = pic
	document.getElementById("user").src = pic
}
if (sessionStorage.pic != null){
	pic = sessionStorage.pic
	document.getElementById("user").src = pic
}
//function for theme change
counter = 0
function changetheme(){
	counter++
	if (counter == 1){
		document.getElementsByClassName("header")[0].style.backgroundColor = "#FFCCCB"
		document.getElementsByClassName("footer")[0].style.backgroundColor = "#FFCCCB"
		document.getElementsByClassName("FAQsfooter")[0].style.backgroundColor = "#FFCCCB"
		document.getElementsByClassName("OurVisionfooter")[0].style.backgroundColor = "#FFCCCB"
		document.getElementsByClassName("conatainer")[0].style.backgroundColor = "#FFCCCB"
		document.getElementsByClassName("FACTS")[0].style.backgroundColor = "#FFCCCB"
		document.getElementsByClassName("SFACTS")[0].style.backgroundColor = "#FFCCCB"
		document.getElementsByClassName("author")[0].style.backgroundColor = "#FFCCCB"
		document.getElementsByClassName("author")[1].style.backgroundColor = "#FFCCCB"
		document.getElementsByClassName("author")[2].style.backgroundColor = "#FFCCCB"
		document.getElementsByClassName("author")[3].style.backgroundColor = "#FFCCCB"
	}
	else if (counter == 2){
		document.getElementsByClassName("header")[0].style.backgroundColor = "#ADD8E6"
		document.getElementsByClassName("footer")[0].style.backgroundColor = "#ADD8E6"
		document.getElementsByClassName("FAQsfooter")[0].style.backgroundColor = "#ADD8E6"
		document.getElementsByClassName("OurVisionfooter")[0].style.backgroundColor = "#ADD8E6"
		document.getElementsByClassName("conatainer")[0].style.backgroundColor = "#ADD8E6"
		document.getElementsByClassName("FACTS")[0].style.backgroundColor = "#ADD8E6"
		document.getElementsByClassName("SFACTS")[0].style.backgroundColor = "#ADD8E6"
		document.getElementsByClassName("author")[0].style.backgroundColor = "#ADD8E6"
		document.getElementsByClassName("author")[1].style.backgroundColor = "#ADD8E6"
		document.getElementsByClassName("author")[2].style.backgroundColor = "#ADD8E6"
		document.getElementsByClassName("author")[3].style.backgroundColor = "#ADD8E6"
	}
	else if (counter == 3){
		document.getElementsByClassName("header")[0].style.backgroundColor = "#90EE90"
		document.getElementsByClassName("footer")[0].style.backgroundColor = "#90EE90"
		document.getElementsByClassName("FAQsfooter")[0].style.backgroundColor = "#90EE90"
		document.getElementsByClassName("OurVisionfooter")[0].style.backgroundColor = "#90EE90"
		document.getElementsByClassName("conatainer")[0].style.backgroundColor = "#90EE90"
		document.getElementsByClassName("FACTS")[0].style.backgroundColor = "#90EE90"
		document.getElementsByClassName("SFACTS")[0].style.backgroundColor = "#90EE90"
		document.getElementsByClassName("author")[0].style.backgroundColor = "#90EE90"
		document.getElementsByClassName("author")[1].style.backgroundColor = "#90EE90"
		document.getElementsByClassName("author")[2].style.backgroundColor = "#90EE90"
		document.getElementsByClassName("author")[3].style.backgroundColor = "#90EE90"
	}
	else if (counter == 4 && counter == 0){
		document.getElementsByClassName("header")[0].style.backgroundColor = "#FFFFFF"
		document.getElementsByClassName("footer")[0].style.backgroundColor = "#FFFFFF"
		document.getElementsByClassName("FAQsfooter")[0].style.backgroundColor = "#FFFFFF"
		document.getElementsByClassName("OurVisionfooter")[0].style.backgroundColor = "#FFFFFF"
		document.getElementsByClassName("conatainer")[0].style.backgroundColor = "#FFFFFF"
		document.getElementsByClassName("FACTS")[0].style.backgroundColor = "#FFFFFF"
		document.getElementsByClassName("SFACTS")[0].style.backgroundColor = "#FFFFFF"
		document.getElementsByClassName("author")[0].style.backgroundColor = "#FFFFFF"
		document.getElementsByClassName("author")[1].style.backgroundColor = "#FFFFFF"
		document.getElementsByClassName("author")[2].style.backgroundColor = "#FFFFFF"
		document.getElementsByClassName("author")[3].style.backgroundColor = "#FFFFFF"
		counter = 0
	}
}
