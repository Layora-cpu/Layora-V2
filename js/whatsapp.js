/* ==========================================
   LAYORA WHATSAPP ORDER SYSTEM V2
========================================== */

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzbkUo0FXEQ0HBqbpIDzt41RECK5fpgmYz-epcK1E2KjPiAfSk6eCqjXNBliIVC-fE9/exec";
const WHATSAPP_NUMBER = "916364254977";

const orderForm = document.getElementById("orderForm");

function $(id){
    return document.getElementById(id);
}

function getValue(id){
    return $(id).value.trim();
}

function getColour(){

    if(getValue("customerColour")==="Other"){

        return getValue("otherColour");

    }

    return getValue("customerColour");

}

function getAmount(){

    const price = Number(
        $("orderPrice").value.replace(/[^\d]/g,"")
    );

    const qty = Number(
        $("customerQty").value
    );

    return price*qty;

}

function generateOrder(){

    return{

        product:getValue("orderProduct"),

        productId:getValue("orderId"),

        customer:getValue("customerName"),

        phone:getValue("customerPhone"),

        colour:getColour(),

        quantity:Number(getValue("customerQty")),

        amount:getAmount(),

        address:getValue("customerAddress"),

        city:getValue("customerCity"),

        state:getValue("customerState"),

        pincode:getValue("customerPincode"),

        note:getValue("customerNote")

    };

}/* ==========================================
   SAVE ORDER TO GOOGLE SHEETS
========================================== */

async function saveOrder(order) {

  return new Promise((resolve) => {

    const form = document.createElement("form");
    form.method = "POST";
    form.action = SCRIPT_URL;
    form.target = "hidden_iframe";

    for (const key in order) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = order[key];
      form.appendChild(input);
    }

    let iframe = document.getElementById("hidden_iframe");

    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.name = "hidden_iframe";
      iframe.id = "hidden_iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      document.body.removeChild(form);
      resolve({ success: true });
    }, 1500);

  });

}
/* ==========================================
   CREATE WHATSAPP MESSAGE
========================================== */

function buildWhatsAppMessage(order, result){

return `🛍️ *Layora Premium Hijabs*

━━━━━━━━━━━━━━

🆔 Order ID
${result.orderId}

👤 Customer
${order.customer}

📞 Mobile
${order.phone}

━━━━━━━━━━━━━━

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
${result.crowns}

━━━━━━━━━━━━━━

📍 Address

${order.address}

${order.city}

${order.state}

${order.pincode}

━━━━━━━━━━━━━━

📝 Note

${order.note || "No Note"}

Thank you for shopping with Layora ❤️`;

}/* ==========================================
   SUBMIT ORDER
========================================== */

async function sendWhatsAppOrder() {

    const btn = $("continueOrder");

    btn.disabled = true;
    btn.innerHTML = "Saving Order...";

    const order = generateOrder();

    const result = await saveOrder(order);

    if (!result.success) {

        btn.disabled = false;
        btn.innerHTML = "Continue to WhatsApp";

        alert(result.error || "Unable to save order.");

        return;

    }

    const message = buildWhatsAppMessage(order, result);

    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");

    btn.disabled = false;
    btn.innerHTML = "Continue to WhatsApp";

    orderForm.reset();

}

/* ==========================================
   QUANTITY
========================================== */

function updateTotal() {

    const price = Number(
        $("orderPrice").value.replace(/[^\d]/g, "")
    );

    const qty = Number(
        $("customerQty").value
    );

    $("orderTotal").textContent = "₹" + (price * qty);

}

$("minusQty").addEventListener("click", () => {

    let qty = Number($("customerQty").value);

    if (qty > 1) {

        qty--;

        $("customerQty").value = qty;

        updateTotal();

    }

});

$("plusQty").addEventListener("click", () => {

    let qty = Number($("customerQty").value);

    if (qty < 20) {

        qty++;

        $("customerQty").value = qty;

        updateTotal();

    }

});

$("customerQty").addEventListener("input", updateTotal);

/* ==========================================
   OTHER COLOUR
========================================== */

$("customerColour").addEventListener("change", function () {

    $("otherColourBox").style.display =
        this.value === "Other"
            ? "block"
            : "none";

});

/* ==========================================
   FORM
========================================== */

orderForm.addEventListener("submit", function (e) {

    e.preventDefault();

    sendWhatsAppOrder();

});

document.addEventListener("DOMContentLoaded", updateTotal);
