/* ==========================================
LAYORA V2
MAIN SCRIPT
========================================== */

// Loader

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},500);

}

});

// Mobile Menu

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if(menuToggle && mobileMenu){

menuToggle.addEventListener("click",()=>{

mobileMenu.classList.toggle("active");

});

document.querySelectorAll("#mobileMenu a").forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.classList.remove("active");

});

});

}

// Back To Top

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backToTop.style.display="flex";

}else{

backToTop.style.display="none";

}

});

if(backToTop){

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// Sticky Header Shadow

const header=document.querySelector(".site-header");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

// Lazy Image Fade

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

// Smooth Anchor Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
/* ==========================================
PRODUCT SEARCH
========================================== */

const searchInput = document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("input",function(){

const value=this.value.toLowerCase();

document.querySelectorAll(".product-card").forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}

/* ==========================================
CATEGORY FILTER
========================================== */

document.querySelectorAll("[data-category]").forEach(button=>{

button.addEventListener("click",()=>{

const category=button.dataset.category;

document.querySelectorAll(".product-card").forEach(card=>{

if(category==="all"){

card.style.display="block";

return;

}

card.style.display=

card.dataset.category===category

?"block":"none";

});

});

});

/* ==========================================
TOAST
========================================== */

function showToast(message){

let toast=document.createElement("div");

toast.className="toast";

toast.innerText=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},50);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},300);

},2500);

}

/* ==========================================
BUTTON LOADING
========================================== */

function loadingButton(button,text="Loading..."){

button.dataset.original=button.innerHTML;

button.disabled=true;

button.innerHTML=text;

}

function resetButton(button){

button.disabled=false;

button.innerHTML=button.dataset.original;

}

/* ==========================================
FORMAT PRICE
========================================== */

function formatPrice(price){

return "₹"+Number(price).toLocaleString("en-IN");

}

/* ==========================================
COPY TEXT
========================================== */

function copyText(text){

navigator.clipboard.writeText(text);

showToast("Copied");

}

/* ==========================================
NETWORK STATUS
========================================== */

window.addEventListener("offline",()=>{

showToast("No Internet Connection");

});

window.addEventListener("online",()=>{

showToast("Back Online");

});
/* ==========================================
LAYORA V2
ADVANCED FEATURES
========================================== */

// Wishlist (Future Ready)

const wishlist = JSON.parse(localStorage.getItem("layoraWishlist")) || [];

function addToWishlist(id){

if(!wishlist.includes(id)){

wishlist.push(id);

localStorage.setItem("layoraWishlist",JSON.stringify(wishlist));

showToast("Added to Wishlist ❤️");

}else{

showToast("Already in Wishlist");

}

}

// Recently Viewed

function saveRecentProduct(productId){

let recent = JSON.parse(localStorage.getItem("layoraRecent")) || [];

recent = recent.filter(id=>id!==productId);

recent.unshift(productId);

recent = recent.slice(0,10);

localStorage.setItem("layoraRecent",JSON.stringify(recent));

}

// Product Sorting

function sortProducts(type){

const grid=document.querySelector(".product-grid");

if(!grid)return;

const cards=[...grid.children];

cards.sort((a,b)=>{

const pa=Number(a.dataset.price||0);

const pb=Number(b.dataset.price||0);

if(type==="low") return pa-pb;

if(type==="high") return pb-pa;

return 0;

});

cards.forEach(card=>grid.appendChild(card));

}

// Header Active Link

const current=location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

if(link.getAttribute("href")===current){

link.classList.add("active");

}

});

// Auto Close Mobile Menu

window.addEventListener("resize",()=>{

if(window.innerWidth>768){

mobileMenu?.classList.remove("active");

}

});

// Keyboard Shortcut

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

mobileMenu?.classList.remove("active");

}

});

// Performance

window.addEventListener("pageshow",()=>{

document.body.classList.add("loaded");

});

console.log("Layora V2 Loaded Successfully");
