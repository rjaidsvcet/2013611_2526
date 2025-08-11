document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("formStatus");

    if (name && email && message) {
        status.textContent = "Message sent successfully!";
        status.style.color = "green";
        this.reset();
    } else {
        status.textContent = "Please fill all fields.";
        status.style.color = "red";
    }
});
