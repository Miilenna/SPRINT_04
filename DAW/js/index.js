document.querySelector(".login-button").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Invalid credentials");
        }
        return response.json();
    })
    .then(data => {
        alert("Login successful!");
        // Redirigir según el rol del usuario
        if (data.role === "admin") {
            window.location.href = "./admin.html";
        } else if (data.role === "prof") {
            window.location.href = "./profesor.html";
        } else {
            window.location.href = "./alumno.html";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error en las credenciales");
    });
});