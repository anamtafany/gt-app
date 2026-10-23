<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const openDashboard = () => {
  router.push('/')
}
const openGt = () => {
  router.push('/gt')
}
const openPjgt = () => {
  router.push('/pjgt')
}
</script>

<template>
  <section class="flex  items-center justify-center dashboard-shell relative overflow-hidden">
    <nav
      class="absolute  max-w-109.5 left-1/2 -translate-x-1/2 bottom-0 z-20 grid h-20.75 grid-cols-3 bg-[#eeeeee] px-2 pt-4.75 w-full"
    >
      <button class="flex flex-col items-center gap-1.25 text-[9px]">
        <!-- <span
          class="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-ugt-yellow text-[0px]"
        ></span> -->
        <span @click="openDashboard">
          <font-awesome-icon icon="fa-solid fa-gauge" class="text-2xl text-[#193a2d]" />
        </span>
        <span class="text-[#244536] font-bold text-[13px]">Beranda</span>
      </button>
      <button class="flex flex-col items-center gap-1.25 text-[9px]">
        <span @click="openGt">
          <font-awesome-icon
            icon="fa-solid fa-chalkboard-teacher"
            class="text-2xl text-[#193a2d]"
          />
        </span>
        <span class="text-[#244536] font-bold text-[13px]">Guru Tugas</span>
      </button>
      <button class="flex flex-col items-center gap-1.25 text-[9px]">
        <span @click="openPjgt">
          <font-awesome-icon icon="fa-solid fa-user-shield" class="text-2xl text-[#193a2d]" />
        </span>
        <span class="text-[#244536] font-bold text-[13px]">PJGT</span>
      </button>
    </nav>
  </section>
</template>

<style></style>
