document.getElementById("contactForm").addEventListener("submit", function(event) {
  
    event.preventDefault();
    var firstName = document.getElementById("name").value;
    var lastName = document.getElementById("surname").value;
    var email = document.getElementById("email").value;

    var nameRegex = /^(?=.*[A-Z])(?=.*\d{3,}).+$/;

    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
        alert("All fields are required");
        return;
    }


    if (!nameRegex.test(firstName)) {
        alert("First name must contain at least one uppercase letter and at least 3 digits");
        return;
    }

    alert("Form submitted successfully!"); 
});
