/* ==========================================
   LAYORA WHATSAPP SYSTEM
========================================== */

const SCRIPT_URL =
https://script.google.com/macros/s/AKfycby2Sr4hpkl8jp3W4dzK7c4_uiwEBcOTvBoSzGl-CqYpX-Y_paSLlV0mUVZbxOTdH3j44g/exec
const orderForm=document.getElementById("orderForm");

if(orderForm){

orderForm.addEventListener("submit",async function(e){

e.preventDefault();

clearErrors();

if(validateForm()){

await sendWhatsAppOrder();

}

});

}

/* ==========================================
ERROR FUNCTIONS
========================================== */

function clearErrors(){

document.querySelectorAll(".error").forEach(function(el){

el.textContent="";

});

}

function showError(id,msg){

const el=document.getElementById(id);

if(el){

el.textContent=msg;

}

}

/* ==========================================
VALIDATE
========================================== */

function validateForm(){

let valid=true;

const name=document.getElementById("customerName").value.trim();

const phone=document.getElementById("customerPhone").value.trim();

const address=document.getElementById("customerAddress").value.trim();

const city=document.getElementById("customerCity").value.trim();

const state=document.getElementById("customerState").value.trim();

const pin=document.getElementById("customerPincode").value.trim();

const colour=document.getElementById("customerColour").value;

const other=document.getElementById("otherColour");

const agree=document.getElementById("agreeTerms");

if(name.length<3){

showError("nameError","Enter valid name.");

valid=false;

}

if(!/^[6-9][0-9]{9}$/.test(phone)){

showError("phoneError","Enter valid mobile number.");

valid=false;

}

if(address.length<15){

showError("addressError","Enter complete address.");

valid=false;

}

if(city.length<2){

showError("cityError","Enter city.");

valid=false;

}

if(state.length<2){

showError("stateError","Enter state.");

valid=false;

}

if(!/^[0-9]{6}$/.test(pin)){

showError("pinError","Enter valid pincode.");

valid=false;

}

if(colour===""){

showError("colourError","Select colour.");

valid=false;

}

if(colour==="Other"){

if(other.value.trim()===""){

showError("otherColourError","Enter your colour.");

valid=false;

}

}

if(!agree.checked){

alert("Please accept Terms & Conditions.");

valid=false;

}

return valid;

}
/* ==========================================
GENERATE ORDER ID
========================================== */

function generateOrderId(){

const now=new Date();

return "LAY"+
now.getFullYear()+
String(now.getMonth()+1).padStart(2,"0")+
String(now.getDate()).padStart(2,"0")+
String(now.getHours()).padStart(2,"0")+
String(now.getMinutes()).padStart(2,"0")+
String(now.getSeconds()).padStart(2,"0");

}

/* ==========================================
SEND ORDER
========================================== */

async function sendWhatsAppOrder(){

const button=document.getElementById("continueOrder");

button.disabled=true;

button.innerHTML="Preparing Order...";

const orderId=generateOrderId();

const product=document.getElementById("orderProduct").value;

const productId=document.getElementById("orderId").value;

const priceText=document.getElementById("orderPrice").value;

const price=parseFloat(priceText.replace(/[^\d.]/g,""))||0;

const qty=parseInt(document.getElementById("customerQty").value)||1;

const total=price*qty;

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

};
/* ==========================================
SAVE TO GOOGLE SHEETS
========================================== */

try{

const formData = new URLSearchParams();

Object.keys(orderData).forEach(key => {
  formData.append(key, orderData[key]);
});

const response = await fetch(SCRIPT_URL, {
  method: "POST",
  body: formData
});

if(!response.ok){

throw new Error("Unable to save order.");

}

const result=await response.json();

console.log(result);

}catch(error){

console.error(error);

alert("Unable to connect to Layora server. Your WhatsApp order will still be prepared.");

}

/* ==========================================
WHATSAPP MESSAGE
========================================== */

const message=

`🛍️ *NEW LAYORA ORDER*

━━━━━━━━━━━━━━━━━━━━

🆔 Order ID : ${orderId}

👤 Customer : ${name}

📱 Mobile : ${phone}

━━━━━━━━━━━━━━━━━━━━

🧕 Product : ${product}

🏷️ Product ID : ${productId}

🎨 Colour : ${colour}

📦 Quantity : ${qty}

💰 Price : ₹${price}

💵 Total : ₹${total}

👑 Crowns Earned : ${crowns}

━━━━━━━━━━━━━━━━━━━━

🏠 DELIVERY ADDRESS

${address}

${city}

${state}

${pincode}

━━━━━━━━━━━━━━━━━━━━

📝 NOTE

${note || "No Additional Note"}

━━━━━━━━━━━━━━━━━━━━

Thank you for shopping with

*Layora Premium Hijabs* ❤️`;

const whatsappUrl=

`https://wa.me/916364254977?text=${encodeURIComponent(message)}`;

window.open(whatsappUrl,"_blank");

button.disabled=false;

button.innerHTML="Continue to WhatsApp";

}
/* ==========================================
OTHER COLOUR
========================================== */

const colourSelect=document.getElementById("customerColour");

const otherColourBox=document.getElementById("otherColourBox");

if(colourSelect && otherColourBox){

colourSelect.addEventListener("change",function(){

if(this.value==="Other"){

otherColourBox.style.display="block";

}else{

otherColourBox.style.display="none";

const otherInput=document.getElementById("otherColour");

if(otherInput){

otherInput.value="";

}

}

});

}

/* ==========================================
QUANTITY BUTTONS
========================================== */

const qtyInput=document.getElementById("customerQty");

const minusBtn=document.getElementById("minusQty");

const plusBtn=document.getElementById("plusQty");

function updateTotal(){

if(!qtyInput)return;

const priceInput=document.getElementById("orderPrice");

const totalLabel=document.getElementById("orderTotal");

if(!priceInput || !totalLabel)return;

const price=parseFloat(

priceInput.value.replace(/[^\d.]/g,"")

)||0;

const qty=parseInt(qtyInput.value)||1;

const total=price*qty;

totalLabel.textContent="₹"+total.toFixed(2);

}

if(minusBtn){

minusBtn.addEventListener("click",function(){

let qty=parseInt(qtyInput.value)||1;

if(qty>1){

qty--;

qtyInput.value=qty;

updateTotal();

}

});

}

if(plusBtn){

plusBtn.addEventListener("click",function(){

let qty=parseInt(qtyInput.value)||1;

if(qty<20){

qty++;

qtyInput.value=qty;

updateTotal();

}

});

}

if(qtyInput){

qtyInput.addEventListener("input",function(){

let qty=parseInt(this.value);

if(isNaN(qty)||qty<1){

qty=1;

}

if(qty>20){

qty=20;

}

this.value=qty;

updateTotal();

});

}

/* ==========================================
INITIALIZE
========================================== */

document.addEventListener("DOMContentLoaded",function(){

updateTotal();

if(colourSelect && colourSelect.value==="Other"){

otherColourBox.style.display="block";

}

});
