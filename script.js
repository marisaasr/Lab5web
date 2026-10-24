// Latihan 3: Function dan Operasi Aritmetika

function hitung(a, b) {
    let tambah = a + b;
    let kurang = a - b;
    let kali = a * b;
    let bagi = a / b;

    console.log("Penjumlahan: " + tambah);
    console.log("Pengurangan: " + kurang);
    console.log("Perkalian: " + kali);
    console.log("Pembagian: " + bagi);
}

let angka1 = Number(prompt("Masukkan angka pertama:"));
let angka2 = Number(prompt("Masukkan angka kedua:"));

hitung(angka1, angka2);