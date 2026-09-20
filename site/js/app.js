document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("pret");

  const formulaire = document.querySelector(".formulaire-contact");
  const etatFormulaire = document.querySelector(".etat-formulaire");

  if (!formulaire || !etatFormulaire) {
    return;
  }

  formulaire.addEventListener("submit", (event) => {
    if (!formulaire.checkValidity()) {
      event.preventDefault();
      etatFormulaire.textContent = "Veuillez remplir tous les champs obligatoires.";
      formulaire.reportValidity();
      return;
    }

    etatFormulaire.textContent = "Votre message est prêt à être envoyé.";
  });
});
