// Latihan 6: Form Bilangan Genap atau Ganjil

const form = document.getElementById("formBilangan");
const inputBilangan = document.getElementById("bilangan");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const bilangan = Number(inputBilangan.value);

    if (bilangan % 2 === 0) {
        hasil.textContent = bilangan + " adalah bilangan genap.";
    } else {
        hasil.textContent = bilangan + " adalah bilangan ganjil.";
    }
});