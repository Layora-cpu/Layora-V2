/* ==========================================
   LAYORA WHATSAPP ORDER
========================================== */

function orderOnWhatsApp(product){

    const name = document.getElementById("customerName")?.value || "";
    const phone = document.getElementById("customerPhone")?.value || "";
    const qty = document.getElementById("customerQty")?.value || 1;
    const address = document.getElementById("customerAddress")?.value || "";
    const city = document.getElementById("customerCity")?.value || "";
    const state = document.getElementById("customerState")?.value || "";
    const pincode = document.getElementById("customerPincode")?.value || "";

    const message = `
🛍️ *NEW LAYORA ORDER*

━━━━━━━━━━━━━━

👤 Customer : ${name}

📱 Phone : ${phone}

━━━━━━━━━━━━━━

🧕 Product : ${product.name}

🆔 Product ID : ${product.id}

💰 Price : ₹${product.price}

📦 Quantity : ${qty}

━━━━━━━━━━━━━━

🏠 Delivery Address

${address}

${city}

${state}

${pincode}

━━━━━━━━━━━━━━

Please confirm my order.

Thank you ❤️
`;

    const url =
`https://wa.me/916364254977?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}
