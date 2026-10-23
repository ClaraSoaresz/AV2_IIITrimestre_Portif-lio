const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const themeToggle = document.querySelector("#theme-toggle");
const form = document.querySelector("#contact-form");
const feedback = document.querySelector("#feedback");

// Troque "Seu Nome" pelo nome que deseja exibir.
const nome = "Ana Clara Soares";
document.querySelector("#cover-name").textContent = nome;
document.querySelector("#footer-name").textContent = nome;
document.querySelector("#profile-photo").alt = `Foto de apresentação de ${nome}`;
document.title = `Portfólio | ${nome}`;

// Ano automático.
document.querySelector("#year").textContent = new Date().getFullYear();

// Menu para telas pequenas.
menuToggle.addEventListener("click", () => {
  const aberto = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Alternância entre tema claro e escuro.
themeToggle.addEventListener("click", () => {
  const escuro = document.body.classList.toggle("dark-theme");
  themeToggle.textContent = escuro ? "☀" : "◐";
  themeToggle.setAttribute("aria-label", escuro ? "Ativar modo claro" : "Ativar modo escuro");
});

// Valida campos no navegador, sem enviar ou armazenar os dados.
form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    feedback.textContent = "Confira os campos obrigatórios.";
    return;
  }
  feedback.textContent = "Formulário validado! Os dados não foram enviados.";
  form.reset();
});
