// FORMULARIO
const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensajeExito");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let completo = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        completo = false;
      }
    });

    if (completo) {
      mensaje.textContent = "Mensaje enviado";
      mensaje.style.color = "#ff09a1";
      form.reset();
    } else {
      mensaje.textContent = "Por favor completá todos los campos";
      mensaje.style.color = "red";
    }
  });
}

// =======================
// HOVER CARDS
// =======================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});