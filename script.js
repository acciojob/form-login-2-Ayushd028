function submit() { 
    let firstName = document.querySelector("#firstName").value.trim();
    let lastName = document.querySelector("#lastName").value.trim();
    let phone = document.querySelector("#phone").value.trim();
    let email = document.querySelector("#email").value.trim();


    if (!firstName || !lastName ||!phone ||!email) {
        alert("Please fill in all fields.");
        return;
    }

    let re = /^[a-zA-Z'-]+$/;
    if (!re.test(firstName) || !re.test(lastName)) {
        alert("First and last name can only contain letters.");
        return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let phoneRegex = /^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number in the format +1 (123) 456-7890.");
        return;
    }

    alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`);
}

