document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page
    
    // Get the values of the form fields
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const nombre_usuario = document.getElementById("usuario").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();
    const email = document.getElementById("email").value.trim();
    const grupo = document.getElementById("groups").value.trim();
  
    // Create the student data object
    const studentData = { nombre, apellido, nombre_usuario, dni, contraseña, email, grupo };
  
    // Validate that all fields are filled in
    if (!nombre || !apellido || !nombre_usuario || !dni || !contraseña || !email || !grupo) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }
  
    // Send the data to the server
    fetch("http://localhost:8000/user/addProf", { // Replace with your backend API URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData), // Send the student data as JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al guardar los datos en el servidor.");
        }
        return response.json();
      })
      .then((data) => {
        alert("Profesor guardado exitosamente.");
        // Optional: Reset the form after successful submission
        document.getElementById("studentForm").reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un problema al guardar los datos. Inténtalo de nuevo.");
      });
  });
  
  // Handle the cancel button
  document.getElementById("cancelButton").addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas cancelar?")) {
      // Reset the form if the user confirms canceling
      document.getElementById("studentForm").reset();
    }
  });
  