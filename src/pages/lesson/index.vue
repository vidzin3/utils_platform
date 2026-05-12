<script setup>
import CardListView from "@/components/CardListView.vue";

const contents = [
  {
    title: "Data Security Algorithms",
    description: `Hashing, encoding, and encryption are distinct methods for transforming data based on purpose. Hashing ensures integrity via irreversible, fixed-length signatures (e.g., SHA-256). Encryption secures confidentiality with keys, allowing for two-way, reversible communication. Encoding transforms data formats for compatibility using public algorithms (e.g., Base64)`,
    is_content: false,
    content: "",
    raw_html: "",
  },
];
</script>

<template>
  <div>
    <template v-for="(item, index) in contents" :key="index">
      <CardListView
        :title="item.title"
        :description="item.description"
        :content="item.content"
        :is-content="item.is_content"
        :raw_html="item.raw_html"
      />
    </template>
  </div>
</template>
