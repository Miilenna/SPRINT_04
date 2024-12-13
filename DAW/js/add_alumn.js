// Evento para manejar el envío del formulario
document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página
  
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const nombre_usuario = document.getElementById("usuario").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();
    const email = document.getElementById("email").value.trim();
    const grupo = document.getElementById("groups").value.trim();

    // Crear el objeto con los datos del alumno (sin campos automáticos)
    const studentData = { nombre, apellido, nombre_usuario, dni, contraseña, email, grupo };
  
    // Validar que todos los campos estén completos
    if (!nombre || !apellido || !nombre_usuario || !dni || !contraseña || !email || !grupo) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }
  
    // Enviar los datos al servidor
    fetch("http://localhost:8000/user/addAlumn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al guardar los datos en el servidor.");
        }
        return response.json();
      })
      .then((data) => {
        alert("Alumno guardado exitosamente.");
        // Opcional: Reiniciar el formulario después de un éxito
        document.getElementById("studentForm").reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un problema al guardar los datos. Inténtalo de nuevo.");
      });
  });
  
  // Evento para manejar el botón de cancelar
  document.getElementById("cancelButton").addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas cancelar?")) {
      // Reinicia los campos del formulario
      document.getElementById("studentForm").reset();
    }
  });
