<script setup>
import { useLaporanStore } from '../stores/data'

const store = useLaporanStore()
</script>

<template>
  <section class="mx-auto min-h-screen max-w-106.5 bg-[#eef1f5] pb-12 pt-6">
    <div class="px-0.5 pb-5 pt-3.25">
      <div
        class="card p-2.5 min-h-screen pt-10 pb-20 mt-7 mb-6 relative bg-white rounded-3xl w-full max-w-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col items-center sm:items-start gap-6 font-san"
      >
        <!-- HEADER -->
        <div class="flex justify-between items-center mb-6 w-full">
          <div class="flex items-baseline">
            <h1 class="text-[clamp(16px,4cqw,24px)] font-bold text-[#1e3d30]">Rekap Laporan GT</h1>
            <!-- Menampilkan panjang list array dari Store -->
          </div>

          <!-- Tombol Tambah -->
          <RouterLink
            to="/form"
            class="bg-[#1e3d30] hover:bg-[#152a21] text-white text-[clamp(10px,2cqw,12px)] font-semibold px-4 py-2 rounded-lg flex items-center gap-1 transition duration-200 cursor-pointer"
          >
            <span>+</span> Tambah
          </RouterLink>
        </div>

        <!-- LIST KARTU LAPORAN -->
        <div class="space-y-3">
          <div
            v-for="laporan in store.daftarLaporan"
            :key="laporan.id"
            class="flex items-stretch border border-[#1e3d30] rounded-xl overflow-hidden shadow-sm"
          >
            <!-- Badge Angka Index/ID -->
            <div
              class="w-[12%] max-w-[56px] min-w-[40px] bg-[#1e3d30] text-white flex items-center justify-center font-bold text-[clamp(14px,3cqw,18px)] flex-shrink-0"
            >
              {{ laporan.id }}
            </div>

            <!-- Isi Konten Laporan -->
            <div class="flex-1 p-3 flex justify-between items-center bg-white min-w-0">
              <div class="truncate pr-4">
                <h3 class="font-bold text-gray-800 text-[clamp(12px,2.5cqw,16px)] truncate">
                  {{ laporan.judul }}
                </h3>
                <p class="text-[clamp(10px,2cqw,12px)] text-gray-500 font-medium mt-0.5 truncate">
                  {{ laporan.penulis }}
                </p>
              </div>

              <!-- Tombol Detail -->
              <RouterLink
                to="/laporan"
                class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold text-[clamp(10px,2cqw,12px)] px-4 py-2 rounded-lg transition duration-200 flex-shrink-0 cursor-pointer"
              >
                Detail
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
