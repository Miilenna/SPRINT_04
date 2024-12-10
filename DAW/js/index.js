document.querySelector(".login-button").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    // La solicitud GET no debe tener un body
    fetch(`http://7e2a-85-192-78-20.ngrok-free.app/user/getUsername/${username}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Invalid credentials");
        }
        return response.json();
    })
    .then(data => {
        // Verifica que la contraseña introducida coincida con la almacenada
        if (data.password === password) {
            alert("Login successful!");

            // Redirigir según el rol del usuario
            if (data.rol === "alumn") {
                window.location.href = "/SPRINT_04/DAW/html/alumno.html";
            } else if (data.rol === "prof") {
                window.location.href = "/SPRINT_04/DAW/html/profesor.html";
            } else if (data.rol === "admin") {
                window.location.href = "/SPRINT_04/DAW/html/admin.html";
            } else {
                alert("Rol desconocido");
            }
        } else {
            throw new Error("Invalid password");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error en las credenciales");
    });
});
