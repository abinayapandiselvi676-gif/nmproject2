document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let guests = document.getElementById("guests").value;

    let meal = document.getElementById("meal").value;

    if (name === "" || email === "" || guests === "" || meal === "") {

        document.getElementById("message").innerText =

            "Please fill all details!";

        document.getElementById("message").style.color = "red";

    } 

    else {

        document.getElementById("message").innerText =

            "Table booked successfully!";

        document.getElementById("message").style.color = "green";

    }

});