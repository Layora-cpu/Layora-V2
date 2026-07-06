/* ==========================================
   LAYORA WHATSAPP ORDER
========================================== */

const form = document.getElementById("orderForm");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

clearErrors();

if(!validateForm()) return;

sendWhatsAppOrder();

});

}

function clearErrors(){

document.querySelectorAll(".error").forEach(el=>{

el.textContent="";

});

}

function showError(id,message){

const el=document.getElementById(id);

if(el){

el.textContent=message;

}

}

function validateForm(){

let valid=true;

const name=document.getElementById("customerName").value.trim();

const phone=document.getElementById("customerPhone").value.trim();

const address=document.getElementById("customerAddress").value.trim();

const city=document.getElementById("customerCity").value.trim();

const state=document.getElementById("customerState").value.trim();

const pin=document.getElementById("customerPincode").value.trim();

const colour=document.getElementById("customerColour").value;

const otherColour=document.getElementById("otherColour")?.value.trim();

const agree=document.getElementById("agreeTerms").checked;

const nameRegex=/^[A-Za-z.' -]{3,60}$/;

if(!nameRegex.test(name)){

showError("nameError","Enter a valid full name.");

valid=false;

}

if(!/^[6-9][0-9]{9}$/.test(phone)){

showError("phoneError","Enter a valid 10-digit mobile number.");

valid=false;

}

if(address.length<15){

showError("addressError","Please enter your complete address.");

valid=false;

}

if(city.length<2){

showError("cityError","Enter your city.");

valid=false;

}

if(state.length<2){

showError("stateError","Enter your state.");

valid=false;

}

if(!/^[0-9]{6}$/.test(pin)){

showError("pinError","Enter a valid 6-digit pincode.");

valid=false;

}

if(colour===""){

showError("colourError","Please select a colour.");

valid=false;

}

if(colour==="Other" && otherColour===""){

showError("otherColourError","Please enter your colour.");

valid=false;

}

if(!agree){

alert("Please accept the terms before continuing.");

valid=false;

}

return valid;

}
