function isStrongPassword(password) {
    if (password.length < 8) {
        alert("Password is too short! (ಥ﹏ಥ)");
        return false;
    } else if (password.includes("password")) {
        alert("Password should not contain the word 'password'! (ಥ﹏ಥ)");
        return false;
    } else if (!/[A-Z]/.test(password)) {
        alert("Password should contain at least one uppercase letter! (ಥ﹏ಥ)");
        return false;
    }
    alert("Password is strong!!! ੭ˊᵕˋ੭✰ﾟ");
    return true;
}
document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("login");
    if (!link) {
        console.error("Link with ID 'login' not found.");
        return;
    }
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        isStrongPassword(document.getElementById("password").value);
    });
});