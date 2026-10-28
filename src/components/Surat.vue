<script setup>
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'

// State untuk menyimpan teks atau URL masukan
const textInput = ref('https://vuejs.org')
const qrSize = ref(200)
</script>

<template>
  <section class="mx-auto min-h-screen max-w-106.5 bg-[#eef1f5] pb-12 pt-6">
    <div class="px-2.5 pb-5 pt-3.25">
      <div
        class="card p-2.5 min-h-screen pt-10 pb-20 mt-7 mb-6 relative bg-white rounded-3xl w-full max-w-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col items-center sm:items-start gap-6 font-san"
      >
        <h2 class="text-[clamp(12px,4cqw,24px)] font-bold tracking-wider leading-none">
          Surat Tugas
        </h2>

        <div class="flex min-h-screen items-center justify-center bg-slate-100 p-6">
          <div class="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm">
            <h2 class="mb-4 text-xl font-bold text-slate-800">
              Generator QR Code Vue 3 & Tailwind v4
            </h2>

            <!-- Input Teks/URL -->
            <div class="mb-4">
              <label for="qr-text" class="mb-1 block text-sm font-medium text-slate-700">
                Masukkan Teks atau URL
              </label>
              <input
                id="qr-text"
                v-model="textInput"
                type="text"
                placeholder="Ketik sesuatu..."
                class="w-full rounded-sm border border-slate-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <!-- Area Tampilan QR Code -->
            <div
              class="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6"
            >
              <div class="rounded-lg bg-white p-3 shadow-xs">
                <QrcodeVue :value="textInput || 'kosong'" :size="qrSize" level="H" />
              </div>
              <p class="mt-3 text-xs text-slate-500 break-all text-center">
                Data: {{ textInput || '-' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
