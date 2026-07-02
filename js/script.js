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