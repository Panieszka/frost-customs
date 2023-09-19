const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const car = document.getElementById("car").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const data = new FormData();
    data.append("name", name);
    data.append("surname", surname);
    data.append("email", email);
    data.append("car", car);
    data.append("subject", subject);
    data.append("message", message);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send-email.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Email został wysłany");
        } else {
            console.log("Wystąpił błąd podczas wysyłania emaila");
        }
    };
    xhr.send(data);
});

