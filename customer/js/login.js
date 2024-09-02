function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for valid email format
    if (email === "admin" && password === "pass") {
        alert("Admin login successful!");
        window.location.href = "../../admin/admin.html";
        return true;
    } else if (email === "user" && password === "password") {
        alert("User login successful!");
        window.location.href = "../html/custlogout.html";
        return true;
    }
    if (email === "") {
        alert("Email field cannot be empty.");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password === "") {
        alert("Password field cannot be empty.");
        return false;
    }

    alert("Logged in successfully!");
    window.location.href = "../html/custlogout.html";
    return true;
}
