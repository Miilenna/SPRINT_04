document.querySelector(".login-button").addEventListener("click", function(event) {
    event.preventDefault();

    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    fetch(`http://localhost:8080/users/getUsername/${username}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Invalid credentials");
        }
        return response.text(); 
    })
    .then(text => {
        console.log("Raw response text:", text); 
        try {
            const data = JSON.parse(text);
            if (data.password !== password) {
                throw new Error("Invalid credentials");
            }
            alert("Login successful!");
            if (data.role === "admin") {
                window.location.href = "./admin.html";
            } else if (data.role === "prof") {
                window.location.href = "./profesor.html";
            } else {
                window.location.href = "./alumno.html";
            }
        } catch (e) {
            console.error("Error parsing JSON:", e);
            alert("Error en las credenciales");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error en las credenciales");
    });
});