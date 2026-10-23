<script setup>
import { ref } from 'vue'

const idGt = ref('1448001')
const nama = ref('Khoirul Anam')
const umur = ref(25)
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
          Foto Profil / Avatar
          <div class="w-28 h-36 rounded-2xl overflow-hidden bg-gray-200 shrink-0">
            <!-- Ganti src dengan path foto Anda atau variabel Vue binding :src="fotoUrl" -->
            <img src="../assets/me.jpg" alt="Foto Profil" class="w-full h-full object-cover" />
          </div>

          <!-- Detail Informasi (Menggunakan Grid agar titik dua sejajar) -->
          <div
            class="flex-1 w-full space-y-3 text-slate-700 text-sm sm:text-base justify-center items-center"
          >
            <!-- Baris ID GT -->
            <div class="grid grid-cols-[80px_12px_1fr] items-baseline font-medium tracking-wide">
              <span class="text-gray-400 font-semibold text-xs tracking-wider uppercase"
                >ID GT</span
              >
              <span class="text-emerald-700 font-semibold">:</span>
              <span class="text-emerald-800 font-semibold text-lg font-mono">{{ idGt }}</span>
            </div>

            <!-- Baris Nama -->
            <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
              <span class="text-gray-400 font-semibold text-xs tracking-wider uppercase">Nama</span>
              <span class="text-emerald-700 font-semibold">:</span>
              <span class="text-slate-800 text-lg font-medium">{{ nama }}</span>
            </div>

            <!-- Baris Umur -->
            <div class="grid grid-cols-[80px_12px_1fr] items-baseline">
              <span class="text-gray-400 font-semibold text-xs tracking-wider uppercase">Umur</span>
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
  </section>
</template>

<style></style>
