/* ==========================================
   LAYORA V2
   UTILITIES
========================================== */

/* Currency */

function formatPrice(price){

return "₹"+Number(price).toLocaleString("en-IN");

}

/* Random ID */

function generateOrderId(){

return "LAY-"+Date.now();

}

/* Save */

function saveLocal(key,value){

localStorage.setItem(key,JSON.stringify(value));

}

/* Read */

function readLocal(key){

const value=localStorage.getItem(key);

return value ? JSON.parse(value) : null;

}

/* Remove */

function removeLocal(key){

localStorage.removeItem(key);

}

/* Toast */

function showToast(message){

const toast=document.createElement("div");

toast.className="toast";

toast.innerText=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},400);

},2500);

}
