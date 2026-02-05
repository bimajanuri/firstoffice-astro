# FirstOffice - Astro

Platform pencarian dan penjelajahan kantor modern yang dibangun dengan Astro, Tailwind CSS, dan berbagai teknologi web terkini.

## 📋 Deskripsi

FirstOffice adalah website yang memungkinkan pengguna untuk menjelajahi berbagai jenis ruang kantor, termasuk:
- **Serviced Office** - Kantor siap pakai dengan layanan lengkap
- **Virtual Office** - Solusi alamat bisnis tanpa ruang fisik
- **Shell and Core** - Ruang kantor kosong untuk kustomisasi penuh
- **Managed Office** - Kantor yang dikelola dengan fasilitas premium

## 🚀 Fitur Utama

- 🏢 Katalog kantor dengan berbagai kategori
- 🔍 Fitur pencarian dengan fuzzy search menggunakan Fuse.js
- 📱 Desain responsive dan mobile-friendly
- 🎨 UI/UX modern dengan Tailwind CSS
- 🖼️ Galeri gambar dengan Swiper
- ⚡ Performa tinggi dengan static site generation
- 🎯 Navigasi yang intuitif dan mudah digunakan

## 🛠️ Teknologi

- **Framework**: [Astro](https://astro.build/) v5.17.1
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4.19
- **Icons**: Astro Icon dengan Iconify
- **Search**: Fuse.js v7.1.0
- **Carousel**: Swiper v12.1.0
- **Language**: TypeScript

## 📦 Instalasi

### Prasyarat

- Node.js versi 18 atau lebih tinggi
- npm atau yarn atau pnpm

### Langkah Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd firstoffice-astro
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:4321`

## 🎯 Perintah yang Tersedia

| Perintah | Deskripsi |
|----------|-----------|
| `npm run dev` | Menjalankan development server di `localhost:4321` |
| `npm start` | Alias untuk `npm run dev` |
| `npm run build` | Build project untuk production ke folder `./dist/` |
| `npm run preview` | Preview build production secara lokal |
| `npm run astro` | Menjalankan CLI Astro |

## 📁 Struktur Proyek

```
firstoffice-astro/
├── src/
│   ├── assets/          # Gambar, banner, dan aset media
│   ├── components/      # Komponen Astro yang dapat digunakan kembali
│   ├── data/            # Data statis (offices.json, cities.json)
│   ├── layouts/         # Layout template
│   ├── pages/           # File-file halaman (routing otomatis)
│   ├── input.css        # CSS input untuk Tailwind
│   └── output.css       # CSS yang sudah diproses
├── public/              # Aset statis yang tidak diproses
├── dist/                # Output build production
├── .astro/              # Cache dan file temporary Astro
├── astro.config.mjs     # Konfigurasi Astro
├── tailwind.config.js   # Konfigurasi Tailwind CSS
├── tsconfig.json        # Konfigurasi TypeScript
└── package.json         # Dependencies dan scripts
```

## 🎨 Customization

### Menambah Data Kantor

Edit file `src/data/offices.json` untuk menambahkan atau mengubah data kantor.

### Mengubah Styling

- Global styles: `src/input.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Gunakan Tailwind classes langsung di komponen

### Menambah Halaman Baru

Buat file `.astro` baru di folder `src/pages/`. Astro akan otomatis membuat route berdasarkan nama file.

## 🔧 Konfigurasi

### Astro Configuration

File konfigurasi utama ada di `astro.config.mjs`. Saat ini menggunakan:
- `@astrojs/tailwind` - Integrasi Tailwind CSS
- `astro-icon` - Library icon

### Tailwind Configuration

Custom configuration tersedia di `tailwind.config.js` untuk mengatur tema, colors, dan utilities tambahan.

## 📝 Development Guidelines

1. **Komponen**: Buat komponen reusable di folder `src/components/`
2. **Penamaan File**: Gunakan PascalCase untuk komponen (contoh: `CityCard.astro`)
3. **Styling**: Gunakan Tailwind utility classes sebisa mungkin
4. **Images**: Simpan gambar di `src/assets/` dan gunakan Astro's built-in image optimization
5. **Data**: Simpan data statis di `src/data/` dalam format JSON

## 🚀 Deployment

Build project untuk production:

```bash
npm run build
```

Output akan tersimpan di folder `dist/` yang siap untuk di-deploy ke hosting static seperti:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- AWS S3
- Dan lainnya

## 🐛 Troubleshooting

### Module tidak ditemukan
Pastikan semua dependencies sudah terinstall dengan menjalankan `npm install`

### Swiper tidak bekerja
Pastikan client-side script sudah dimuat dengan benar. Gunakan `<script>` tag dengan `is:inline` atau client directives.

### Build error
Hapus folder `.astro/` dan `node_modules/`, kemudian install ulang dependencies.

## 📄 License

[Sesuaikan dengan lisensi Anda]

## 👤 Author

[Nama Anda]

## 🤝 Contributing

Kontribusi, issues, dan feature requests sangat diterima!

---

Dibuat dengan ❤️ menggunakan [Astro](https://astro.build/)
