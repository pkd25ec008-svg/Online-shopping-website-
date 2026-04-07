function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Form submitted successfully");
    return true;
}
