# Aplikasi REST API DevSecOps (`DevSecOps_P5_0110225162`)

## 1. Nama & Fungsi Aplikasi
- **Nama Aplikasi**: DevSecOps Demo Calculator & Health Check API
- **Fungsi Aplikasi**: Menyediakan layanan REST API sederhana untuk pengujian perhitungan dasar (penjumlahan dan pengurangan) serta pemeriksaan status server melalui HTTP endpoint.

## 2. Bahasa & Framework
- **Bahasa Pemrograman**: JavaScript (Node.js v18)
- **Framework Web**: Express.js
- **Testing Framework**: Jest & Supertest

## 3. Cara Menjalankan Aplikasi
1. Install dependensi:
   ```bash
   npm install

## 4. Overview Pipeline CI/CD DevSecOps
Pipeline diimplementasikan secara otomatis menggunakan **GitHub Actions** melalui file konfigurasi `.github/workflows/devsecops.yml` dengan alur kerja :
- **Triggers**: Terpemicu otomatis setiap kali ada aktivitas `push` ke branch `main` atau pembuatan `pull_request` ke branch `main`.
- **Job 1 (`build`)**: Berjalan di runner `ubuntu-latest` untuk mengunduh pustaka dependensi (`npm install`) dan mengeksekusi pengujian unit otomatis (`npm test`).
- **Job 2 (`sast-scan`)**: Berjalan di runner `ubuntu-latest` secara sekuensial setelah job `build` selesai (`needs: build`). Job ini menjalankan *Static Application Security Testing* (SAST) menggunakan **GitHub CodeQL** untuk memindai basis kode dari potensi celah keamanan (*vulnerability*) dan memberikan *Quality Gate* secara otomatis.
