<template>
  <div class="flex">
    <div class="w-[240px] h-screen bg-vulcan-950 flex flex-col">
      <!-- <img class="w-auto" src="https://nisamerica.com/crymachina/images/crymachina-logo.png" alt=""> -->
      <div class="h-[100px]"></div>
      <Navbar :navLinks="navLinks" />
      <hr class="mt-4 text-vulcan-900 mx-4">
      <div class="credit text-vulcan-100">
        <div class="bg-vulcan-700 p-2 rounded-lg flex">
          <svg class="w-[50px] h-50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"></path>
          </svg>
          <div>GitHub</div>
        </div>
      </div>
      <div class="w-full mt-auto mb-5 flex justify-center">
        <div class="bg-vulcan-400 p-2 rounded-full">
          <svg class="w-[30px] h-[30px]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="bg-vulcan-950 w-full text-vulcan-100">
      <div class="w-full h-[56px] bg-vulcan-600"></div>
      <router-view />
    </div>
  </div>
  <!-- <RouterView /> -->
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      navLinks: [
        { text: "Home", path: "/" },
        { text: "Reverse Search", path: "/reverse-search" },
        { text: "Waifu", path: "/waifu" },
        { text: "Schedule", path: "/schedule" },
        { text: "Whastapp BOT", path: "/whatsapp" },
      ],
    };
  },
};
</script>