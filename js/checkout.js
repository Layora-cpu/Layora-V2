/* =========================================================
   LAYORA V2 - CHECKOUT.JS
   Version 2.0
========================================================= */

const API_URL =
"https://script.google.com/macros/s/AKfycbzbkUo0FXEQ0HBqbpIDzt41RECK5fpgmYz-epcK1E2KjPiAfSk6eCqjXNBliIVC-fE9/exec";

const form={

name:document.getElementById("customerName"),

phone:document.getElementById("customerPhone"),

email:document.getElementById("customerEmail"),

address:document.getElementById("customerAddress"),

city:document.getElementById("customerCity"),

state:document.getElementById("customerState"),

pincode:document.getElementById("customerPincode"),

colour:document.getElementById("selectedColour"),

otherColour:document.getElementById("otherColour"),

button:document.getElementById("placeOrderBtn")

};

let checkout={

productId:"",

productName:"",

price:0,

quantity:1,

amount:0,

crowns:0

};

/* =========================================================
LOAD PRODUCT
========================================================= */

function loadCheckout(){

const data=JSON.parse(localStorage.getItem("layoraCheckout"));

if(!data)return;

checkout=data;

renderSummary();

loadCustomer();

}

window.addEventListener("load",loadCheckout);

/* =========================================================
SUMMARY
========================================================= */

function renderSummary(){

const box=document.getElementById("orderSummary");

if(!box)return;

box.innerHTML=`

<div class="summary-product">

<img src="${checkout.image}">

<div>

<h4>${checkout.productName}</h4>

<p>${checkout.fabric}</p>

<p>₹${checkout.price}</p>

</div>

</div>

`;

calculateTotal();

}

/* =========================================================
TOTAL
========================================================= */

function calculateTotal(){

checkout.amount=

checkout.price*

checkout.quantity;

document.getElementById("subtotalPrice").innerHTML=

"₹"+checkout.amount;

document.getElementById("finalPrice").innerHTML=

"₹"+checkout.amount;

checkout.crowns=

Math.floor(checkout.amount/200);

document.getElementById("earnCrowns").innerHTML=

checkout.crowns;

}

/* =========================================================
VALIDATION
========================================================= */

function validate(){

if(form.name.value.trim().length<3){

showToast("Enter Full Name");

return false;

}

if(!/^[6-9]\d{9}$/.test(form.phone.value)){

showToast("Invalid Mobile Number");

return false;

}

if(form.address.value.trim().length<10){

showToast("Enter Complete Address");

return false;

}

if(form.pincode.value.length!=6){

showToast("Invalid Pincode");

return false;

}

return true;

}/* =========================================================
SAVE CUSTOMER
========================================================= */

function saveCustomer(){

const customer={

name:form.name.value,

phone:form.phone.value,

email:form.email.value,

address:form.address.value,

city:form.city.value,

state:form.state.value,

pincode:form.pincode.value

};

localStorage.setItem(

"layoraCustomer",

JSON.stringify(customer)

);

}

function loadCustomer(){

const customer=JSON.parse(

localStorage.getItem("layoraCustomer")

);

if(!customer)return;

form.name.value=customer.name||"";

form.phone.value=customer.phone||"";

form.email.value=customer.email||"";

form.address.value=customer.address||"";

form.city.value=customer.city||"";

form.state.value=customer.state||"";

form.pincode.value=customer.pincode||"";

}

/* =========================================================
BUTTON LOADING
========================================================= */

function buttonLoading(){

form.button.disabled=true;

form.button.dataset.text=form.button.innerHTML;

form.button.innerHTML=`

<span class="spinner"></span>

Placing Order...

`;

}

function buttonReset(){

form.button.disabled=false;

form.button.innerHTML=

form.button.dataset.text;

}

/* =========================================================
ORDER DATA
========================================================= */

function buildOrder(){

return{

customer:form.name.value.trim(),

phone:form.phone.value.trim(),

email:form.email.value.trim(),

address:form.address.value.trim(),

city:form.city.value.trim(),

state:form.state.value.trim(),

pincode:form.pincode.value.trim(),

productId:checkout.productId,

product:checkout.productName,

colour:

form.colour.value==="Other"

?form.otherColour.value

:form.colour.value,

quantity:checkout.quantity,

price:checkout.price,

amount:checkout.amount,

crowns:checkout.crowns,

payment:"COD",

note:""

};

}

/* =========================================================
PLACE ORDER
========================================================= */

async function placeOrder(){

if(!validate()) return;

saveCustomer();

buttonLoading();

const order=buildOrder();

try{

const response=await fetch(API_URL,{

method:"POST",

body:new URLSearchParams(order)

});

const result=await response.json();

if(result.success){

showSuccess(result,order);

}else{

buttonReset();

showToast(result.error||

"Unable to place order");

}

}catch(e){

buttonReset();

showToast(

"Network Error. Please try again."

);

}

}

form.button?.addEventListener(

"click",

placeOrder

);/* =========================================================
SUCCESS
========================================================= */

function showSuccess(result,order){

buttonReset();

const popup=document.getElementById("successPopup");

document.getElementById("successOrderId").innerText=

result.orderId;

document.getElementById("successCrowns").innerText=

result.crowns;

popup.style.display="flex";

setTimeout(()=>{

openWhatsApp(order,result.orderId);

},2500);

}

/* =========================================================
WHATSAPP MESSAGE
========================================================= */

function openWhatsApp(order,orderId){

const message=`
🌸 *LAYORA ORDER*

🆔 Order ID : ${orderId}

👤 Name : ${order.customer}

📱 Mobile : ${order.phone}

📦 Product : ${order.product}

🎨 Colour : ${order.colour}

🔢 Quantity : ${order.quantity}

💰 Amount : ₹${order.amount}

📍 Address :
${order.address}

${order.city}
${order.state}
${order.pincode}

👑 Crowns Earned : ${order.crowns}

Thank you for shopping with Layora ❤️
`;

window.location.href=

"https://wa.me/916364254977?text="+

encodeURIComponent(message);

}

/* =========================================================
CHECK REWARDS
========================================================= */

const rewardBtn=document.getElementById("checkRewardsBtn");

rewardBtn?.addEventListener(

"click",

checkRewards

);

async function checkRewards(){

const phone=document

.getElementById("rewardPhone")

.value.trim();

if(!/^[6-9]\d{9}$/.test(phone)){

showToast(

"Enter Valid Mobile Number"

);

return;

}

try{

const response=await fetch(

API_URL+

"?action=rewards&phone="+phone

);

const data=await response.json();

const box=document

.getElementById("rewardResult");

if(data.exists){

box.innerHTML=`

<div class="reward-card">

<h4>

👋 Welcome Back

</h4>

<p>

👑 Crowns :

<strong>

${data.crowns}

</strong>

</p>

<p>

🏅 ${data.level}

</p>

<p>

💰 Discount

₹${data.discount}

</p>

</div>

`;

}else{

box.innerHTML=`

<div class="reward-card">

✨ New Customer

<br><br>

Start earning Layora Crowns today.

</div>

`;

}

}catch{

showToast(

"Unable to check rewards"

);

}

}/* =========================================================
LAYORA V2
PART 4
========================================================= */

/* QUANTITY */

const qtyValue=document.getElementById("qtyValue");

const qtyPlus=document.getElementById("qtyPlus");

const qtyMinus=document.getElementById("qtyMinus");

if(qtyPlus){

qtyPlus.addEventListener("click",()=>{

checkout.quantity++;

updateTotals();

});

}

if(qtyMinus){

qtyMinus.addEventListener("click",()=>{

if(checkout.quantity>1){

checkout.quantity--;

updateTotals();

}

});

}

/* TOTALS */

function updateTotals(){

checkout.amount=

checkout.price*

checkout.quantity;

checkout.crowns=

Math.floor(checkout.amount/200);

if(qtyValue)

qtyValue.innerHTML=checkout.quantity;

document.getElementById("subtotalPrice").innerHTML=

"₹"+checkout.amount;

document.getElementById("finalPrice").innerHTML=

"₹"+checkout.amount;

document.getElementById("earnCrowns").innerHTML=

checkout.crowns;

saveCheckout();

}

/* SAVE CHECKOUT */

function saveCheckout(){

localStorage.setItem(

"layoraCheckout",

JSON.stringify(checkout)

);

}

/* RESTORE */

window.addEventListener("load",()=>{

const saved=

localStorage.getItem("layoraCheckout");

if(saved){

checkout=

JSON.parse(saved);

updateTotals();

}

});

/* COUPON */

const coupon=document.getElementById("couponCode");

const applyCoupon=document.getElementById("applyCoupon");

if(applyCoupon){

applyCoupon.addEventListener("click",()=>{

const code=

coupon.value.trim().toUpperCase();

if(code==="LAYORA100"){

checkout.amount-=100;

showToast("Coupon Applied");

updateTotals();

}else{

showToast("Invalid Coupon");

}

});

}

/* OTHER COLOUR */

if(form.colour){

form.colour.addEventListener("change",()=>{

form.otherColour.style.display=

form.colour.value==="Other"

?"block"

:"none";

});

}

/* PHONE AUTO FILL */

form.phone?.addEventListener("blur",()=>{

const saved=

JSON.parse(

localStorage.getItem("layoraCustomer")

);

if(

saved &&

saved.phone===form.phone.value

){

form.name.value=saved.name;

form.email.value=saved.email;

form.address.value=saved.address;

form.city.value=saved.city;

form.state.value=saved.state;

form.pincode.value=saved.pincode;

}

});

/* BEFORE UNLOAD */

window.addEventListener("beforeunload",()=>{

saveCheckout();

});

/* READY */

console.log(

"Layora Checkout V2 Ready"

);
