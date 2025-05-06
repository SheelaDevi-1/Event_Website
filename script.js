document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var eventSelection = document.getElementById("event").value;

     if (!name || !email || !eventSelection) {
        alert("Please fill in all the fields!");
        return;
    }
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
});