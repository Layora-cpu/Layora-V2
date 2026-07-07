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

}
