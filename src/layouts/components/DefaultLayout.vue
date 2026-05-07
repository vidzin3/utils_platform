<template>
  <div class="p-2 border-b border-gray-950/5 dark:border-white/10 flex gap-2 text-xl font-extrabold">
    <span class="text-sky-400">{ } /_</span>
    <span class="">Utils Platform</span>
  </div>
  <main class="w-full">
    <div class="flex item-center justify-center w-full">
      <div class="w-full md:w-[90%] lg:w-1/2 p-2">
        <RouterView :key="$route.fullPath" />
      </div>
    </div>
  </main>

  <div class="py-1 px-2 w-full">
    Power by <a class="text-sky-200" href="https://meetkouchdavid.vercel.app" target="blank">David</a>.
  </div>
</template>
