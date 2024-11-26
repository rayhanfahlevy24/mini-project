function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Pesan Anda telah dikirim!");
});

document.querySelectorAll(".article h3").forEach((title) => {
  title.addEventListener("click", () => {
    alert(`Anda membuka artikel: ${title.textContent}`);
  });
});
