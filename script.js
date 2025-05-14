document.getElementById("reclamoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("reclamoForm").classList.add("hidden");
  document.getElementById("mensajeGracias").classList.remove("hidden");
});