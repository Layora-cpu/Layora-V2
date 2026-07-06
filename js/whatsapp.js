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
/* ==========================================
   GENERATE ORDER ID
========================================== */

function generateOrderId(){

const now=new Date();

const y=now.getFullYear();

const m=String(now.getMonth()+1).padStart(2,"0");

const d=String(now.getDate()).padStart(2,"0");

const h=String(now.getHours()).padStart(2,"0");

const min=String(now.getMinutes()).padStart(2,"0");

const s=String(now.getSeconds()).padStart(2,"0");

return `LAY${y}${m}${d}${h}${min}${s}`;

}

/* ==========================================
   SEND TO WHATSAPP
========================================== */

function sendWhatsAppOrder(){

const orderId=generateOrderId();

const product=document.getElementById("orderProduct").value;

const productId=document.getElementById("orderId").value;

const price=document.getElementById("orderPrice").value;

const name=document.getElementById("customerName").value.trim();

const phone=document.getElementById("customerPhone").value.trim();

const qty=document.getElementById("customerQty").value;

const address=document.getElementById("customerAddress").value.trim();

const city=document.getElementById("customerCity").value.trim();

const state=document.getElementById("customerState").value.trim();

const pincode=document.getElementById("customerPincode").value.trim();

const note=document.getElementById("customerNote").value.trim();

let colour=document.getElementById("customerColour").value;

if(colour==="Other"){

colour=document.getElementById("otherColour").value.trim();

}

const total=parseFloat(price.replace(/[^\d.]/g,""))*parseInt(qty);

const message=
`🛍️ *NEW LAYORA ORDER*

━━━━━━━━━━━━━━

🆔 Order ID : ${orderId}

👤 Customer : ${name}

📱 Mobile : ${phone}

━━━━━━━━━━━━━━

🧕 Product : ${product}

🏷️ Product ID : ${productId}

🎨 Colour : ${colour}

📦 Quantity : ${qty}

💰 Price : ${price}

💵 Total : ₹${total}

━━━━━━━━━━━━━━

🏠 DELIVERY ADDRESS

${address}

${city}

${state}

${pincode}

━━━━━━━━━━━━━━

📝 Note

${note || "No additional note"}

━━━━━━━━━━━━━━

Please confirm my order.

Thank you ❤️

Layora Premium Hijabs`;

const button=document.getElementById("continueOrder");

button.disabled=true;

button.innerText="Preparing Order...";

const url=`https://wa.me/916364254977?text=${encodeURIComponent(message)}`;

setTimeout(()=>{

window.open(url,"_blank");

button.disabled=false;

button.innerText="Continue to WhatsApp";

},700);

}const colour=document.getElementById("customerColour");

const other=document.getElementById("otherColourBox");

if(colour){

colour.addEventListener("change",()=>{

other.style.display=

colour.value==="Other"

?

"block"

:

"none";

});

}
