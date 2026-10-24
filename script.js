// Mini Project: Kalkulator Nilai Mahasiswa

const form = document.getElementById("formNilai");
const hasil = document.getElementById("hasil");

function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function prosesNilai(event) {
    event.preventDefault();

    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    // Validasi nilai
    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.textContent = "Error: Semua nilai harus berada pada rentang 0–100.";
        return;
    }

    const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(nilaiAkhir);
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum Lulus";

    hasil.innerHTML = `
        <h2>Hasil Perhitungan</h2>
        <p>Nilai Tugas: ${tugas}</p>
        <p>Nilai UTS: ${uts}</p>
        <p>Nilai UAS: ${uas}</p>
        <p>Nilai Akhir: ${nilaiAkhir.toFixed(2)}</p>
        <p>Predikat: ${predikat}</p>
        <p>Status: ${status}</p>
    `;
}

form.addEventListener("submit", prosesNilai);

form.addEventListener("reset", function() {
    hasil.textContent = "";
});