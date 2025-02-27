function showResumeAlert(event) {
    event.preventDefault(); // Prevent the default link action

    // Check if an alert already exists, remove it first
    let existingAlert = document.getElementById("resume-alert");
    if (existingAlert) {
        existingAlert.remove();
    }

    // Create a floating alert div
    let alertBox = document.createElement("div");
    alertBox.id = "resume-alert";
    alertBox.innerText = "If you wish to download my resume, please contact me via e-mail.";
    alertBox.style.position = "fixed";
    alertBox.style.top = "20px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.background = "#333";
    alertBox.style.color = "#fff";
    alertBox.style.padding = "15px 20px";
    alertBox.style.borderRadius = "5px";
    alertBox.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    alertBox.style.zIndex = "9999";
    alertBox.style.opacity = "1";
    alertBox.style.transition = "opacity 0.5s ease-in-out";

    // Append the alert box to the body
    document.body.appendChild(alertBox);

    // Remove the alert after 3 seconds and open the contact page in a new tab
    setTimeout(() => {
        alertBox.style.opacity = "0";
        setTimeout(() => {
            alertBox.remove();
            window.open("../contact/contact.html", "_blank"); // Opens in a new tab
        }, 500);
    }, 3000);
}
