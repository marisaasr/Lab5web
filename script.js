// Eksperimen 1: Operasi Aritmetika

function hitung(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", a / b);
}

const angka1 = Number(prompt("Masukkan angka pertama:"));
const angka2 = Number(prompt("Masukkan angka kedua:"));

hitung(angka1, angka2);