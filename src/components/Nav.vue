<script setup></script>

<template>
  <section
    class="w-full fixed flex items-center justify-center dashboard-shell absolute bottom-0 z-20"
  >
    <!-- Memperbaiki format tinggi h-[80px] dan max-w-[450px] menggunakan kurung siku standar Tailwind -->
    <nav
      class="absolute max-w-[450px] left-1/2 -translate-x-1/2 bottom-0 z-20 grid h-[80px] grid-cols-3 bg-[#eeeeee] px-2 pt-2 w-full"
    >
      <!-- Tombol 1: Beranda / Dashboard (Jalur '/') -->
      <RouterLink
        to="/"
        class="flex flex-col items-center justify-center gap-1 text-[9px] no-underline"
      >
        <font-awesome-icon icon="fa-solid fa-gauge" class="text-2xl text-[#193a2d]" />
        <span class="text-[#244536] font-bold text-[13px]">Beranda</span>
      </RouterLink>

      <!-- Tombol 2: Guru Tugas / GT (Jalur '/gt') -->
      <RouterLink
        to="/gt"
        class="flex flex-col items-center justify-center gap-1 text-[9px] no-underline"
      >
        <font-awesome-icon icon="fa-solid fa-chalkboard-user" class="text-2xl text-[#193a2d]" />
        <span class="text-[#244536] font-bold text-[13px]">Guru Tugas</span>
      </RouterLink>

      <!-- Tombol 3: PJGT (Jalur '/pjgt') -->
      <RouterLink
        to="/pjgt"
        class="flex flex-col items-center justify-center gap-1 text-[9px] no-underline"
      >
        <font-awesome-icon icon="fa-solid fa-user-shield" class="text-2xl text-[#193a2d]" />
        <span class="text-[#244536] font-bold text-[13px]">PJGT</span>
      </RouterLink>
    </nav>
  </section>
</template>

<style></style>
