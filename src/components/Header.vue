<script setup></script>

<template>
  <section class="flex items-center justify-center dashboard-shell relative overflow-hidden">
    <header
      class="flex h-11.25 fixed max-w-109.5 top-0 z-20 items-center justify-between bg-[#123f31] px-5.5 py-7 text-white shadow-sm left-1/2 -translate-x-1/2 w-full"
    >
      <div class="flex items-center gap-2">
        <RouterLink to="/" class="flex items-center gap-2">
          <img
            src="../assets/logo-pondok.png"
            class="flex h-8.75 w-8.75 items-center justify-center rounded-[7px] bg-white text-[12px] font-black text-[#1e4032]"
          />
        </RouterLink>

        <div class="leading-[1.05] gap-1 flex flex-col text-left">
          <div class="text-[12px] font-extrabold tracking-wide">Aplikasi</div>
          <div class="mt-0.75 text-[7px] uppercase tracking-[1px] text-ugt-yellow">
            Laporan Guru Tugas
          </div>
        </div>
      </div>

      <button class="mt-2.25 rounded-md bg-ugt-yellow px-2 py-1.75 text-[#254536]">
        <p class="text-[12px] font-bold">LOG OUT</p>
      </button>
    </header>
  </section>
</template>

<style></style>
