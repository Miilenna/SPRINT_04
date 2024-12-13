document.getElementById("recoveryForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página

    const email = document.getElementById("emailInput").value;

    // Realizar una solicitud GET al servidor para verificar el correo
    fetch(`http://localhost:8000/users/checkEmail/${email}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("El correo no existe en la base de datos");
        }
        return response.json(); // Suponemos que el servidor devuelve un JSON
    })
    .then(data => {
        // Si existe, redirige a la página de alumno
        console.log("Correo encontrado:", data);
        alert(`¡Bienvenido ${data.name}! Redirigiendo a la página del alumno.`);
        localStorage.setItem("userName", data.name); // Guardar el nombre del usuario en localStorage
        window.location.href = "alumno.html";
    })
    .catch(error => {
        console.error("Error:", error);
        alert("El correo no está registrado. Por favor, verifica e intenta nuevamente.");
    });
});
