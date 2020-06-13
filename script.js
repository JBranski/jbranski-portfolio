window.addEventListener('DOMContentLoaded', (e) =>{
	// hide/show navigation on scroll
	let lastScrollpos = window.pageYOffset;
	let menuButtonCheck = document.querySelector(".menu-btn");
	window.onscroll = function() {
		let currentScrollPos = window.pageYOffset;
		if (lastScrollpos > currentScrollPos) {
			document.getElementById("top-nav").style.top = "0";
		} else {
			document.getElementById("top-nav").style.top = "-75px";
		}
		lastScrollpos = currentScrollPos;
		menuButtonCheck.checked = false;
	} 
	
	let subjectSelect = document.querySelector("select");
	let defaultSelect = document.querySelector("select>option");
	subjectSelect.addEventListener("change", function(){
		subjectSelect.classList.remove("disabled");
		defaultSelect.disabled = true;
	});

	

});

// Redirect to home page	
if(window.location.href == "https://jonathanbranski.com/thankyou"){
	setTimeout(
		function(){
			window.location.replace("https://jonathanbranski.com");
		}, 3000
	);
}

// FORM VALIDATION - CLEAN UP

let contact = document.querySelector("form");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");

let nameRegex = /[a-zA-Z][a-zA-Z ]+/;
let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

let nameCheck = false;
let emailCheck = false; 
let messageCheck = false;

contact.addEventListener("submit", function(e){
	e.preventDefault();

	let formName = document.getElementById("formName").value;
	let formEmail = document.getElementById("formEmail").value;
	let formMessage = document.getElementById("formMessage").value;

	nameError.textContent = "";
	emailError.textContent = "";
	messageError.textContent = "";

	nameCheck = false;
	emailCheck = false;
	messageCheck = false;
	
	if(formName == ""){
		nameError.textContent = "Name field cannot be empty!";
	} else if(!nameRegex.test(formName)){
		nameError.textContent = "Name must be between 2-30 characters long!"
	} else {nameCheck = true;}

	if(formEmail == ""){
		emailError.textContent = "Email field cannot be empty!";
	} else if(!emailRegex.test(formEmail)){
		emailError.textContent = "Please enter a valid email!";
	} else {emailCheck = true;}

	if(formMessage == ""){
		messageError.textContent = "Mesage field cannot be empty!";
	} else if (urlRegex.test(formMessage)){
		messageError.textContent = "Please remove any links from your message!";
	} else {messageCheck = true;}

	if(nameCheck == true && emailCheck == true && messageCheck == true){
		contact.action = "https://formspree.io/mnqbdqrp";
		contact.submit;
		window.location.replace("https://jonathanbranski.com/thankyou");
		return false;
	}
});