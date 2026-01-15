# Microservices E-Commerce Architecture 🚀

Proyek ini adalah implementasi sederhana dari arsitektur Microservices menggunakan Node.js dan Express. Sistem ini mendemonstrasikan komunikasi antar layanan melalui API Gateway.

**Identitas Pengembang:**
* **Nama:** Ivan Dwika Bagaskara (Hujan / Rain)
* **NIM:** 230104040205
* **Kelas:** A

## 🏗️ Arsitektur Service

Berikut adalah desain arsitektur sistem yang dibangun dalam proyek ini:

![Diagram Arsitektur Microservices](./assets/diagram-arsitektur.jpg)

Sistem ini terdiri dari 5 komponen utama:

1.  **API Gateway (Port 3000):** Pintu masuk utama, menangani routing dan autentikasi.
2.  **Auth Service (Port 4001):** Menangani login user (JWT).
3.  **Product Service (Port 5001):** Menyediakan data produk.
4.  **Order Service (Port 5002):** Logika pemesanan & kalkulasi harga.
5.  **Notification Service (Port 5003):** Menangani pesan notifikasi order.

## 🛠️ Prasyarat

* Node.js (v14 atau lebih baru)
* NPM
* Postman (untuk testing)

## ⚙️ Cara Install & Konfigurasi

1.  **Clone Repository** ini.
2.  **Install Dependencies** untuk setiap folder service:
    ```bash
    cd api-gateway && npm install
    cd ../auth-service && npm install
    cd ../product-service && npm install
    cd ../order-service && npm install
    cd ../notification-service && npm install
    ```
3.  **Konfigurasi .env (PENTING)**
    Pastikan file `.env` di `api-gateway` dan `order-service` menggunakan IP `127.0.0.1` untuk menghindari masalah timeout pada Windows.

    Contoh `.env` pada API Gateway:
    ```env
    PORT=3000
    AUTH_URL=[http://127.0.0.1:4001](http://127.0.0.1:4001)
    PRODUCT_URL=[http://127.0.0.1:5001](http://127.0.0.1:5001)
    ORDER_URL=[http://127.0.0.1:5002](http://127.0.0.1:5002)
    NOTIF_URL=[http://127.0.0.1:5003](http://127.0.0.1:5003)
    ```

## 🚀 Cara Menjalankan Aplikasi

Buka 5 terminal berbeda dan jalankan perintah berikut secara bersamaan:

1.  **Terminal 1 (Auth):**
    `cd auth-service && npm run dev`
2.  **Terminal 2 (Product):**
    `cd product-service && npm run dev`
3.  **Terminal 3 (Notification):**
    `cd notification-service && npm run dev`
4.  **Terminal 4 (Order):**
    `cd order-service && npm run dev`
5.  **Terminal 5 (Gateway - Jalankan Terakhir):**
    `cd api-gateway && npm run dev`

## 🧪 Pengujian API (Postman)

Gunakan **Token Bearer** yang didapat dari login untuk mengakses endpoint lain.

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| `POST` | `/auth/login` | Login user & dapatkan Token |
| `GET` | `/api/products` | Lihat daftar produk |
| `POST` | `/api/orders` | Buat pesanan baru (Payload: `productId`, `quantity`) |
| `GET` | `/api/notifications` | Cek notifikasi pesanan masuk |

---
*Untuk Memenuhi Tugas Praktikum 3 Web Service Engineering*