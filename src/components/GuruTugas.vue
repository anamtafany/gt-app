<script setup>
import { ref } from 'vue'
// import useStatusStore from '../stores/data'

const idGt = ref('1448001')
const nama = ref('Khoirul Anam')
const umur = ref(25)
const alamat = ref('Jl. Merdeka No. 123 Kota Bangkalan, Provinsi Jawa Timur, 12345 Indonesia ')
const tahunAjaran = ref('1448-1449 H')
const tempatTugas = ref('Pondok Pesantren Al-Muhajirin')

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

const aktif = ref(true)
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
            <div class="flex justify-between items-start">
              <div>
                <h2 class="text-[clamp(10px,4.5cqw,24px)] font-bold tracking-wider leading-none">
                  GURU TUGAS
                </h2>
                <p class="text-[clamp(6px,2cqw,12px)] opacity-75 mt-1">
                  Pondok Pesantren Syaichona Moh. Cholil Bangkalan
                </p>
              </div>

              <button
                v-if="aktif == true"
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
              <div class="flex-1 min-w-0">
                <div class="grid items-baseline font-medium tracking-wide">
                  <h3 class="text-[clamp(10px,4cqw,20px)] font-bold truncate leading-tight">
                    Khoirul Anam
                  </h3>
                </div>
                <!-- <div class="grid items-baseline font-medium tracking-wide">
                  <p class="text-[clamp(8px,2.5cqw,14px)] text-blue-200 truncate text-wrap">
                    Guru Tugas | Pondok Pesantren Syaichona Moh. Cholil Bangkalan
                  </p>
                </div> -->
                <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
                  <p class="text-[14px] opacity-60 mt-1 font-mono">ID</p>
                  <p class="text-[14px] opacity-60 mt-1 font-mono">:</p>
                  <p class="text-[14px] opacity-60 mt-1 font-mono">{{ idGt }}</p>
                </div>
                <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
                  <p class="text-[14px] opacity-60 mt-1 font-mono">Tahun Ajaran</p>
                  <p class="text-[14px] opacity-60 mt-1 font-mono">:</p>
                  <p class="text-[14px] opacity-60 mt-1 font-mono">{{ tahunAjaran }}</p>
                </div>
                <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
                  <p class="text-[14px] opacity-60 mt-1 font-mono">Alamat</p>
                  <p class="text-[14px] opacity-60 mt-1 font-mono">:</p>
                  <p class="text-[14px] opacity-60 mt-1 font-mono">{{ tahunAjaran }}</p>
                </div>
              </div>
            </div>

            <!-- Bagian Bawah / Footer Kartu -->
            <div
              class="flex justify-between items-end border-t border-white/20 pt-[3%] text-[clamp(6px,2cqw,11px)] opacity-75 font-mono"
            >
              <span>Tempat Tugas: Pondok Pesantren Al-Muhajirin</span>
              <!-- <span class="tracking-widest">👑 MEMBER</span> -->
            </div>
          </div>
          <!-- INPUT TOMBOL UPLOAD -->
          <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Ganti Foto Profil Kartu</label
            >
            <input
              type="file"
              accept="image/*"
              @change="handleImageUpload"
              class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
