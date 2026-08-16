<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  isContent: {
    type: Boolean,
    default: true,
    require: false,
  },
  isContent: {
    type: Boolean,
    default: true,
    require: false,
  },
  content: {
    type: String,
    default: "",
  },
  raw_html: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="rounded-xl bg-gray-950 mb-3">
    <div
      class="rounded-xl p-1 text-sm scheme-dark dark:inset-ring dark:inset-ring-white/10"
    >
      <div class="flex gap-2 p-2">
        <span class="size-3 rounded-full bg-red-500"></span>
        <span class="size-3 rounded-full bg-yellow-400"></span>
        <span class="size-3 rounded-full bg-green-500"></span>
      </div>
      <div class="with-line-numbers text-[13px]/6 *:*:p-3! text-white flex flex-col gap-1">
        <div
          v-if="title.length > 0"
          class="*:rounded-lg *:bg-white/10! dark:*:bg-white/5! *:inset-ring *:inset-ring-white/10 dark:*:inset-ring-white/5 text-wrap"
        >
          <div>{{ title }}</div>
        </div>
        <div
          v-if="description.length > 0"
          class="*:rounded-lg *:bg-white/10! dark:*:bg-white/5! *:inset-ring *:inset-ring-white/10 dark:*:inset-ring-white/5"
        >
          <div>{{ description }}</div>
        </div>
        <div
          v-if="isContent"
          class="*:rounded-lg *:bg-white/10! dark:*:bg-white/5! *:inset-ring *:inset-ring-white/10 dark:*:inset-ring-white/5"
        >
          <pre class="w-full overflow-auto">
            <template v-if="content.length > 0">
              {{ content }}
            </template>
          </pre>
        </div>
        <div
          v-else-if="!isContent && raw_html.length > 0"
          class="*:rounded-lg *:bg-white/10! dark:*:bg-white/5! *:inset-ring *:inset-ring-white/10 dark:*:inset-ring-white/5"
        >
          <div v-html="raw_html"></div>
        </div>
      </div>
    </div>
  </div>
</template>
