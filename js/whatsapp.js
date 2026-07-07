/* ==========================================
   LAYORA V2 - WHATSAPP ORDER SYSTEM
========================================== */

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzbkUo0FXEQ0HBqbpIDzt41RECK5fpgmYz-epcK1E2KjPiAfSk6eCqjXNBliIVC-fE9/exec";

const WHATSAPP_NUMBER = "916364254977";

const orderForm = document.getElementById("orderForm");

if (!orderForm) {
    console.error("Order form not found");
}

/* ==========================================
   HELPERS
========================================== */

function $(id) {
    return document.getElementById(id);
}

function value(id) {
    return $(id).value.trim();
}

function showError(id, msg) {
    const el = $(id);
    if (el) el.textContent = msg;
}

function clearErrors() {

    [
        "nameError",
        "phoneError",
        "colourError",
        "otherColourError",
        "addressError",
        "cityError",
        "stateError",
        "pinError"

    ].forEach(id => {

        if ($(id)) {

            $(id).textContent = "";

        }

    });

}

/* ==========================================
   ORDER ID
========================================== */

function generateOrderId() {

    const now = new Date();

    return "LAY" +

        now.getFullYear().toString().slice(-2) +

        (now.getMonth() + 1).toString().padStart(2, "0") +

        now.getDate().toString().padStart(2, "0") +

        Math.floor(Math.random() * 9000 + 1000);

}

/* ==========================================
   CROWNS
========================================== */

function calculateCrowns(amount) {

    amount = Number(amount);

    if (isNaN(amount)) return 0;

    return Math.floor(amount / 400);

}

/* ==========================================
   VALIDATION
========================================== */

function validateForm() {

    clearErrors();

    let valid = true;

    if (value("customerName").length < 3) {

        showError("nameError", "Enter valid name");

        valid = false;

    }

    if (!/^[6-9]\d{9}$/.test(value("customerPhone"))) {

        showError("phoneError", "Enter valid mobile number");

        valid = false;

    }

    if (!value("customerColour")) {

        showError("colourError", "Select colour");

        valid = false;

    }

    if (

        value("customerColour") === "Other" &&

        value("otherColour") === ""

    ) {

        showError("otherColourError", "Enter colour");

        valid = false;

    }

    if (value("customerAddress").length < 10) {

        showError("addressError", "Enter complete address");

        valid = false;

    }

    if (value("customerCity") === "") {

        showError("cityError", "Enter city");

        valid = false;

    }

    if (value("customerState") === "") {

        showError("stateError", "Enter state");

        valid = false;

    }

    if (!/^\d{6}$/.test(value("customerPincode"))) {

        showError("pinError", "Enter valid pincode");

        valid = false;

    }

    if (!$("agreeTerms").checked) {

        alert("Please accept Terms & Conditions.");

        valid = false;

    }

    return valid;

}/* ==========================================
   SAVE ORDER TO GOOGLE SHEETS
========================================== */

async function saveOrder(orderData){

    try{

       // Submit form using hidden iframe
orderForm.action = SCRIPT_URL;

document.getElementById("orderProduct").name = "product";
document.getElementById("orderId").name = "productId";
document.getElementById("customerName").name = "customer";
document.getElementById("customerPhone").name = "phone";
document.getElementById("customerColour").name = "colour";
document.getElementById("customerQty").name = "quantity";
document.getElementById("customerAddress").name = "address";
document.getElementById("customerCity").name = "city";
document.getElementById("customerState").name = "state";
document.getElementById("customerPincode").name = "pincode";
document.getElementById("customerNote").name = "note";

orderForm.submit();

        return true;

    }catch(error){

        console.error(error);

        return{

            success:false,

            error:error.message

        };

    }

}

/* ==========================================
   CREATE WHATSAPP MESSAGE
========================================== */

function buildWhatsAppMessage(order){

return `🛍️ *LAYORA PREMIUM HIJABS*

━━━━━━━━━━━━━━━━━━

🆔 Order ID
${order.orderId}

👤 Customer
${order.customer}

📞 Mobile
${order.phone}

━━━━━━━━━━━━━━━━━━

🧕 Product
${order.product}

🏷️ Product ID
${order.productId}

🎨 Colour
${order.colour}

📦 Quantity
${order.quantity}

💰 Amount
₹${order.amount}

👑 Crowns Earned
${order.crowns}

━━━━━━━━━━━━━━━━━━

📍 Delivery Address

${order.address}

${order.city}

${order.state}

${order.pincode}

━━━━━━━━━━━━━━━━━━

📝 Note

${order.note || "No Note"}

━━━━━━━━━━━━━━━━━━

Thank you for shopping with

❤️ *Layora Premium Hijabs*`;

}

/* ==========================================
   SEND ORDER
========================================== */

async function sendWhatsAppOrder(){

    if(!validateForm()){

        return;

    }

    const btn = $("continueOrder");

    btn.disabled = true;

    btn.innerHTML = "Saving Order...";

    const price = Number(

        $("orderPrice").value.replace(/[^\d]/g,"")

    );

    const qty = Number(

        $("customerQty").value

    );

    const total = price*qty;

    const order = {

        orderId:generateOrderId(),

        product:value("orderProduct"),

        productId:value("orderId"),

        customer:value("customerName"),

        phone:value("customerPhone"),

        colour:

        value("customerColour")==="Other"

        ?

        value("otherColour")

        :

        value("customerColour"),

        quantity:qty,

        amount:total,

        address:value("customerAddress"),

        city:value("customerCity"),

        state:value("customerState"),

        pincode:value("customerPincode"),

        note:value("customerNote"),

        crowns:calculateCrowns(total)

    };

    const result = await saveOrder(order);

    if(result !== true){

        alert("Unable to save order.");

        btn.disabled=false;

        btn.innerHTML="Continue to WhatsApp";

        return;

    }

    const message = buildWhatsAppMessage(order);

    const url =

`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

    btn.disabled=false;

    btn.innerHTML="Continue to WhatsApp";

}/* ==========================================
   QUANTITY
========================================== */

function updateTotal(){

    const price = Number(

        $("orderPrice").value.replace(/[^\d]/g,"")

    );

    const qty = Number(

        $("customerQty").value

    );

    $("orderTotal").textContent="₹"+(price*qty);

}

if($("minusQty")){

$("minusQty").addEventListener("click",function(){

let qty=Number($("customerQty").value);

if(qty>1){

qty--;

$("customerQty").value=qty;

updateTotal();

}

});

}

if($("plusQty")){

$("plusQty").addEventListener("click",function(){

let qty=Number($("customerQty").value);

if(qty<20){

qty++;

$("customerQty").value=qty;

updateTotal();

}

});

}

if($("customerQty")){

$("customerQty").addEventListener("input",updateTotal);

}

/* ==========================================
   OTHER COLOUR
========================================== */

if($("customerColour")){

$("customerColour").addEventListener("change",function(){

if(this.value==="Other"){

$("otherColourBox").style.display="block";

}else{

$("otherColourBox").style.display="none";

$("otherColour").value="";

}

});

}

/* ==========================================
   FORM SUBMIT
========================================== */

if(orderForm){

orderForm.addEventListener("submit",async function(e){

e.preventDefault();

await sendWhatsAppOrder();

});

}

/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener("DOMContentLoaded",function(){

updateTotal();

});
