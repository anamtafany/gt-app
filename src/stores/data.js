import { defineStore } from 'pinia'

import { ref, computed } from 'vue'

export const useLaporanStore = defineStore('laporan', () => {
  const daftarLaporan = ref([
    { id: 1, judul: 'Laporan Bulan Januari', penulis: 'Khoirul Anam' },
    { id: 2, judul: 'Laporan Bulan Februari', penulis: 'Khoirul Anam' },
    { id: 3, judul: 'Laporan Bulan Maret', penulis: 'Khoirul Anam' },
    { id: 4, judul: 'Laporan Bulan April', penulis: 'Khoirul Anam' },
    { id: 5, judul: 'Laporan Bulan Mei', penulis: 'Khoirul Anam' },
    { id: 6, judul: 'Laporan Bulan Juni', penulis: 'Khoirul Anam' },
    { id: 7, judul: 'Laporan Bulan Juli', penulis: 'Khoirul Anam' },
    { id: 8, judul: 'Laporan Bulan Agustus', penulis: 'Khoirul Anam' },
    { id: 9, judul: 'Laporan Bulan September', penulis: 'Khoirul Anam' },
  ])

  // Hitung total panjang array agar bisa dipanggil di Dashboard
  const totalLaporan = computed(() => daftarLaporan.value.length)

  // Aksi untuk menambah data dari halaman form
  const tambahLaporanBaru = (judul, penulis) => {
    const idBaru = daftarLaporan.value.length + 1
    daftarLaporan.value.push({ id: idBaru, judul, penulis })
  }

  return { daftarLaporan, totalLaporan, tambahLaporanBaru }
})

export default defineStore('statusStore', () => {
  // Boolean state: true (aktif/kuning), false (tidak aktif/merah)
  const isActive = ref(true)

  // Fungsi untuk mengubah status
  function toggleStatus() {
    isActive.value = !isActive.value
  }

  return { isActive, toggleStatus }
})
