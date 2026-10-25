// Eksperimen: Menampilkan dan Menyembunyikan Elemen

const teks = document.getElementById("teks");
const tombol = document.getElementById("tombol");

tombol.addEventListener("click", function() {
    if (teks.style.display === "none") {
        teks.style.display = "block";
        tombol.textContent = "Sembunyikan";
    } else {
        teks.style.display = "none";
        tombol.textContent = "Tampilkan";
    }
});