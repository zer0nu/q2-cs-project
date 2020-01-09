//Function for button for opening/closing side menu
function openNav(){
	document.getElementById("mySidebar").style.width = "250px"
}
document.getElementById("openbtn").addEventListener("click", openNav)
function closeNav(){
	document.getElementById("mySidebar").style.width = "0"
}
document.getElementById("closebtn").addEventListener("click", closeNav)
//Functions that change photo being displayed
var slideIndex = 1;
showSlides(slideIndex)
function currentSlide(n){
	showSlides(slideIndex = n)
}
document.getElementById("one").addEventListener("click", currentSlide(1))
document.getElementById("two").addEventListener("click", currentSlide(2))
document.getElementById("three").addEventListener("click", currentSlide(3))
document.getElementById("four").addEventListener("click", currentSlide(4))
document.getElementById("five").addEventListener("click", currentSlide(5))
function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides")
	var dots = document.getElementsByClassName("demo")
	var captionText = document.getElementById("caption")
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none"
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "")
	}
	slides[slideIndex-1].style.display = "block"
	dots[slideIndex-1].className += " active"
	captionText.innerHTML = dots[slideIndex-1].alt
}
//Functions that allow user to toggle between day and night mode
function nightmode(){
	document.body.style.backgroundColor = "#2e2d2e";
	document.body.style.color = "white";
	document.body.getElementsByTagName("div")[0].style.backgroundColor = "black";
	document.body.getElementsByClassName("footer")[0].style.backgroundColor = "black";
	document.getElementById("openbtn").style.backgroundColor = "black";
	document.body.getElementsByClassName("sidebar")[0].style.backgroundColor = "black";
}
function lightmode(){
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
	document.body.getElementsByTagName("div")[0].style.backgroundColor = "lightgray";
	document.body.getElementsByClassName("footer")[0].style.backgroundColor = "#54B948";
	document.getElementById("openbtn").style.backgroundColor = "#54B948";
	document.body.getElementsByClassName("sidebar")[0].style.backgroundColor = "#54B948";
} 
//Function that checks if the password you wrote is the same as the one in the confirm password
function confpw(){
    if (document.getElementById("first").value == document.getElementById("second").value){
        alert("The passwords match.")
    } 
	else {
        alert("The passwords do NOT match.")
    }
}
