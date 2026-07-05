/* ==========================================
   LAYORA V2
   COLLECTIONS PAGE
========================================== */

const productGrid = document.getElementById("productGrid");

let filteredProducts = [...products];

const urlParams = new URLSearchParams(window.location.search);

const selectedCategory = urlParams.get("category");

if(selectedCategory){

filteredProducts = products.filter(product =>

product.category.toLowerCase() === selectedCategory.toLowerCase()

);

}

renderProducts(filteredProducts);

function renderProducts(items){

if(items.length===0){

productGrid.innerHTML=`

<div class="empty-products">

<h2>No Products Found</h2>

<p>Try another category.</p>

</div>

`;

return;

}

productGrid.innerHTML = items.map(product => `

<div class="product-card">

<div class="product-image">

<img src="${product.image}" alt="${product.name}">

${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}

</div>

<div class="product-info">

<p class="product-category">

${product.category}

</p>

<h3 class="product-title">

${product.name}

</h3>

<div class="product-price">

<span class="offer-price">

₹${product.price}

</span>

<span class="original-price">

₹${product.mrp}

</span>

</div>

<div class="product-buttons">

<a

href="product.html?id=${product.id}"

class="details-btn">

View Details

</a>

</div>

</div>

</div>

`).join("");

}/* ==========================================
   SEARCH
========================================== */

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup", function(){

const keyword = this.value.toLowerCase().trim();

const result = filteredProducts.filter(product =>

product.name.toLowerCase().includes(keyword) ||

product.category.toLowerCase().includes(keyword) ||

product.fabric.toLowerCase().includes(keyword)

);

renderProducts(result);

});

}

/* ==========================================
   CATEGORY FILTER
========================================== */

const categoryFilter = document.getElementById("categoryFilter");

if(categoryFilter){

categoryFilter.addEventListener("change", function(){

const value = this.value;

if(value==="All"){

renderProducts(products);

return;

}

const result = products.filter(product =>

product.category===value

);

renderProducts(result);

});

}

/* ==========================================
   SORT PRODUCTS
========================================== */

const sortFilter=document.getElementById("sortProducts");

if(sortFilter){

sortFilter.addEventListener("change",function(){

let sorted=[...filteredProducts];

switch(this.value){

case "low-high":

sorted.sort((a,b)=>a.price-b.price);

break;

case "high-low":

sorted.sort((a,b)=>b.price-a.price);

break;

case "new":

sorted=sorted.filter(product=>product.newArrival);

break;

case "featured":

sorted=sorted.filter(product=>product.featured);

break;

case "name":

sorted.sort((a,b)=>a.name.localeCompare(b.name));

break;

default:

break;

}

renderProducts(sorted);

});

}/* ==========================================
   LOAD MORE
========================================== */

let visibleProducts = 12;

const loadMoreBtn = document.getElementById("loadMoreBtn");

function displayProducts(list){

const visible = list.slice(0, visibleProducts);

renderProducts(visible);

if(loadMoreBtn){

if(visibleProducts >= list.length){

loadMoreBtn.style.display="none";

}else{

loadMoreBtn.style.display="inline-flex";

}

}

}

displayProducts(filteredProducts);

if(loadMoreBtn){

loadMoreBtn.addEventListener("click",()=>{

visibleProducts += 12;

displayProducts(filteredProducts);

});

}

/* ==========================================
   WISHLIST
========================================== */

function toggleWishlist(productId){

let wishlist = JSON.parse(localStorage.getItem("layoraWishlist")) || [];

if(wishlist.includes(productId)){

wishlist = wishlist.filter(id => id !== productId);

}else{

wishlist.push(productId);

}

localStorage.setItem("layoraWishlist", JSON.stringify(wishlist));

}

/* ==========================================
   QUICK VIEW
========================================== */

function quickView(productId){

window.location.href=`product.html?id=${productId}`;

}

/* ==========================================
   SCROLL TO TOP AFTER FILTER
========================================== */

function refreshProducts(list){

displayProducts(list);

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/* ==========================================
   ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

document.querySelectorAll(".product-card").forEach(card=>{

card.classList.add("fade-in");

});

});
