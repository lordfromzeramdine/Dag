function validateForm(event) {
    event.preventDefault();  

    const name = document.forms["Login"]["name"].value;
    const email = document.forms["Login"]["email"].value;
    const password = document.forms["Login"]["password"].value;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    if (password === "") {
        alert("Password must be filled out");
        return false;
    }

   
    window.location.href = "index.html";
    return true;
}