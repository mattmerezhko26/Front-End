function clearForm() {
    document.getElementById("registrationForm").reset();
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var address = document.getElementById("address").value.trim();
    var city = document.getElementById("city").value.trim();
    var postalCode = document.getElementById("postalCode").value.trim();
    var province = document.getElementById("province").value.trim();
    var age = document.getElementById("age").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value.trim();
    alert("Thanks for registering with our website, your customer record was created successfully.");
});