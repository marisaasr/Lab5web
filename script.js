// Latihan 5: Pemilihan Menu menggunakan Switch Case

let pilihan = prompt(
    "Pilih menu makanan:\n" +
    "1. Nasi Goreng\n" +
    "2. Mie Ayam\n" +
    "3. Bakso"
);

switch (pilihan) {
    case "1":
        alert("Kamu memilih Nasi Goreng");
        break;

    case "2":
        alert("Kamu memilih Mie Ayam");
        break;

    case "3":
        alert("Kamu memilih Bakso");
        break;

    default:
        alert("Pilihan tidak tersedia");
}