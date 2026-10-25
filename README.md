# Praktikum Pemrograman Web — Lab5Web

## 1. Deskripsi Proyek

Repositori ini berisi hasil praktikum mata kuliah Pemrograman Web. Praktikum ini membahas dasar-dasar JavaScript dan penerapannya pada halaman web menggunakan HTML.

Materi yang dipelajari meliputi pengenalan JavaScript, dialog interaktif, fungsi, operasi aritmetika, percabangan, pemilihan kondisi, pengolahan input, manipulasi DOM, dan validasi form.

Repositori ini juga digunakan untuk menyimpan hasil pengerjaan latihan, eksperimen mandiri, dan mini project menggunakan Git dan GitHub.

## 2. Tujuan Praktikum

Tujuan praktikum ini adalah:

- Memahami dasar-dasar JavaScript.
- Memahami penggunaan variabel, fungsi, dan operator aritmetika.
- Menerapkan percabangan dan pemilihan kondisi.
- Mengolah input dari pengguna.
- Memahami manipulasi DOM pada halaman web.
- Membuat program sederhana menggunakan JavaScript.
- Menerapkan validasi form.
- Menggunakan Git dan GitHub untuk menyimpan serta mengelola perubahan kode.

## 3. Teknologi dan Tools

- **HTML5:** Membuat struktur halaman web.
- **JavaScript:** Menambahkan logika dan interaksi pada halaman web.
- **Visual Studio Code:** Menulis dan mengedit kode program.
- **Web Browser:** Menjalankan dan menguji program.
- **Git:** Mengelola versi kode program.
- **GitHub:** Menyimpan repositori secara online.

## 4. Struktur File

```text
Lab5Web/
├── index.html
├── script.js
├── README.md
└── screenshots/
```

Keterangan:

- `index.html`: Berisi struktur halaman web.
- `script.js`: Berisi kode JavaScript untuk latihan dan eksperimen.
- `README.md`: Berisi dokumentasi praktikum.
- `screenshots/`: Digunakan untuk menyimpan screenshot hasil praktikum.

Folder `screenshots/` dapat ditambahkan setelah dokumentasi hasil praktikum selesai dikumpulkan.

## 5. Daftar Praktikum

### A. Latihan

1. **Pengenalan JavaScript**  
   Mempelajari cara menambahkan dan menjalankan JavaScript pada halaman HTML.

2. **Alert dan Prompt**  
   Mempelajari cara menampilkan pesan dan menerima input dari pengguna menggunakan dialog.

3. **Function dan Operasi Aritmetika**  
   Mempelajari pembuatan fungsi dan penerapan operasi aritmetika.

4. **Percabangan If-Else**  
   Menggunakan kondisi untuk menentukan tindakan berdasarkan hasil evaluasi suatu ekspresi.

5. **Pemilihan Menu dengan Switch-Case**  
   Menggunakan `switch-case` untuk menjalankan perintah berdasarkan pilihan pengguna.

6. **Form Bilangan Genap atau Ganjil**  
   Membuat program untuk menentukan apakah angka yang dimasukkan termasuk bilangan genap atau ganjil.

7. **Mengubah Warna Halaman**  
   Mempelajari cara mengubah warna halaman web menggunakan JavaScript.

8. **DOM dan Checkbox Menu Makanan**  
   Mempelajari interaksi dengan elemen HTML menggunakan DOM dan checkbox.

### B. Mini Project

**Kalkulator Nilai Mahasiswa**

Mini project ini menerapkan konsep JavaScript untuk mengolah nilai mahasiswa berdasarkan input yang diberikan.

### C. Eksperimen Mandiri

Eksperimen mandiri dikerjakan sesuai instruksi dan nomor yang tercantum dalam modul praktikum.

Bagian ini bertujuan memperdalam pemahaman tentang JavaScript melalui pengujian dan pengembangan program secara mandiri.

## 6. Pertanyaan dan Tugas

### 1. Jelaskan perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent/innerHTML`.

- **`console.log()`** digunakan untuk menampilkan informasi pada Console browser. Biasanya digunakan untuk memeriksa nilai variabel atau membantu proses debugging.
- **`alert()`** digunakan untuk menampilkan pesan dalam kotak dialog kepada pengguna.
- **`prompt()`** digunakan untuk meminta input dari pengguna melalui kotak dialog. Hasil input biasanya berupa string atau `null` jika dibatalkan.
- **`textContent`** digunakan untuk membaca atau mengubah teks pada elemen HTML.
- **`innerHTML`** digunakan untuk membaca atau mengubah isi HTML di dalam suatu elemen.

Contoh:

```javascript
console.log("Halo dunia!");

alert("Selamat datang!");

let nama = prompt("Masukkan nama:");

document.getElementById("hasil").textContent = nama;
```

Perbedaan utama `textContent` dan `innerHTML` adalah `textContent` memperlakukan isi sebagai teks, sedangkan `innerHTML` dapat membaca atau membuat elemen HTML. Oleh karena itu, input pengguna tidak boleh langsung dimasukkan ke `innerHTML` tanpa penanganan yang aman.

### 2. Apa perbedaan `let` dan `const`? Berikan contoh.

`let` digunakan untuk membuat variabel yang nilainya dapat diubah, sedangkan `const` digunakan untuk membuat variabel yang tidak dapat ditugaskan ulang setelah diinisialisasi.

Contoh:

```javascript
let umur = 20;
umur = 21;

const nama = "Marisa";

console.log(umur);
console.log(nama);
```

Pada contoh tersebut, nilai `umur` dapat diubah menjadi `21`, sedangkan variabel `nama` tidak dapat ditugaskan ulang.

Catatan: Jika `const` berisi objek atau array, properti atau isinya masih dapat diubah meskipun variabelnya tidak dapat ditugaskan ulang.

### 3. Apa perbedaan operator `==` dan `===`?

Operator `==` membandingkan nilai dengan memungkinkan konversi tipe data, sedangkan operator `===` membandingkan nilai sekaligus tipe datanya tanpa melakukan konversi tipe secara otomatis.

Contoh:

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

Pada contoh tersebut, `5 == "5"` menghasilkan `true` karena nilai dibandingkan setelah konversi tipe. Sementara itu, `5 === "5"` menghasilkan `false` karena angka `5` dan string `"5"` memiliki tipe data berbeda.

Operator `===` umumnya lebih disarankan untuk menghindari hasil perbandingan yang tidak diinginkan akibat konversi tipe data.

### 4. Jelaskan fungsi `if-else` dan `switch`. Kapan masing-masing dapat digunakan?

**`if-else`** digunakan untuk menjalankan perintah berdasarkan kondisi yang bernilai benar atau salah. Struktur ini cocok untuk memeriksa rentang nilai, beberapa kondisi, atau ekspresi logika.

Contoh:

```javascript
let nilai = 80;

if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Tidak lulus");
}
```

**`switch`** digunakan untuk memilih salah satu tindakan berdasarkan nilai suatu ekspresi yang dibandingkan dengan beberapa pilihan menggunakan pencocokan ketat.

Contoh:

```javascript
let menu = 2;

switch (menu) {
    case 1:
        console.log("Menu makanan");
        break;
    case 2:
        console.log("Menu minuman");
        break;
    default:
        console.log("Pilihan tidak tersedia");
}
```

`if-else` lebih sesuai untuk kondisi kompleks atau rentang nilai, sedangkan `switch` cocok untuk pilihan dengan beberapa nilai tertentu.

### 5. Apa fungsi parameter dan `return` dalam function?

**Parameter** adalah variabel yang digunakan untuk menerima data ketika fungsi dipanggil. Parameter membuat fungsi dapat digunakan dengan input yang berbeda.

**`return`** digunakan untuk mengembalikan hasil dari fungsi kepada bagian program yang memanggilnya. Setelah `return` dijalankan, fungsi selesai pada bagian tersebut.

Contoh:

```javascript
function tambah(a, b) {
    return a + b;
}

let hasil = tambah(5, 3);

console.log(hasil);
```

Pada contoh tersebut, `a` dan `b` merupakan parameter. Fungsi `tambah()` mengembalikan hasil penjumlahan melalui `return`, sehingga nilai `hasil` adalah `8`.

### 6. Bagaimana JavaScript memilih elemen HTML menggunakan `document.getElementById()`?

`document.getElementById()` digunakan untuk memilih elemen HTML berdasarkan atribut `id` yang dimilikinya.

Contoh HTML:

```html
<p id="pesan">Teks awal</p>
```

Contoh JavaScript:

```javascript
document.getElementById("pesan").textContent = "Teks berubah";
```

JavaScript mencari elemen dengan `id="pesan"`, kemudian mengubah teksnya menjadi "Teks berubah".

Jika elemen dengan ID tersebut tidak ditemukan, hasil pemanggilan `getElementById()` adalah `null`. Karena itu, elemen harus tersedia ketika kode dijalankan.

### 7. Buat script untuk memvalidasi form agar nama tidak kosong dan nilai berada pada rentang 0–100.

Validasi dilakukan untuk memastikan nama telah diisi dan nilai yang dimasukkan berupa angka dalam rentang 0 sampai 100.

Contoh implementasi lengkap:

**File `index.html`**

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validasi Form Mahasiswa</title>
</head>
<body>
    <h2>Form Data Mahasiswa</h2>

    <form id="formMahasiswa">
        <label for="nama">Nama:</label>
        <input type="text" id="nama" name="nama">
        <br><br>

        <label for="nilai">Nilai (0–100):</label>
        <input type="number" id="nilai" name="nilai" min="0" max="100" step="any">
        <br><br>

        <button type="submit">Periksa</button>
    </form>

    <p id="hasil"></p>

    <script src="script.js"></script>
</body>
</html>
```

**File `script.js`**

```javascript
document.getElementById("formMahasiswa").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const nilaiInput = document.getElementById("nilai").value;
    const hasil = document.getElementById("hasil");

    if (nama === "") {
        hasil.textContent = "Nama tidak boleh kosong.";
        return;
    }

    if (nilaiInput.trim() === "") {
        hasil.textContent = "Nilai harus diisi.";
        return;
    }

    const nilai = Number(nilaiInput);

    if (!Number.isFinite(nilai) || nilai < 0 || nilai > 100) {
        hasil.textContent = "Nilai harus berupa angka dari 0 sampai 100.";
        return;
    }

    hasil.textContent = "Data valid. Nama: " + nama + ", Nilai: " + nilai;
});
```

**Penjelasan:**

1. `addEventListener("submit", ...)` menjalankan validasi ketika form dikirim.
2. `event.preventDefault()` mencegah form dikirim secara langsung sebelum validasi selesai.
3. `trim()` menghapus spasi di awal dan akhir nama sehingga input yang hanya berisi spasi dianggap kosong.
4. `Number()` mengubah input nilai menjadi angka.
5. `Number.isFinite()` memastikan hasil konversi merupakan angka yang valid.
6. Kondisi `nilai < 0 || nilai > 100` menolak nilai di luar rentang yang ditentukan.
7. `textContent` menampilkan hasil validasi kepada pengguna.

Form dinyatakan valid jika nama telah diisi dan nilai berada dalam rentang 0 sampai 100.

## 7. Cara Menjalankan Program

1. Buka folder `Lab5Web` menggunakan Visual Studio Code.
2. Buka file `index.html` dan `script.js`.
3. Jalankan `index.html` menggunakan web browser atau ekstensi Live Server.
4. Lakukan pengujian sesuai latihan yang ingin dijalankan.
5. Periksa hasil program pada halaman web atau Console browser.

**Catatan:** Karena file `index.html` dan `script.js` digunakan bergantian untuk beberapa latihan, sesuaikan kode yang sedang aktif dengan latihan yang ingin dijalankan. Untuk menjalankan contoh validasi pada soal nomor 7, gunakan kode yang tercantum pada bagian tersebut.

## 8. Penggunaan Git dan GitHub

Git dan GitHub digunakan untuk menyimpan kode program serta mengelola riwayat perubahan.

Perintah dasar yang digunakan:

```bash
git add index.html script.js README.md
git commit -m "Memperbarui praktikum dan dokumentasi"
git push origin main
```

Keterangan:

- `git add`: Memasukkan perubahan file ke tahap staging.
- `git commit`: Menyimpan perubahan ke riwayat Git.
- `git push`: Mengirim commit ke repositori GitHub.

Setiap latihan dapat disimpan menggunakan commit dengan pesan yang sesuai. Riwayat commit membantu melihat perubahan kode yang telah disimpan sebelumnya.

## 9. Dokumentasi Hasil Praktikum

Screenshot hasil praktikum dapat disimpan dalam folder `screenshots/`.

Dokumentasi sebaiknya menunjukkan:

- Tampilan program ketika dijalankan.
- Input yang digunakan saat pengujian.
- Output atau hasil program.
- Hasil pengujian validasi form.
- Tampilan lain yang diminta dalam modul praktikum.

Screenshot digunakan sebagai bukti bahwa program telah dijalankan dan diuji.

## 10. Kesimpulan

Melalui praktikum ini, mahasiswa mempelajari penggunaan JavaScript untuk membangun halaman web yang interaktif. Materi yang dipelajari meliputi dialog interaktif, variabel, fungsi, operator, percabangan, pemilihan kondisi, manipulasi DOM, serta validasi form.

Praktikum juga memberikan pengalaman menggunakan Git dan GitHub untuk menyimpan hasil pengerjaan dan mengelola riwayat perubahan kode.

Materi ini menjadi dasar untuk mempelajari pengembangan web yang lebih kompleks.