<script setup>
// // BARU
import { ref } from 'vue'
import { dataGuruTugas } from '../stores/data'

const data = dataGuruTugas()

// State reaktif untuk menampung data pilihan
// const selectedOption = ref('')

// Contoh dataset dinamis yang biasa Anda gunakan
// const daftarTugas = ref([
//   { id: 1, nama: 'Desain Layout Flowbite' },
//   { id: 2, nama: 'Integrasi API Pinia Store' },
//   { id: 3, nama: 'Perbaikan Validasi Form' },
// ])

// // LAMA
// import { ref } from 'vue'
// import { useRouter } from 'vue-router'
// import { useLaporanStore } from '../stores/data'

// const router = useRouter()
// const store = useLaporanStore()

// const judulInput = ref('')
// const penulisInput = ref('Khoirul Anam') // Nilai bawaan sesuai data gambar sebelumnya

// const simpanData = () => {
//   if (judulInput.value.trim() === '') return alert('Form tidak boleh ada yang kosong!')

//   // Masukkan data baru ke dalam store
//   store.tambahLaporanBaru(judulInput.value, penulisInput.value)

//   // Alihkan navigasi kembali ke halaman list rekap
//   router.push('/laporan')
// }

const levels = ['Idadiyah', 'Ibtidaiyah', 'Tsanawiyah', 'Aliyah']
</script>

<template>
  <section class="mx-auto min-h-screen max-w-106.5 bg-[#eef1f5] pb-15 pt-10">
    <div class="px-2.5 pb-5 pt-3.25">
      <!-- <form @submit.prevent="simpanData" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">Judul Laporan</label>
          <input
            v-model="judulInput"
            type="text"
            placeholder="Contoh: Laporan Bulan Oktober"
            class="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1e3d30]"
          />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">Nama Penulis</label>
          <input
            v-model="penulisInput"
            type="text"
            class="w-full p-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#1e3d30]"
          />
        </div>
        <div class="flex gap-2 justify-end pt-2">
          <button
            type="button"
            @click="router.push('/form')"
            class="px-4 py-2 text-xs font-medium text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Batal
          </button>
          <button
            type="submit"
            class="px-4 py-2 text-xs font-semibold text-white bg-[#1e3d30] rounded-lg hover:bg-[#152a21]"
          >
            Simpan
          </button>
        </div>
      </form> -->

      <!-- <div class="mb-1.25 text-[10px] font-extrabold uppercase tracking-wide text-[#28604c]">
        
      </div> -->
      <!-- <h1 class="text-[16px] font-normal leading-tight text-[#244638]">Form Laporan GT</h1> -->
      <form class="mt-3 space-y-2.5">
        <div class="card p-2.5">
          <h2 class="mt-1 mb-3 text-15px] font-extrabold uppercase tracking-wide text-[#28604c]">
            Buat Laporan Baru
          </h2>
          <div class="flex items-start justify-between gap-2">
            <div>
              <h2 class="section-title mb-3 text-blue-600 md:text-green-600">
                Form Laporan Guru Tugas
              </h2>
              <p class="max-w-46.25 text-[10px] leading-[1.4] text-[#7a8580]">
                Silakan isi form laporan guru tugas dengan lengkap dan benar.
              </p>
            </div>
          </div>
          <div v-for="guru in data.detailData" :key="guru.id" class="mt-2.75 space-y-2.5">
            <label
              ><span class="field-label my-2">Laporan Bulan</span
              ><select class="select select-sm field-select bg-white w-20">
                <option>September</option>
                <option>Oktober</option>
              </select>
            </label>
            <label
              ><span class="field-label my-4">Nama GT</span
              ><input v-model="guru.nama" type="text" class="field"
            /></label>
            <label
              ><span class="field-label my-4">Nama PJGT</span
              ><input v-model="guru.namaPjgt" type="text" class="field"
            /></label>
            <label
              ><span class="field-label my-4">Nama Madrasah/Ponpes</span
              ><input v-model="guru.tempatTugas" type="text" class="field"
            /></label>
            <label><span class="field-label my-4">Alamat</span><input v-model="guru.alamat" type="text" class="field" /></label>
          </div>
        </div>
        <div class="card p-2.5">
          <h2 class="section-title">Menjadi Wali Kelas</h2>
          <div v-for="level in levels" :key="level" class="mb-2 last:mb-0">
            <div class="small-label">{{ level }}</div>
            <div class="flex gap-1">
              <label
                ><select class="select select-sm field-select bg-white w-20">
                  <option>Kelas 1</option>
                  <option>Kelas 2</option>
                  <option>Kelas 3</option>
                  <option>Kelas 4</option>
                  <option>Kelas 5</option>
                  <option>Kelas 6</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div class="card p-2.5">
          <h2 class="section-title">Menjadi Guru Fun</h2>
          <div v-for="level in levels" :key="level" class="mb-2 last:mb-0">
            <div class="small-label">{{ level }}</div>
            <div class="flex gap-1">
              <label
                ><select class="select select-sm field-select bg-white w-20">
                  <option>Kelas 1</option>
                  <option>Kelas 2</option>
                  <option>Kelas 3</option>
                  <option>Kelas 4</option>
                  <option>Kelas 5</option>
                  <option>Kelas 6</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div class="card p-2.5">
          <h2 class="section-title">Data Murid</h2>
          <label class="block"
            ><span class="field-label my-2">Jenis Kelamin Murid</span
            ><select class="select select-sm field-select bg-white w-20">
              <option>Laki-laki</option>
              <option>Perempuan</option>
              <option>Laki-Laki & Perempuan</option>
            </select></label
          >
          <div class="mt-2.75">
            <h3 class="field-label my-2">Jumlah Murid</h3>
            <div class="flex gap-1">
              <label>
                <span class="field-label">Kelas 1</span
                ><select class="select select-sm field-select bg-white w-20">
                  <option>1 orang</option>
                  <option>2 orang</option>
                  <option>3 orang</option>
                  <option>4 orang</option>
                  <option>5 orang</option>
                  <option>6 orang</option>
                </select>
              </label>
              <label>
                <span class="field-label">Kelas 2</span
                ><select class="select select-sm field-select bg-white w-20">
                  <option>1 orang</option>
                  <option>2 orang</option>
                  <option>3 orang</option>
                  <option>4 orang</option>
                  <option>5 orang</option>
                  <option>6 orang</option>
                </select>
              </label>
              <label>
                <span class="field-label">Kelas 3</span
                ><select class="select select-sm field-select bg-white w-20">
                  <option>1 orang</option>
                  <option>2 orang</option>
                  <option>3 orang</option>
                  <option>4 orang</option>
                  <option>5 orang</option>
                  <option>6 orang</option>
                </select>
              </label>
              <label>
                <span class="field-label">Kelas 4</span
                ><select class="select select-sm field-select bg-white w-20">
                  <option>1 orang</option>
                  <option>2 orang</option>
                  <option>3 orang</option>
                  <option>4 orang</option>
                  <option>5 orang</option>
                  <option>6 orang</option>
                </select>
              </label>
              <label>
                <span class="field-label">Kelas 5</span
                ><select class="select select-sm field-select bg-white w-20">
                  <option>1 orang</option>
                  <option>2 orang</option>
                  <option>3 orang</option>
                  <option>4 orang</option>
                  <option>5 orang</option>
                  <option>6 orang</option>
                </select>
              </label>
              <label>
                <span class="field-label">Kelas 6</span
                ><select class="select select-sm field-select bg-white w-20">
                  <option>1 orang</option>
                  <option>2 orang</option>
                  <option>3 orang</option>
                  <option>4 orang</option>
                  <option>5 orang</option>
                  <option>6 orang</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div class="card p-2.5">
          <h2 class="section-title">Kehadiran &amp; Kegiatan</h2>
          <div class="space-y-2.5">
            <label
              ><span class="field-label">Sakit</span
              ><select class="select select-sm field-select bg-white w-15.75">
                <option>1 Hari</option>
                <option>2 Hari</option>
                <option>3 Hari</option>
                <option>Tidak</option>
              </select></label
            >
            <label
              ><span class="field-label my-4">Pulang</span
              ><select class="select select-sm field-select bg-white w-20">
                <option>1 Hari</option>
                <option>2 Hari</option>
                <option>3 Hari</option>
                <option>Tidak</option>
              </select></label
            >
            <label
              ><span class="field-label my-4">Udzur Lain</span
              ><select class="select select-sm field-select bg-white w-20">
                <option>1 Hari</option>
                <option>2 Hari</option>
                <option>3 Hari</option>
                <option>Tidak</option>
              </select></label
            >
            <label
              ><span class="field-label my-4">Mengajar Al-Qur’an</span
              ><select class="select select-sm field-select bg-white w-20">
                <option>Iya</option>
                <option>Tidak</option>
              </select></label
            >
            <label
              ><span class="field-label my-4">Mengajar Kitab</span
              ><select class="select select-sm field-select bg-white w-20">
                <option>Iya</option>
                <option>Tidak</option>
              </select></label
            >
            <label
              ><span class="field-label my-4">Imam Sholat Jum’at</span
              ><select class="select select-sm field-select bg-white w-20">
                <option>Iya</option>
                <option>Tidak</option>
              </select></label
            >
            <label
              ><span class="field-label my-4">Imam Sholat Maktubah</span
              ><select class="select select-sm field-select bg-white w-20">
                <option>Iya</option>
                <option>Tidak</option>
              </select></label
            >
          </div>
        </div>
        <div class="card p-2.5">
          <h2 class="section-title">Penilaian &amp; Catatan</h2>
          <div class="mb-3.25">
            <span class="field-label">Hubungan dengan PJGT</span>
            <div class="flex gap-0.5 text-[17px] leading-none">
              <select class="select select-sm field-select bg-white w-20">
                <option>Baik</option>
                <option>Cukup Baik</option>
                <option>Sangat Baik</option>
              </select>
            </div>
          </div>
          <div class="mb-3.25">
            <span class="field-label">Hubungan dengan Guru Lain</span>
            <div class="flex gap-0.5 text-[17px] leading-none">
              <select class="select select-sm field-select bg-white w-20">
                <option>Baik</option>
                <option>Cukup Baik</option>
                <option>Sangat Baik</option>
              </select>
            </div>
          </div>
          <label class="mb-2.5 block"
            ><span class="field-label">Tugas Tambahan selain mengajar</span
            ><textarea
              placeholder="Silakan masukkan tugas tambahan..."
              class="field resize-y"
            ></textarea>
          </label>
          <label class="mb-2.5 block"
            ><span class="field-label">Usulan dan Saran kepada UGT</span
            ><textarea
              placeholder="Silakan masukkan usulan dan saran..."
              class="field resize-y"
            ></textarea>
          </label>
          <label class="mb-2.5 block"
            ><span class="field-label">Bisyaroh Bulan Ini</span
            ><select class="select select-sm field-select bg-white w-20">
              <option>700</option>
              <option>800</option>
              <option>900</option>
              <option>1000</option>
            </select></label
          >
          <label class="block"
            ><span class="field-label">Pemberian Bisyaroh</span
            ><select class="select select-sm field-select bg-white w-20">
              <option>Tepat waktu</option>
              <option>Terlambat</option>
            </select></label
          >

          <button
            type="submit"
            class="mt-4 w-full rounded-lg bg-[#174533] py-3 text-[11px] font-bold text-white"
          >
            Simpan Laporan
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style></style>
