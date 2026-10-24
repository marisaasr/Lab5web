let pilihan = prompt(
    "Pilih menu:\n1. Nasi Goreng\n2. Mie Goreng\n3. Bakso"
);

switch (pilihan) {
    case "1":
        alert("Kamu memilih Nasi Goreng");
        break;
    case "2":
        alert("Kamu memilih Mie Goreng");
        break;
    case "3":
        alert("Kamu memilih Bakso");
        break;
    default:
        alert("Pilihan tidak tersedia");
}