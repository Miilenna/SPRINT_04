document.querySelector(".login-button").addEventListener("click", function(event) {
    event.preventDefault();

    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    fetch(`http://localhost:8000/users/getUsername/${username}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Invalid credentials");
        }
        return response.json(); // Cambiar a .json() si la respuesta es JSON
    })
    .then(data => {
        console.log(data); // Verifica la estructura del objeto
        if (data.password !== password) {
            throw new Error("Invalid credentials");
        }
        // Guardar el nombre del usuario (usa 'username' en lugar de 'name')
        localStorage.setItem("name", data.username); // Cambia a 'data.username'
        
        // Redirigir según el rol
        if (data.rol === "admin") {
            window.location.href = "admin.html";
        } else if (data.rol === "prof") {
            window.location.href = "profesor.html";
        } else {
            window.location.href = "alumno.html";
        }
    })    
    .catch(error => {
        console.error("Error:", error);
        alert("Error en las credenciales");
    });
});
