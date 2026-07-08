const API_URL = "https://script.google.com/macros/s/AKfycbzbkUo0FXEQ0HBqbpIDzt41RECK5fpgmYz-epcK1E2KjPiAfSk6eCqjXNBliIVC-fE9/exec";

document.getElementById("placeOrderBtn").addEventListener("click", placeOrder);

async function placeOrder() {

    const data = {

        customer: document.getElementById("customerName").value,

        phone: document.getElementById("customerPhone").value,

        address: document.getElementById("customerAddress").value,

        city: document.getElementById("customerCity").value,

        state: document.getElementById("customerState").value,

        pincode: document.getElementById("customerPincode").value,

        colour: document.getElementById("selectedColour").value,

        quantity: 1,

        amount: window.finalAmount || 0,

        note: ""

    };

    if (!data.customer || !data.phone || !data.address) {

        alert("Please fill all required fields.");

        return;

    }

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            body: new URLSearchParams(data)

        });

        const result = await response.json();

        if (result.success) {

            document.getElementById("successOrderId").innerText = result.orderId;

            document.getElementById("successCrowns").innerText = result.crowns;

            document.getElementById("successPopup").style.display = "flex";

            setTimeout(() => {

                window.location.href = createWhatsAppMessage(data, result.orderId);

            }, 2500);

        } else {

            alert(result.error);

        }

    } catch (e) {

        alert("Network Error");

    }

}
