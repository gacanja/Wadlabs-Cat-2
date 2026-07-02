// ===========================
// Feature 1 - Dynamic Services
// ===========================

const services = [
    {
        name: "Event Photography",
        price: "KSh 15,000"
    },
    {
        name: "Portrait Sessions",
        price: "KSh 8,000"
    },
    {
        name: "Content Creation",
        price: "KSh 12,000"
    }
];

const servicesContainer = document.getElementById("servicesContainer");

services.forEach(function(service) {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h3>${service.name}</h3>
        <p>${service.price}</p>
    `;

    servicesContainer.appendChild(card);

});

// ===========================
// Feature 2 - Session Planner
// ===========================

const sessionInput = document.getElementById("sessionInput");
const addSessionBtn = document.getElementById("addSessionBtn");
const sessionList = document.getElementById("sessionList");

addSessionBtn.addEventListener("click", function () {

    const sessionName = sessionInput.value;

    if (sessionName.trim() === "") {
        alert("Please enter a session.");
        return;
    }

    const sessionItem = document.createElement("div");
    sessionItem.className = "card";

    const sessionText = document.createElement("span");
    sessionText.textContent = sessionName;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function () {
        sessionItem.remove();
    });

    sessionItem.appendChild(sessionText);
    sessionItem.appendChild(removeBtn);

    sessionList.appendChild(sessionItem);

    sessionInput.value = "";

});