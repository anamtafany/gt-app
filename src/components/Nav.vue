<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const openDashboard = () => {
  router.push('/')
}
</script>

<template>
  <section class="dashboard-shell relative max-w-[426px] overflow-hidden">
    <nav
      class="absolute inset-x-0 fixed bottom-0 z-20 grid h-20.75 grid-cols-3 bg-[#eeeeee] px-2 pt-4.75"
    >
      <button class="flex flex-col items-center gap-1.25 text-[11px]">
        <!-- <span
          class="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-ugt-yellow text-[0px]"
        ></span> -->
        <span @click="openDashboard">
          <font-awesome-icon icon="fa-solid fa-gauge" class="text-2xl text-[#193a2d]" />
        </span>
        <span class="text-[#244536]">Dashboard</span>
      </button>
      <button class="flex flex-col items-center gap-1.25 text-[11px]">
        <span>
          <font-awesome-icon
            icon="fa-solid fa-chalkboard-teacher"
            class="text-2xl text-[#193a2d]"
          />
        </span>
        <span class="text-[#244536]">Guru Tugas</span>
      </button>
      <button class="flex flex-col items-center gap-1.25 text-[11px]">
        <span>
          <font-awesome-icon icon="fa-solid fa-user-shield" class="text-2xl text-[#193a2d]" />
        </span>
        <span class="text-[#244536]">PJGT</span>
      </button>
    </nav>
  </section>
</template>

<style></style>
