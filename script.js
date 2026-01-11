const zadaneHeslo = document.getElementById("password")
const vyslednaZprava = document.getElementById("text")

zadaneHeslo.addEventListener("input", function() {
  const delkaHesla = this.value.length

  if (delkaHesla >= 8) {
    vyslednaZprava.textContent = "Heslo je dostatečně dlouhé"
    vyslednaZprava.style.color = "green"
  } else {
    vyslednaZprava.textContent = "Heslo není dostatečně dlouhé"
    vyslednaZprava.style.color = "red"
  }
})

