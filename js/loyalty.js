/* ==========================================
   LAYORA CROWN REWARDS
========================================== */

const checkButton = document.getElementById("checkCrowns");

const result = document.getElementById("crownResult");

checkButton?.addEventListener("click",()=>{

const phone=document.getElementById("customerPhone").value.trim();

if(phone===""){

alert("Please enter your mobile number.");

return;

}

/* Google Sheets integration comes later */

result.innerHTML=`

<h3>

👑 Current Crowns

</h3>

<h1>

0

</h1>

<p>

No Crown record found.

Once Google Sheets is connected, your Crown balance will appear here automatically.

</p>

`;

});

/* Reward Calculator */

function calculateCrowns(amount){

return Math.floor(amount/400);

}

/* Reward Status */

function rewardStatus(crowns){

if(crowns>=50){

return{

title:"💎 Elite Member",

reward:"₹2999 Discount"

};

}

if(crowns>=35){

return{

title:"🥇 Platinum",

reward:"₹2000 Discount"

};

}

if(crowns>=20){

return{

title:"🥈 Gold",

reward:"₹1000 Discount"

};

}

if(crowns>=10){

return{

title:"🥉 Silver",

reward:"₹450 Discount"

};

}

if(crowns>=5){

return{

title:"⭐ Starter",

reward:"₹200 Discount"

};

}

return{

title:"New Member",

reward:"Keep Shopping"

};

}
