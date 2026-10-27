<script setup>
import { ref, computed, onMounted } from 'vue'
import { dataGuruTugas } from '../stores/data'
import { QrcodeVue } from 'qrcode-vue'

const data = dataGuruTugas()

// Ambil array data dari Pinia secara reaktif
const guru = computed(() => data.detailData)

// State local untuk mencatat ID guru yang dipilih di dropdown
const selectedId = ref(null)

// Mengatur guru pertama sebagai default saat halaman dimuat
onMounted(() => {
  if (guru.value && guru.value.length > 0) {
    selectedId.value = guru.value[0].id
  }
})

// Cari objek data guru berdasarkan ID yang sedang dipilih di dropdown
const guruTerpilih = computed(() => {
  if (!guru.value) return null
  return guru.value.find((guru) => guru.id === selectedId.value) || null
})

// Mengonversi ID (number) menjadi String untuk kebutuhan qrcode-vue
const guruIdString = computed(() => {
  return guruTerpilih.value ? guruTerpilih.value.id.toString() : ''
})

// Gambar default jika user belum mengunggah foto
const defaultImage = 'https://unsplash.com'
const avatarUrl = ref(defaultImage)

// Handler untuk membaca file yang diunggah
const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Membuat URL sementara untuk preview gambar (lebih cepat & efisien dibanding FileReader)
    avatarUrl.value = URL.createObjectURL(file)
  }
}
</script>

<template>
  <section class="mx-auto min-h-screen bg-[#eef1f5]">
    <div class="max-w-106.5 mx-auto min-h-screen bg-[#eef1f5]">
      <div class="mt-0.75 space-y-2.5">
        <div
          class="card p-2.5 min-h-screen pt-10 pb-20 mt-7 mb-6 relative bg-white rounded-3xl w-full max-w-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col items-center sm:items-start gap-6 font-san"
        >
          <div
            class="w-full aspect-[85.6/53.98] bg-gradient-to-br from-green-600 to-green-800 text-white rounded-2xl shadow-xl p-[5%] flex flex-col justify-between overflow-hidden relative"
          >
            <!-- Bagian Atas / Header Kartu -->
            <div
              v-for="guru in data.detailData"
              :key="guru.id"
              class="flex justify-between items-start"
            >
              <div>
                <h2 class="text-[clamp(10px,4.5cqw,24px)] font-bold tracking-wider leading-none">
                  GURU TUGAS
                </h2>
                <p class="text-[clamp(6px,2cqw,12px)] opacity-75 mt-1 border-b border-white/50">
                  Pondok Pesantren Syaichona Moh. Cholil Bangkalan
                </p>
              </div>

              <button
                v-if="guru.status === true"
                class="btn-warning py-1 px-3 bg-yellow-500 rounded-[20px] flex items-center justify-center text-green-900"
              >
                <p class="text-[10px] font-bold">Aktif</p>
              </button>
              <button
                v-else
                class="btn-error py-1.5 px-3 bg-red-700 rounded-[20px] flex items-center justify-center text-white"
              >
                <p class="text-[10px] font-bold">Tidak Aktif</p>
              </button>
            </div>

            <!-- Bagian Tengah / Informasi Profil -->
            <div class="flex items-center gap-[4%] my-auto">
              <!-- Wadah Foto Profil -->
              <div
                class="w-[22%] aspect-square bg-gray-700 rounded-full border-2 border-white overflow-hidden flex-shrink-0 flex items-center justify-center relative"
              >
                <!-- Binding source gambar ke variable reactive avatarUrl -->
                <img
                  src="/src/assets/me.jpg"
                  alt="Foto Profil"
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Detail Teks -->
              <div v-for="guru in data.detailData" :key="guru.id" class="flex-1 min-w-0">
                <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
                  <p class="text-[14px] opacity-60 mt-1 font-mono">Id</p>
                  <p class="text-[14px] opacity-60 mt-1 font-mono">:</p>
                  <p class="text-[14px] opacity-60 mt-1 font-mono">{{ guru.id }}</p>
                </div>
                <div
                  class="grid grid-cols-[80px_12px_1fr] items-baseline font-medium tracking-wide"
                >
                  <p class="text-[14px] opacity-60 mt-1 font-mono">Nama</p>
                  <p class="text-[14px] opacity-60 mt-1 font-mono">:</p>
                  <h3 class="text-[14px] font-bold opacity-100 truncate leading-tight font-mono">
                    {{ guru.nama }}
                  </h3>
                </div>
                <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
                  <p
                    class="text-[14px] opacity-60 mt-1 text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
                  >
                    Umur
                  </p>
                  <p
                    class="text-[14px] opacity-60 mt-1 text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
                  >
                    :
                  </p>
                  <p
                    class="text-[14px] opacity-60 mt-1 text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
                  >
                    {{ guru.umur }}
                  </p>
                </div>

                <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
                  <p
                    class="text-[14px] opacity-60 mt-1 text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
                  >
                    Tahun Ajaran
                  </p>
                  <p
                    class="text-[14px] opacity-60 mt-1 text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
                  >
                    :
                  </p>
                  <p
                    class="text-[14px] opacity-60 mt-1 text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
                  >
                    {{ guru.tahunAjaran }}
                  </p>
                </div>

                <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
                  <p
                    class="text-[14px] opacity-60 mt-1 text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
                  >
                    Tempat Tugas
                  </p>
                  <p
                    class="text-[14px] opacity-60 mt-1 text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
                  >
                    :
                  </p>
                  <p
                    class="text-[14px] opacity-60 mt-1 text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
                  >
                    {{ guru.tempatTugas }}
                  </p>
                </div>
                <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
                  <p
                    class="text-[14px] opacity-60 mt-1 text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
                  >
                    Alamat
                  </p>
                  <p
                    class="text-[14px] opacity-60 mt-1 text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
                  >
                    :
                  </p>
                  <p
                    class="text-[14px] opacity-60 mt-1 text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
                  >
                    {{ guru.alamat }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- INPUT TOMBOL UPLOAD -->
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <label class="block text-sm font-medium text-gray-700 mb-2">Ganti Foto Profil</label>
            <input
              type="file"
              accept="image/*"
              @change="handleImageUpload"
              class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            />
          </div>

          <!-- Dropdown Pemilih Guru -->
          <div class="w-full max-w-sm rounded-xl bg-white p-4 shadow-md border border-slate-100">
            <label
              for="guru-select"
              class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2"
            >
              Pilih Guru Tugas:
            </label>
            <select
              id="guru-select"
              v-model="selectedId"
              class="w-full rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm font-medium text-slate-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option v-for="item in listGuru" :key="item.id" :value="item.id">
                {{ item.nama }} (ID: {{ item.id }})
              </option>
            </select>
          </div>

          <!-- Tampilan Card QR Code Dinamis -->
          <div
            v-if="guruTerpilih"
            class="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl border border-slate-100 transition-all duration-300"
          >
            <!-- Bagian Atas: Nama dan Tempat Tugas -->
            <div class="text-center mb-4">
              <h2 class="text-xl font-bold text-slate-800">{{ guruTerpilih.nama }}</h2>
              <p class="mt-1 text-sm text-slate-400">{{ guruTerpilih.tempatTugas }}</p>
            </div>

            <!-- Area QR Code (Kotak putih lonjong di gambar Anda yang sekarang sudah berisi QR) -->
            <div
              class="my-6 flex justify-center rounded-2xl bg-slate-50/50 py-6 border border-slate-100"
            >
              <QrcodeVue
                :value="guruIdString"
                :size="160"
                level="H"
                render-as="svg"
                class="rounded-lg shadow-inner bg-white p-2"
              />
            </div>

            <!-- Bagian Bawah: Informasi ID Guru -->
            <div class="rounded-xl bg-slate-900 p-4 text-center">
              <span class="block text-xs font-medium tracking-wider text-slate-400 uppercase mb-1"
                >ID GURU TUGAS</span
              >
              <span class="font-mono text-xl font-bold text-emerald-400">{{
                guruTerpilih.id
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
