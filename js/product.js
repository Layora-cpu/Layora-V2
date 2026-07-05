/* ==========================================
   LAYORA V2
   PRODUCT PAGE
========================================== */

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products.find(item => item.id === productId);

const productContainer = document.getElementById("productContainer");

if (!product) {

    productContainer.innerHTML = `
        <div class="empty-products">
            <h2>Product Not Found</h2>
            <p>The product you are looking for does not exist.</p>
        </div>
    `;

} else {

    productContainer.innerHTML = `
    
    <div class="product-page">

        <div class="product-left">

            <img
                src="${product.image}"
                alt="${product.name}"
                class="main-product-image">

        </div>

        <div class="product-right">

            <span class="product-badge">
                ${product.badge}
            </span>

            <h1>${product.name}</h1>

            <p class="product-category">
                ${product.category}
            </p>

            <p class="product-description">
                ${product.description}
            </p>

            <div class="price-box">

                <span class="offer-price">
                    ₹${product.price}
                </span>

                <span class="original-price">
                    ₹${product.mrp}
                </span>

            </div>

            <button
                id="orderNow"
                class="primary-btn">

                Order on WhatsApp

            </button>

        </div>

    </div>

    `;

}/* ==========================================
   ORDER MODAL
========================================== */

const orderBtn = document.getElementById("orderNow");

if(orderBtn){

orderBtn.addEventListener("click",()=>{

document.getElementById("orderModal").style.display="flex";

document.getElementById("orderProduct").value=product.name;

document.getElementById("orderId").value=product.id;

document.getElementById("orderPrice").value="₹"+product.price;

updateTotal();

});

}

/* Close Modal */

const closeBtn=document.querySelector(".close-order");

if(closeBtn){

closeBtn.onclick=()=>{

document.getElementById("orderModal").style.display="none";

};

}

window.onclick=(e)=>{

const modal=document.getElementById("orderModal");

if(e.target===modal){

modal.style.display="none";

}

};

/* Quantity */

const qtyInput=document.getElementById("customerQty");

const plusBtn=document.getElementById("plusQty");

const minusBtn=document.getElementById("minusQty");

if(plusBtn){

plusBtn.onclick=()=>{

qtyInput.value=parseInt(qtyInput.value)+1;

updateTotal();

};

}

if(minusBtn){

minusBtn.onclick=()=>{

if(parseInt(qtyInput.value)>1){

qtyInput.value=parseInt(qtyInput.value)-1;

updateTotal();

}

};

}

qtyInput?.addEventListener("input",updateTotal);

function updateTotal(){

const qty=parseInt(qtyInput.value)||1;

const total=qty*product.price;

document.getElementById("orderTotal").innerHTML="₹"+total;

}/* ==========================================
   WHATSAPP ORDER
========================================== */

const orderForm = document.getElementById("orderForm");

if(orderForm){

orderForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("customerName").value.trim();

const phone=document.getElementById("customerPhone").value.trim();

const colour=document.getElementById("customerColour").value;

const qty=document.getElementById("customerQty").value;

const address=document.getElementById("customerAddress").value.trim();

const city=document.getElementById("customerCity").value.trim();

const state=document.getElementById("customerState").value.trim();

const pincode=document.getElementById("customerPincode").value.trim();

const note=document.getElementById("customerNote").value.trim();

const total=product.price*qty;

const message=`Hello Layora Team,

I would like to place an order.

━━━━━━━━━━━━━━

🛍 PRODUCT DETAILS

Product : ${product.name}

Product ID : ${product.id}

Price : ₹${product.price}

Colour : ${colour}

Quantity : ${qty}

Total : ₹${total}

━━━━━━━━━━━━━━

👤 CUSTOMER DETAILS

Name : ${name}

Phone : ${phone}

Address : ${address}

City : ${city}

State : ${state}

Pincode : ${pincode}

━━━━━━━━━━━━━━

📝 Additional Note

${note || "None"}

Thank you.`;

const whatsappNumber="919880460536";

const url=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

window.open(url,"_blank");

});

}
