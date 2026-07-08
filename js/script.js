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
