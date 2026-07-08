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
