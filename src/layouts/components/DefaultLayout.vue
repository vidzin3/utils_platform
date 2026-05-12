<script setup>
import Header from './Header.vue';
</script>
<template>
  <!-- header -->
  <Header />

  <!-- main body -->
  <main class="w-full">
    <div class="flex item-center justify-center w-full">
      <div class="w-full md:w-[90%] lg:w-1/2 p-2">
        <RouterView :key="$route.fullPath" />
      </div>
    </div>
  </main>

  <!-- footer -->
  <div class="py-1 px-2 w-full fixed bottom-0">
    Power by <a class="text-sky-200" href="https://meetkouchdavid.vercel.app" target="blank">David</a>.
  </div>
</template>
