/* ==========================================
   LAYORA WHATSAPP ORDER SYSTEM
   Part 1
========================================== */

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbydoykvwMLPnObGKpCyir8fePzUFejN6IHMWTHLfPifkEawUe2G5UzQ8OmnjTvFYurKNg/exec";

const form=document.getElementById("orderForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

clearErrors();

if(validateForm()){

sendWhatsAppOrder();

}

});

}

/* ==========================================
CLEAR ERRORS
========================================== */

function clearErrors(){

document.querySelectorAll(".error").forEach(error=>{

error.textContent="";

});

}

/* ==========================================
SHOW ERROR
========================================== */

function showError(id,message){

const el=document.getElementById(id);

if(el){

el.textContent=message;

}

}

/* ==========================================
VALIDATE FORM
========================================== */

function validateForm(){

let valid=true;

const name=document.getElementById("customerName").value.trim();

const phone=document.getElementById("customerPhone").value.trim();

const address=document.getElementById("customerAddress").value.trim();

const city=document.getElementById("customerCity").value.trim();

const state=document.getElementById("customerState").value.trim();

const pincode=document.getElementById("customerPincode").value.trim();

const colour=document.getElementById("customerColour").value;

const otherColour=document.getElementById("otherColour")?.value.trim();

const agree=document.getElementById("agreeTerms").checked;

/* Name */

if(!/^[A-Za-z.' -]{3,60}$/.test(name)){

showError("nameError","Enter a valid name.");

valid=false;

}

/* Mobile */

if(!/^[6-9][0-9]{9}$/.test(phone)){

showError("phoneError","Enter a valid Indian mobile number.");

valid=false;

}

/* Address */

if(address.length<15){

showError("addressError","Enter complete address.");

valid=false;

}

/* City */

if(city.length<2){

showError("cityError","Enter city.");

valid=false;

}

/* State */

if(state.length<2){

showError("stateError","Enter state.");

valid=false;

}

/* Pincode */

if(!/^[0-9]{6}$/.test(pincode)){

showError("pinError","Enter valid pincode.");

valid=false;

}

/* Colour */

if(colour===""){

showError("colourError","Select colour.");

valid=false;

}

/* Other Colour */

if(colour==="Other" && otherColour===""){

showError("otherColourError","Enter colour.");

valid=false;

}

/* Terms */

if(!agree){

alert("Please accept Terms & Conditions.");

valid=false;

}

return valid;

}/* ==========================================
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
SEND ORDER
========================================== */

async function sendWhatsAppOrder(){

const button=document.getElementById("continueOrder");

button.disabled=true;

button.innerText="Preparing Order...";

const orderId=generateOrderId();

const product=document.getElementById("orderProduct").value;

const productId=document.getElementById("orderId").value;

const price=document.getElementById("orderPrice").value;

const qty=parseInt(document.getElementById("customerQty").value);

const name=document.getElementById("customerName").value.trim();

const phone=document.getElementById("customerPhone").value.trim();

const address=document.getElementById("customerAddress").value.trim();

const city=document.getElementById("customerCity").value.trim();

const state=document.getElementById("customerState").value.trim();

const pincode=document.getElementById("customerPincode").value.trim();

const note=document.getElementById("customerNote").value.trim();

let colour=document.getElementById("customerColour").value;

if(colour==="Other"){

colour=document.getElementById("otherColour").value.trim();

}

const priceNumber=parseFloat(
price.replace(/[^\d.]/g,"")
);

const total=priceNumber*qty;

const crowns=Math.floor(total/400);

const orderData={

orderId,

product,

productId,

customer:name,

phone,

colour,

quantity:qty,

amount:total,

crowns,

address,

city,

state,

pincode,

note

};/* ==========================================
SAVE ORDER TO GOOGLE SHEETS
========================================== */

try{

const response=await fetch(SCRIPT_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(orderData)

});

const result=await response.json();

console.log("Google Sheets:",result);

}catch(error){

console.error("Google Sheets Error:",error);

}

/* ==========================================
WHATSAPP MESSAGE
========================================== */

const message=

`🛍️ *NEW LAYORA ORDER*

━━━━━━━━━━━━━━━━━━

🆔 Order ID : ${orderId}

👤 Customer : ${name}

📱 Mobile : ${phone}

━━━━━━━━━━━━━━━━━━

🧕 Product : ${product}

🏷️ Product ID : ${productId}

🎨 Colour : ${colour}

📦 Quantity : ${qty}

💰 Price : ₹${priceNumber}

💵 Total : ₹${total}

👑 Crowns Earned : ${crowns}

━━━━━━━━━━━━━━━━━━

🏠 *Delivery Address*

${address}

${city}

${state}

${pincode}

━━━━━━━━━━━━━━━━━━

📝 *Additional Note*

${note || "No Note"}

━━━━━━━━━━━━━━━━━━

Thank you for shopping with
*Layora Premium Hijabs* ❤️`;

const whatsappUrl=

`https://wa.me/916364254977?text=${encodeURIComponent(message)}`;

window.open(whatsappUrl,"_blank");

button.disabled=false;

button.innerText="Continue to WhatsApp";/* ==========================================
   COLOUR SELECTOR
========================================== */

const colourSelect = document.getElementById("customerColour");
const otherColourBox = document.getElementById("otherColourBox");

if (colourSelect && otherColourBox) {

    colourSelect.addEventListener("change", function () {

        if (this.value === "Other") {

            otherColourBox.style.display = "block";

        } else {

            otherColourBox.style.display = "none";

            const otherInput = document.getElementById("otherColour");

            if (otherInput) otherInput.value = "";

        }

    });

}

/* ==========================================
   QUANTITY BUTTONS
========================================== */

const qtyInput = document.getElementById("customerQty");

const minusBtn = document.getElementById("minusQty");

const plusBtn = document.getElementById("plusQty");

function updateOrderTotal() {

    if (!qtyInput) return;

    const priceText = document.getElementById("orderPrice").value;

    const price = parseFloat(priceText.replace(/[^\d.]/g, "")) || 0;

    const qty = parseInt(qtyInput.value) || 1;

    const total = price * qty;

    const totalElement = document.getElementById("orderTotal");

    if (totalElement) {

        totalElement.innerHTML = "₹" + total.toFixed(2);

    }

}

if (minusBtn) {

    minusBtn.addEventListener("click", function () {

        let qty = parseInt(qtyInput.value) || 1;

        if (qty > 1) {

            qty--;

            qtyInput.value = qty;

            updateOrderTotal();

        }

    });

}

if (plusBtn) {

    plusBtn.addEventListener("click", function () {

        let qty = parseInt(qtyInput.value) || 1;

        if (qty < 20) {

            qty++;

            qtyInput.value = qty;

            updateOrderTotal();

        }

    });

}

if (qtyInput) {

    qtyInput.addEventListener("input", function () {

        let qty = parseInt(this.value);

        if (isNaN(qty) || qty < 1) qty = 1;

        if (qty > 20) qty = 20;

        this.value = qty;

        updateOrderTotal();

    });

}

document.addEventListener("DOMContentLoaded", updateOrderTotal);
