<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
const router = useRouter()

function openForm() {
  router.push('/form')
}

// State untuk membuka/tutup dropdown
const isOpen = ref(false)

// State untuk menyimpan pilihan aktif
const selectedOption = ref('')

// Template ref untuk mendeteksi elemen dropdown
const dropdownRef = ref(null)

// Daftar pilihan
const options = ['1446 H - 1447 H', '1447 H - 1448 H', '1448 H - 1449 H']

// Fungsi saat opsi dipilih
const selectOption = (option) => {
  selectedOption.value = option
  isOpen.value = false // Tutup dropdown setelah memilih
}

// Fungsi untuk menutup dropdown jika klik di luar
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

// Pasang event listener saat komponen dimuat
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// Bersihkan event listener saat komponen dihancurkan
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <main class="flex items-center justify-center bg-[#eef1f5] text-ugt-ink">
    <section
      class="dashboard-shell relative mx-auto min-h-screen max-w-109.5 overflow-hidden w-full"
    >
      <div class="dashboard-gradient absolute inset-x-0 top-0 h-[77%]"></div>
      <div
        class="relative z-10 px-5 pt-13.5 text-center flex flex-col items-center justify-center gap-0.75 min-h-screen bottom-40"
      >
        <p
          class="mx-auto max-w-85 text-[20px] font-bold uppercase leading-[1.22] tracking-[.2px] text-white"
        >
          Laporan Guru Tugas
        </p>
        <p class="mx-auto max-w-85 text-[16px] leading-[1.22] tracking-[.2px] text-white">
          Pondok Pesantren
        </p>
        <p class="mx-auto max-w-85 text-[16px] leading-[1.22] tracking-[.2px] text-white">
          Syachona Moh. Cholil Bangkalan
        </p>

        <button
          class="mx-auto mt-10 flex h-32.5 w-56 flex-col items-start justify-center rounded-[18px] bg-ugt-yellow dashboard-gradient-card px-3.25 text-left shadow-sm transition hover:brightness-105"
        >
          <span class="text-[60px] font-black leading-none text-[#234737]">12</span>
          <p class="mt-2 whitespace-nowrap uppercase font-extrabold text-[17px] text-[#1c382d]">
            Rekap
          </p>
          <p class="mt-2 whitespace-nowrap leading-[0.22] font-bold text-[12px] text-[#1c382d]">
            Laporan Bulanan Guru Tugas
          </p>
        </button>
      </div>
      <div
        class="absolute z-20 inline-block text-left w-56 bottom-70 left-1/2 transform -translate-x-1/2"
      >
        <div ref="dropdownRef" class="dropdown-container">
          <!-- Tombol Dropdown -->
          <button
            @click="isOpen = !isOpen"
            class="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-[15px] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {{ selectedOption || 'Tahun Ajaran' }}
            <!-- Icon Panah (Chevron) -->
            <svg
              class="w-5 h-5 ml-2 -mr-1 text-gray-400"
              xmlns="http://w3.org"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <!-- Menu Dropdown (Muncul jika isOpen = true) -->
          <div
            v-if="isOpen"
            class="absolute right-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <button
                v-for="option in options"
                :key="option"
                @click="selectOption(option)"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-800 hover:text-white transition-colors duration-150"
              >
                {{ option }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="dashboard-menu absolute inset-x-0 bottom-10 z-10 rounded-t-[40px] bg-white px-5 pt-14"
      >
        <div class="grid grid-cols-3 gap-1">
          <button @click="openForm" class="flex flex-col items-center text-center">
            <span
              class="mb-5 h-17.5 w-17.5 rounded-full bg-[#1d4032] flex justify-center items-center text-center"
            >
              <font-awesome-icon icon="clipboard-list" class="text-xl text-ugt-yellow" />
            </span>

            <span class="whitespace-nowrap text-[11px] text-[#193a2d]">Form Laporan GT</span>
          </button>
          <button @click="openForm" class="flex flex-col items-center text-center">
            <span
              class="mb-5 h-17.5 w-17.5 rounded-full bg-[#1d4032] flex justify-center items-center text-center"
            >
              <font-awesome-icon icon="chart-line" class="text-xl text-ugt-yellow" />
            </span>

            <span class="whitespace-nowrap text-[11px] text-[#193a2d]">Laporan GT</span>
          </button>
          <button @click="openForm" class="flex flex-col items-center text-center">
            <span
              class="mb-5 h-17.5 w-17.5 rounded-full bg-[#1d4032] flex justify-center items-center text-center"
            >
              <font-awesome-icon icon="briefcase" class="text-xl text-ugt-yellow" />
            </span>

            <span class="whitespace-nowrap text-[11px] text-[#193a2d]">Surat Tugas GT</span>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style></style>
