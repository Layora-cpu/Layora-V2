/* ==========================================
   LAYORA V2
   ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

const revealElements=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:0.15
});

revealElements.forEach(item=>{

observer.observe(item);

});

/* Floating Animation */

document.querySelectorAll(".floating").forEach(item=>{

item.style.animation="floating 4s ease-in-out infinite";

});

/* Product Hover Animation */

document.querySelectorAll(".product-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

});
