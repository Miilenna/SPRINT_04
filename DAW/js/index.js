// URL base de l'API REST
const API_URL = "https://example.com/api"; // Canvia a la teva URL d'API

// Seleccionar elements HTML
const container = document.querySelector(".right-section");

// Funció per obtenir dades de l'API i mostrar-les
async function fetchData() {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) throw new Error("Error en carregar les dades.");
    const data = await response.json();

    // Renderitzar les dades dinàmicament
    renderUsers(data);
  } catch (error) {
    console.error("Error:", error);
    container.innerHTML = `<p class="error">No s'ha pogut carregar la informació.</p>`;
  }
}

// Funció per renderitzar dades
function renderUsers(users) {
  // Neteja el contingut existent
  container.innerHTML = "";

  // Genera HTML dinàmicament per a cada usuari
  users.forEach(user => {
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
    `;
    container.appendChild(userCard);
  });
}

// Cridar la funció en carregar la pàgina
document.addEventListener("DOMContentLoaded", fetchData);
