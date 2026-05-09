<script setup>
import { onBeforeUnmount, ref, watch } from "vue";

const menu = ref(false);

const onClickMenu = () => {
  menu.value = !menu.value;
};

const onRedirectHomePage = () => {
  const link = "/";
  const a = document.createElement("a");
  a.href = link;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const handleEventClickOutside = (e) => {
  const targetedEl = e.target.closest(".menu");

  if (!targetedEl) {
    menu.value = false;
  }
};

watch(
  () => menu.value,
  (newVal) => {
    if (newVal == true) {
      document.addEventListener("click", handleEventClickOutside);
    } else {
      document.removeEventListener("click", handleEventClickOutside);
    }
  },
);

onBeforeUnmount(() => {
  document.removeEventListener("click", handleEventClickOutside);
});
</script>

<template>
  <div
    class="py-2 px-4 border-b border-gray-950/5 dark:border-white/10 text-xl font-extrabold"
  >
    <div
      class="flex justify-between items-center w-full overflow-hidden h-[28px]"
    >
      <div
        class="flex gap-2 cursor-pointer"
        @click.prevent="onRedirectHomePage"
      >
        <span class="text-sky-400">{ } /_</span>
        <span class="">Utils Platform</span>
      </div>
      <button
        class="rounded-full hover:dark:*:bg-white/15! cursor-pointer"
        @click.stop.prevent="onClickMenu"
      >
        <!-- <Icon class="rounded-full p-1" width="28" icon="mdi:menu"></Icon> -->
         MENU
      </button>
    </div>
  </div>

  <div
    v-if="menu"
    class="w-[90%] lg:w-[30%] h-[300px] fixed m-auto inset-0 overflow-hidden menu"
    id="menu_ref"
  >
    <div
      class="rounded-xl py-1 px-[1px] text-sm dark:inset-ring dark:inset-ring-white/10 w-full h-full bg-gray-950"
    >
      <div class="flex gap-2 border-b py-2 px-3 border-white/10">
        <span class="size-3 rounded-full bg-red-500"></span>
        <span class="size-3 rounded-full bg-yellow-400"></span>
        <span class="size-3 rounded-full bg-green-500"></span>
      </div>
      <div class="p-2"></div>
    </div>
  </div>
</template>
