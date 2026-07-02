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
let sessions = [];

// ===========================
// Feature 2 - Session Planner
// ===========================

const sessionInput = document.getElementById("sessionInput");
const addSessionBtn = document.getElementById("addSessionBtn");
const sessionList = document.getElementById("sessionList");

function displaySession(sessionName) {

    const sessionItem = document.createElement("div");
    sessionItem.className = "card";

    const sessionText = document.createElement("span");
    sessionText.textContent = sessionName;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function () {

        sessionItem.remove();

        sessions = sessions.filter(function(item) {
            return item !== sessionName;
        });

        localStorage.setItem("sessions", JSON.stringify(sessions));

    });

    sessionItem.appendChild(sessionText);
    sessionItem.appendChild(removeBtn);

    sessionList.appendChild(sessionItem);

}

addSessionBtn.addEventListener("click", function () {

    const sessionName = sessionInput.value;

    if (sessionName.trim() === "") {
        alert("Please enter a session.");
        return;
    }

    displaySession(sessionName);

    sessions.push(sessionName);

    localStorage.setItem("sessions", JSON.stringify(sessions));

    sessionInput.value = "";

});
// ===========================
// Feature 3 - Contact Form Validation
// ===========================

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {

        formFeedback.textContent = "Please fill in all fields.";
        formFeedback.style.color = "red";

        return;
    }

    formFeedback.textContent = "Message sent successfully!";
    formFeedback.style.color = "green";

    contactForm.reset();

});
// Load saved sessions when the page loads
const savedSessions = JSON.parse(localStorage.getItem("sessions"));

if (savedSessions) {

    sessions = savedSessions;

    sessions.forEach(function(session) {
        displaySession(session);
    });

}
// ===========================
// Feature 5 - Gallery Interaction
// ===========================

const galleryImages = document.querySelectorAll(".gallery-container img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {
        alert("You selected a Toby Visuals portfolio image.");
    });

});