document.addEventListener("DOMContentLoaded", function() {
    const userName = localStorage.getItem("name"); // Recupera el nombre completo
    console.log("Nombre recuperado:", userName); // Para depurar
    if (userName) {
        // Inserta el nombre completo en el <span>
        document.querySelector(".header span").textContent = userName;
    } else {
        alert("No se encontró información del usuario. Inicia sesión nuevamente.");
        window.location.href = "inicio.html"; // Redirigir al login si no hay información
    }

    // Gestionar el cierre de sesión
    document.querySelector(".sidebar .logout").addEventListener("click", function() {
        localStorage.clear(); // Limpia los datos guardados
        window.location.href = "inicio.html"; // Redirige al login
    });
});
