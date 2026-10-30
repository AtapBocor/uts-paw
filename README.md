# Ujian Tengah Semester IF25-22014 Pengembangan Aplikasi Web


## Langkah singkat

1. Fork repo ini ke akun GitHub kamu.
2. Di fork: tab **Actions**, aktifkan workflow. Lalu **Settings → Pages → Source: GitHub Actions**.
3. Clone fork, kerjakan soal di folder `app/`:

   ```bash
   git clone https://github.com/USERNAME/uts-paw.git
   cd uts-paw/app
   npm install
   npm run dev
   ```

4. Cek perkiraan nilai kapan saja dengan `npm run cek` di folder `app/`.
5. Push ke `main`. Aplikasi tayang di `https://USERNAME.github.io/uts-paw/` dan ringkasan rubrik muncul di tab Actions (workflow **Build dan Deploy**).

Panduan lengkap beserta solusi kendala umum ada di halaman [Panduan](https://uts-paw.mhabibalgifari.web.id/panduan).

## Isi repo

| Folder | Isi | Boleh diubah mahasiswa |
|---|---|---|
| `app/` | Starter aplikasi React yang kamu kerjakan | Ya |
| `portal/` | Situs soal dan panduan (domain ujian) | Tidak |
| `grader/` | Pemeriksa rubrik otomatis | Tidak |
| `shared/uts.json` | Jadwal kelas, tema, rubrik, dan pemeriksaan integritas | Tidak |
| `shared/contoh/` | Contoh kode yang ditampilkan di halaman Contoh Kode | Tidak |
| `.github/workflows/` | Build, deploy, dan cek otomatis | Tidak |

Penilaian akhir selalu memakai `grader/` dan `shared/` versi repo induk, jadi mengubahnya di fork tidak berpengaruh.

## README milikmu

Ganti seluruh isi berkas ini dengan dokumentasi aplikasimu (butir rubrik A4). Kerangka berikut boleh dipakai:

```markdown
# Nama Aplikasi

Nama: M. Hanif
NIM: 124140145
Kelas: RA
Tema: Destinasi Wisata Lampung
Deployment: https://AtapBocor.github.io/uts-paw/

![Tangkapan layar beranda](Docs/Screenshot%202026-10-30%20225027.png)
![Tangkapan layar Koleksi](Docs/Screenshot%202026-10-30%20232009.png)
![Tangkapan layar Tambah ](Docs/Screenshot%202026-10-30%20232009.png)
![Tangkapan layar Statistik](Docs/Screenshot%202026-10-30%20232026.png)
![Tangkapan layar Tentang](Docs/Screenshot%202026-10-30%20232032.png)

## Fitur

- Beranda untuk menampilkan halaman utama aplikasi.
- Koleksi untuk menampilkan daftar destinasi wisata Lampung.
- Pencarian untuk mencari destinasi wisata.
- Detail untuk melihat informasi lengkap destinasi wisata.
- Tambah untuk menambahkan destinasi wisata baru.
- Hapus untuk menghapus destinasi wisata dari koleksi.
- Statistik untuk menampilkan informasi jumlah koleksi wisata.
- Tentang untuk menampilkan informasi aplikasi.

## Menjalankan secara lokal

cd app
npm install
npm run dev

## Konsep React yang dipakai

- Component: Membagi aplikasi menjadi beberapa komponen.
- Props: Mengirimkan data antar komponen.
- useState: Mengelola perubahan state.
- useEffect: Menangani efek samping pada aplikasi.
- React Router: Mengatur navigasi antarhalaman.
- Context API: Mengelola data koleksi wisata.

LocalStorage: Menyimpan data koleksi pada browser.
```
