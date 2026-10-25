// Eksperimen 4: Validasi Form

const form = document.getElementById("formNama");
const nama = document.getElementById("nama");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (nama.value.trim() === "") {
        hasil.textContent = "Nama tidak boleh kosong!";
    } else {
        hasil.textContent = "Halo, " + nama.value.trim() + "!";
    }
});