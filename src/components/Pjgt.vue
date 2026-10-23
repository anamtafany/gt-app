<script setup>
import { ref } from 'vue'

const idGt = ref('1448001')
const nama = ref('KH. Karom')
const umur = ref('')
const alamat = ref('Jl. Merdeka No. 123 Kota Contoh, Provinsi Contoh, 12345')
const tahunAjaran = ref('1448-1449 H')
</script>

<template>
  <section class="mx-auto min-h-screen bg-[#eef1f5]">
    <div class="max-w-106.5 mx-auto min-h-screen bg-[#eef1f5]">
      <div class="mt-0.75 space-y-2.5">
        <div
          class="card p-2.5 min-h-screen pt-20 relative bg-white rounded-3xl w-full max-w-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 font-san"
        >
          <!-- ID Card Relatif -->
          <div
            class="w-full aspect-[1/1.58] bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center justify-between p-6 text-center"
          >
            <!-- Konten Atas: Header / Logo -->
            <div class="text-sm font-bold tracking-wider text-green-900 uppercase">
              Penanggung Jawab GT
            </div>
            <!-- Konten Bawah: ID & Barcode -->
            <div class="w-full bg-gray-50 py-2 rounded-lg border border-dashed border-gray-300">
              <span class="text-xs font-mono text-gray-600 tracking-widest">ID: {{ idGt }}</span>
            </div>

            <!-- Konten Tengah: Foto & Nama -->
            <div class="flex flex-col items-center w-full">
              <div
                class="w-1/2 aspect-square rounded-full bg-gray-300 border-4 border-yellow-300 mb-4 overflow-hidden"
              >
                <!-- Foto di sini -->
                <img src="../assets/nzl.jpg" alt="Foto Profil" class="w-full h-full object-cover" />
              </div>
              <h2 class="text-lg font-bold text-gray-800 truncate w-full uppercase">{{ nama }}</h2>
              <p class="text-sm text-gray-500 font-medium">Pengasuh PP. Darul Ulum</p>
            </div>
            <div
              class="flex-1 w-full space-y-3 text-slate-700 text-sm sm:text-base justify-center items-center"
            >
              <!-- Baris Nama -->
              <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
                <span class="text-gray-400 font-semibold text-xs tracking-wider uppercase"
                  >Nama</span
                >
                <span class="text-emerald-700 font-semibold">:</span>
                <span class="text-slate-800 text-lg font-medium">{{ nama }}</span>
              </div>

              <!-- Baris Umur -->
              <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
                <span class="text-gray-400 font-semibold text-xs tracking-wider uppercase"
                  >Umur</span
                >
                <span class="text-emerald-700 font-semibold">:</span>
                <span class="text-slate-800 text-lg font-medium">{{ umur }}</span>
              </div>

              <!-- Baris Alamat -->
              <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
                <span class="text-gray-400 font-semibold text-xs tracking-wider uppercase"
                  >Alamat</span
                >
                <span class="text-emerald-700 font-semibold">:</span>
                <span class="text-slate-800 text-base leading-relaxed">{{ alamat }}</span>
              </div>

              <!-- Baris Tahun Ajaran -->
              <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
                <span
                  class="text-gray-400 font-semibold text-xs tracking-wider uppercase leading-none"
                  >Tahun Ajaran</span
                >
                <span class="text-emerald-700 font-semibold">:</span>
                <span class="text-slate-800 text-lg font-medium">{{ tahunAjaran }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
