<script setup>
import router from "@/plugins/router";
import { onBeforeUnmount, ref, watch } from "vue";
import home_logo from '@/assets/images/image_logo.png'

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

const onToLink = (route) => {
  router.push({
    name: route
  })
}

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
    style="z-index: 1000;"
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
      <div class="p-2 flex flex-col gap-2 overflow-auto">
        <div class="p-1 cursor-pointer hover:bg-white/15 rounded-xl" @click.prevent="onToLink('home')">
          <div class="flex items-center gap-3">
            <img class="h-10 w-10 object-cover border border-zinc-200 rounded-full dark:border-zinc-700 p-1" :src="home_logo">
            <div class="flex flex-col">
              <div class="font-semibold text-sm text-zinc-900 dark:text-zinc-50">Home</div>
            </div>
          </div>
        </div>
        <div class="p-1 cursor-pointer hover:bg-white/15 rounded-xl" @click.prevent="onToLink('lesson')">
          <div class="flex items-center gap-3">
            <img class="h-10 w-10 object-cover border border-zinc-200 rounded-full dark:border-zinc-700 p-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEz8tzH9tzH/ujDZojXrrTMzP0cyKUYQLEmhgT1xZUJVU0WyQjj2UC3eSzG/kzmiPDvJSDXvTy+MdUB1NECmhTyHOz6NdkBQMkSXej7MLnrvAAAAAnRSTlMAozlMP2oAAAFCSURBVHgBddJBlsMgCADQVILYKFQZa+39LzpVTewsxg3xfYP4YNtu5p91+zY4w9JFO8In4L54IACgJXcHuDuyCAALAQ9vAws9HiQcrD8QLkQXU1Dl+PMTWTWk6PBEuGdWXsjK+QkDwRyFVRu+XnF8lcNAR/SV2umUJjIrVY8N4YhcapJAE0sJtXA8oKET1VidSzxQSg6q4jr60MpJ7fSZlpWDb4i2l8NCaeIoyaLZwM89hzAw5b6PHjbjuvB6Sqgd1ZkNG0rN6UIhGYgzbYoUeCKX3GrqadGWljLV68/qKJds8YPwqL2imgYKRUkh0qO/85kb8ol5PDU/O+7E32lTL4dpb2jMkUUipatlKiL5gNnst3UkvYv9Ci7OvteYANrAHCyeEWBi590S2R1mbLSwTeZuYMWB11AD/I1r5Nda67b9AugLHu5rQK5dAAAAAElFTkSuQmCC">
            <div class="flex flex-col">
              <div class="font-semibold text-sm text-zinc-900 dark:text-zinc-50">Lesson</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
