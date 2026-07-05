/* ==========================================
   LAYORA LOYALTY SYSTEM
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const checkBtn = document.getElementById("checkCrowns");
    const phoneInput = document.getElementById("customerPhone");
    const result = document.getElementById("crownResult");

    if (checkBtn) {
        checkBtn.addEventListener("click", () => {

            const phone = phoneInput.value.trim();

            if (phone === "") {
                alert("Please enter your mobile number.");
                return;
            }

            result.innerHTML = `
                <h3>👑 Current Crowns</h3>
                <h1>0</h1>
                <p>
                    Your account is not connected yet.
                    Google Sheets integration will be added soon.
                </p>
            `;
        });
    }

});

function calculateCrowns(amount) {
    return Math.floor(amount / 400);
}

function rewardStatus(crowns) {

    if (crowns >= 50) {
        return {
            title: "💎 Elite Member",
            reward: "₹2999 Discount"
        };
    }

    if (crowns >= 35) {
        return {
            title: "🥇 Platinum",
            reward: "₹2000 Discount"
        };
    }

    if (crowns >= 20) {
        return {
            title: "🥈 Gold",
            reward: "₹1000 Discount"
        };
    }

    if (crowns >= 10) {
        return {
            title: "🥉 Silver",
            reward: "₹450 Discount"
        };
    }

    if (crowns >= 5) {
        return {
            title: "⭐ Starter",
            reward: "₹200 Discount"
        };
    }

    return {
        title: "New Member",
        reward: "Keep Shopping"
    };

}

function calculateReward() {

    const amount = Number(document.getElementById("purchaseAmount")?.value);

    if (!amount || amount <= 0) {
        alert("Please enter a valid purchase amount.");
        return;
    }

    const crowns = calculateCrowns(amount);
    const nextTarget = (crowns + 1) * 400;
    const remaining = nextTarget - amount;

    const output = document.getElementById("rewardOutput");

    if (output) {
        output.innerHTML = `
            <h3>👑 Crowns Earned: ${crowns}</h3>
            <p>Spend ₹${remaining} more to earn your next Crown.</p>
        `;
    }

}
