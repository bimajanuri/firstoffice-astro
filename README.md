# FirstOffice - Astro

Platform pencarian dan penjelajahan kantor modern yang dibangun dengan Astro, Tailwind CSS, dan berbagai teknologi web terkini.

## 📋 Deskripsi

FirstOffice adalah website yang memungkinkan pengguna untuk menjelajahi berbagai jenis ruang kantor, termasuk:
- **Serviced Office** - Kantor siap pakai dengan layanan lengkap
- **Virtual Office** - Solusi alamat bisnis tanpa ruang fisik
- **Shell and Core** - Ruang kantor kosong untuk kustomisasi penuh
- **Managed Office** - Kantor yang dikelola dengan fasilitas premium

## 🚀 Fitur Utama

### Pencarian & Katalog
- 🏢 Katalog kantor dengan berbagai kategori
- 🔍 **Navbar Search Bar** - Search bar terintegrasi di navigation bar (desktop & mobile)
- 🔗 **Query Parameter Auto-Fill** - URL dengan query parameter otomatis mengisi search dan menampilkan hasil
- 📱 **Mobile-Ready Search** - Search bar tersedia di semua ukuran layar
- 🎯 Fuzzy search menggunakan Fuse.js untuk hasil yang akurat
- 📍 Filter berdasarkan lokasi/kota
- ⭐ Halaman office populer
- 🏷️ Halaman categories (Serviced, Virtual, Shell & Core, Managed)
- 🔗 Shareable search URLs - Simpan dan bagikan hasil pencarian via URL

### Booking System
- 📋 Detail booking dengan informasi lengkap
- 🔐 Pencarian booking berdasarkan TRX ID dan Phone Number
- 📊 Halaman My Booking dengan daftar semua booking
- 💳 Status pembayaran (Paid, Pending, Failed)
- 📅 Tracking periode booking (Started At - Ended At)

### UI/UX
- 📱 Desain responsive dan mobile-friendly
- 🎨 UI/UX modern dengan Tailwind CSS
- 🖼️ Galeri gambar dengan Swiper carousel
- ⚡ Performa tinggi dengan static site generation
- 🎯 Navigasi yang intuitif dan mudah digunakan
- 🎭 Hover effects dan micro-interactions

## 🛠️ Teknologi

- **Framework**: [Astro](https://astro.build/) v5.17.1
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4.19
- **Icons**: Astro Icon dengan Iconify
- **Search**: Fuse.js v7.1.0
- **Carousel**: Swiper v12.1.0
- **Language**: TypeScript

## 🔍 Navbar Search Bar

Project ini dilengkapi dengan **integrated search bar** yang terintegrasi langsung di navigation bar untuk pengalaman pencarian yang seamless.

### Fitur Search Bar

- ✅ **Desktop & Mobile Support** - Search bar tersedia di semua ukuran layar
- ✅ **Auto-Population** - Query parameter dari URL otomatis mengisi search bar
- ✅ **Instant Results** - Hasil pencarian langsung ditampilkan tanpa refresh
- ✅ **Shareable URLs** - Hasil pencarian dapat dibagikan via URL
- ✅ **Fuzzy Search** - Menggunakan Fuse.js untuk hasil yang akurat

### Cara Kerja

1. **Dari Navbar**: Ketik query di search bar navbar → tekan Enter
2. **Redirect**: Otomatis redirect ke `/browse?q=your-query`
3. **Auto-Fill**: Search bar di browse page terisi otomatis dengan query
4. **Display Results**: Hasil filtering langsung ditampilkan

### Contoh Penggunaan

```
Navbar Search: "jakarta"
       ↓
Redirect: /browse?q=jakarta
       ↓
Browse Page: Search input = "jakarta" + 36 hasil ditampilkan
```

### URL Format

```
/browse?q=office          # Search "office"
/browse?q=jakarta         # Search "jakarta"
/browse?q=virtual+office  # Search "virtual office"
```

URL ini dapat:
- Di-bookmark untuk quick access
- Dibagikan ke user lain
- Disimpan dalam browser history

## 🎨 Icon System

Project ini menggunakan [Astro Icon](https://www.astroicon.dev/) dengan icon set [Lucide](https://lucide.dev/) dari Iconify untuk sistem icon yang optimal dan maintainable.

### Mengapa Astro Icon?

- ✅ **Bundle lebih kecil**: Icon dimuat on-demand dari Iconify
- ✅ **Konsisten**: Semua icon dari design system yang sama (Lucide)
- ✅ **Mudah digunakan**: Hanya perlu nama icon, tanpa perlu import SVG
- ✅ **Fleksibel**: Akses ke 200,000+ icon dari berbagai icon sets
- ✅ **Performa tinggi**: SVG di-inline otomatis, tanpa request tambahan

### Setup

Icon sudah dikonfigurasi di `astro.config.mjs`:

```js
import icon from 'astro-icon';

export default defineConfig({
  integrations: [tailwind(), icon()],
});
```

Icon set Lucide sudah terinstall via:
```bash
npm install @iconify-json/lucide
```

### Penggunaan

Import Icon component dan gunakan dengan nama icon dari Lucide:

```astro
---
import { Icon } from "astro-icon/components";
---

<!-- Icon dasar -->
<Icon name="lucide:star" class="w-6 h-6" />

<!-- Icon dengan warna -->
<Icon name="lucide:phone" class="w-6 h-6 text-green-600" />

<!-- Icon dengan warna white untuk background gelap -->
<Icon name="lucide:crown" class="w-5 h-5 text-white" />
```

### Icon yang Digunakan

Berikut adalah mapping icon yang digunakan di project:

| Lucide Icon | Digunakan Di | Keterangan |
|------------|-------------|-----------|
| `lucide:star` | OfficeCard, Office Detail | Rating bintang |
| `lucide:search` | **Navbar, Browse Page** | **Search icon** |
| `lucide:map-pin` | OfficeCard, Office Detail, Booking Info | Lokasi |
| `lucide:clock` | OfficeCard | Durasi |
| `lucide:wifi` | OfficeCard | Fasilitas WiFi |
| `lucide:user-check` | OfficeCard, Homepage, Office Detail | Privacy/Security |
| `lucide:phone` | Navbar, BookingForm, Booking Info, Office Detail | Kontak telepon |
| `lucide:menu` | Navbar | Mobile menu hamburger |
| `lucide:receipt` | BookingForm | Booking TRX ID |
| `lucide:calendar` | BookingInformation | Tanggal booking |
| `lucide:shield-check` | BookingInformation | Privacy badge |
| `lucide:coffee` | Homepage, Office Detail | Snacks/amenities |
| `lucide:users` | Homepage, Office Detail | Tim/akses |
| `lucide:crown` | Homepage | Badge achievement |
| `lucide:sliders-horizontal` | Homepage, Office Detail | Explore/view details |
| `lucide:video` | Homepage | Watch story |
| `lucide:box` | Homepage, Office Detail | Fleksibilitas |
| `lucide:trophy` | Homepage, Office Detail | Penghargaan |
| `lucide:trending-up` | Homepage, Office Detail | Business growth |
| `lucide:check-circle` | Office Detail | Verified benefits |
| `lucide:bookmark-plus` | Office Detail | Save for later |
| `lucide:message-circle` | Office Detail | Chat contact |

### Mencari Icon Baru

1. Kunjungi [Lucide Icon Set](https://lucide.dev/icons/)
2. Cari icon yang diinginkan
3. Gunakan format `lucide:nama-icon`

Contoh:
- Icon "home" → `lucide:home`
- Icon "user" → `lucide:user`
- Icon "settings" → `lucide:settings`

### Customization

**Ukuran**:
```astro
<Icon name="lucide:star" class="w-4 h-4" />  <!-- Small -->
<Icon name="lucide:star" class="w-6 h-6" />  <!-- Medium -->
<Icon name="lucide:star" class="w-10 h-10" /> <!-- Large -->
```

**Warna**:
```astro
<!-- Menggunakan Tailwind color classes -->
<Icon name="lucide:phone" class="text-green-600" />
<Icon name="lucide:star" class="text-yellow-400" />
<Icon name="lucide:heart" class="text-red-500" />
```

**Kombinasi**:
```astro
<Icon name="lucide:check" class="w-5 h-5 text-green-600" />
```

### Menggunakan Icon Set Lain

Jika ingin menggunakan icon set selain Lucide, install package Iconify yang sesuai:

```bash
# Material Design Icons
npm install @iconify-json/mdi

# Font Awesome
npm install @iconify-json/fa6-solid

# Heroicons
npm install @iconify-json/heroicons
```

Lalu gunakan dengan prefix yang sesuai:
```astro
<Icon name="mdi:account" />
<Icon name="fa6-solid:user" />
<Icon name="heroicons:home" />
```

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
│   │   ├── images/
│   │   │   ├── banners/       # Hero banners
│   │   │   ├── thumbnails/    # Office thumbnails
│   │   │   └── icons/         # Icon SVG
│   ├── components/      # Komponen Astro yang dapat digunakan kembali
│   │   ├── BookingForm.astro        # Form pencarian booking
│   │   ├── BookingList.astro        # Daftar semua booking
│   │   ├── BookingInformation.astro # Detail booking information
│   │   ├── OfficeCard.astro         # Card untuk display office
│   │   ├── CityCard.astro           # Card untuk display kota
│   │   └── Navbar.astro             # Navigation bar
│   ├── data/            # Data statis
│   │   ├── offices.json   # Data 60+ kantor
│   │   ├── cities.json    # Data kota
│   │   └── bookings.json  # Data 34 booking dummy
│   ├── layouts/         # Layout template
│   │   └── BaseLayout.astro  # Layout utama
│   ├── pages/           # File-file halaman (routing otomatis)
│   │   ├── index.astro           # Homepage
│   │   ├── browse.astro          # Browse offices
│   │   ├── popular.astro         # Popular offices
│   │   ├── categories.astro      # Categories page
│   │   ├── my-booking.astro      # My Booking page
│   │   ├── office/
│   │   │   └── [slug].astro     # Office detail (dynamic)
│   │   ├── city/
│   │   │   └── [slug].astro     # City page (dynamic)
│   │   └── booking/
│   │       └── [slug].astro     # Booking detail (dynamic)
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

## 📑 Halaman yang Tersedia

| Route | Deskripsi |
|-------|----------|
| `/` | Homepage dengan hero, popular offices, dan cities |
| `/browse` | Browse semua kantor dengan **navbar search integration** dan auto-search dari query parameter |
| `/browse?q=jakarta` | Browse dengan query parameter - otomatis terisi dan menampilkan hasil |
| `/popular` | Daftar kantor populer |
| `/categories` | Kantor dikelompokkan berdasarkan kategori |
| `/categories/[slug]` | Daftar kantor berdasarkan kategori tertentu |
| `/my-booking` | Halaman My Booking dengan search dan list |
| `/office/[slug]` | Detail office dengan galeri dan informasi lengkap |
| `/city/[slug]` | Daftar kantor berdasarkan kota |
| `/booking/[trxId]` | Detail booking berdasarkan Transaction ID |

## 🎨 Customization

### Menambah Data Kantor

Edit file `src/data/offices.json` untuk menambahkan atau mengubah data kantor. Format:

```json
{
  "slug": "office-name",
  "name": "Office Name",
  "price": "Rp X.XXX.XXX",
  "duration": 20,
  "location": "City Name",
  "rating": 4.5,
  "thumbnail": "thumbnail.png",
  "isPopular": true,
  "status": "Available",
  "category": "Serviced Office",
  "description": "..."
}
```

### Menambah Data Booking

Edit file `src/data/bookings.json` untuk menambahkan booking baru:

```json
{
  "bookingTrxId": "TRX-YYYY-XXX-LOC",
  "paymentStatus": "Paid",
  "officeSlug": "office-slug",
  "customerName": "Customer Name",
  "customerPhone": "+62 XXX-XXXX-XXXX",
  "startedAt": "2026-MM-DD",
  "endedAt": "2026-MM-DD"
}
```

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

### Search tidak auto-populate dari URL parameter
Jika search bar tidak terisi otomatis saat mengakses `/browse?q=query`:
1. Clear browser cache dan reload
2. Restart dev server:
   ```bash
   pkill -f 'vite'
   npm run dev
   ```
3. Check browser console untuk error Fuse.js atau JavaScript

### Vite 504 Error (Outdated Optimize Dep)
Jika muncul error 504 untuk dependencies seperti `fuse.js`:
1. Stop dev server (Ctrl+C)
2. Hapus folder `.astro/` dan `node_modules/.vite/`
3. Restart dev server dengan `npm run dev`

### Build error
Hapus folder `.astro/` dan `node_modules/`, kemudian install ulang dependencies.

## 📄 License

MIT License

## 👤 Author

Muhammad Bima Januri

## 🤝 Contributing

Kontribusi, issues, dan feature requests sangat diterima!

---

Dibuat dengan ❤️ menggunakan [Astro](https://astro.build/)
