/* ==========================================
   LAYORA V2
   MAIN SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

/* ==========================================
LOADER
========================================== */

const loader=document.getElementById("loader");

window.addEventListener("load",()=>{

setTimeout(()=>{

if(loader){

loader.style.opacity="0";

loader.style.visibility="hidden";

}

},700);

});

/* ==========================================
STICKY HEADER
========================================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/* ==========================================
BACK TO TOP
========================================== */

const backBtn=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backBtn.style.display="flex";

}else{

backBtn.style.display="none";

}

});

backBtn?.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================================
FEATURED PRODUCTS
========================================== */

const featuredContainer=document.getElementById("featuredProducts");

if(featuredContainer){

const featured=products.filter(item=>item.featured);

featuredContainer.innerHTML=featured.map(product=>`

<div class="product-card">

<div class="product-image">

<img src="${product.image}" alt="${product.name}">

${product.badge?`<span class="product-badge">${product.badge}</span>`:""}

</div>

<div class="product-info">

<p class="product-category">${product.category}</p>

<h3 class="product-title">${product.name}</h3>

<div class="product-price">

<span class="offer-price">₹${product.price}</span>

<span class="original-price">₹${product.mrp}</span>

</div>

<div class="product-buttons">

<a href="product.html?id=${product.id}" class="details-btn">

View Details

</a>

</div>

</div>

</div>

`).join("");

}/* ==========================================
NEW ARRIVALS
========================================== */

const newArrivalContainer = document.getElementById("newArrivalProducts");

if(newArrivalContainer){

const arrivals = products.filter(product => product.newArrival);

newArrivalContainer.innerHTML = arrivals.map(product => `

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

}

/* ==========================================
SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

const trigger = window.innerHeight * 0.85;

reveals.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < trigger){

item.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================================
CATEGORY CARD HOVER
========================================== */

document.querySelectorAll(".category-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/* ==========================================
NEWSLETTER
========================================== */

const newsletter=document.getElementById("newsletterForm");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for subscribing to Layora.");

newsletter.reset();

});

}/* ==========================================
HERO AUTO SLIDER (Future Ready)
========================================== */

const heroSlides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

if(heroSlides.length > 0){

heroSlides[currentSlide].classList.add("active");

setInterval(()=>{

heroSlides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= heroSlides.length){

currentSlide = 0;

}

heroSlides[currentSlide].classList.add("active");

},5000);

}

/* ==========================================
SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================================
WHATSAPP FLOAT BUTTON
========================================== */

const whatsappBtn=document.querySelector(".floating-whatsapp");

if(whatsappBtn){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

whatsappBtn.style.opacity="1";

}else{

whatsappBtn.style.opacity="0.9";

}

});

}

/* ==========================================
PAGE ANIMATION
========================================== */

document.body.classList.add("page-loaded");

/* ==========================================
END
========================================== */

});
const menuToggle=document.getElementById("menuToggle");

const mobileMenu=document.getElementById("mobileMenu");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

mobileMenu.classList.toggle("active");

});

}
