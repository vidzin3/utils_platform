<script setup>
import CardListView from "@/components/CardListView.vue";

const contents = [
  {
    title: "Data Security Algorithms",
    description: `Hashing, encoding, and encryption are distinct methods for transforming data based on purpose. Hashing ensures integrity via irreversible, fixed-length signatures (e.g., SHA-256). Encryption secures confidentiality with keys, allowing for two-way, reversible communication. Encoding transforms data formats for compatibility using public algorithms (e.g., Base64)`,
    is_content: false,
    content: "",
    raw_html: `
      <div class="w-full overflow-auto">
        <table class="border-collapse border border-gray-400 w-full table-auto">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th class="text-left border p-2 font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">Feature (មុខងារ)</th>
              <th class="text-left border p-2 font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">Purpose (គោលបំណង)</th>
              <th class="text-left border p-2 font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">Reversible (បកប្រែ)</th>
              <th class="text-left border p-2 font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">Key Used</th>
              <th class="text-left border p-2 font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200">Output Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">Hashing</td>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">Integrity/Fingerprinting</td>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">No (One-way)</td>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">No (Algorithm dependent)</td>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">Fixed-length</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">Encryption</td>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">Confidentiality/Security</td>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">Yes (Two-way)</td>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">Yes (Public/Private)</td>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">Variable/Ciphertext</td>
            </tr>
            <tr>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">Encoding</td>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">Data Format Transformation</td>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">Yes (Two-way)</td>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">No</td>
              <td class="border border-gray-300 p-2 text-gray-500 dark:border-gray-700 dark:text-gray-400">Variable</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  },
  {
    title: "Failure of routing page by Apache web server",
    description: `.htaccess (Hypertext Access) is a powerful, distributed configuration file used by Apache web servers to manage settings on a per-directory basis without editing the main server config. It enables features like URL rewrites, custom error pages, password protection, and security restrictions by placing text-based rules in directories.`,
    is_content: true,
    content: `
      .htaccess for build frontend
      -> make file name .htaccess
      -> write into file
        <IfModule mode_rewriter.c>
          RewriteEngine on
          RewriteCond %{REQUEST_FILENAME} !-f
          RewriteCond %{REQUEST_FILENAME} !-d

          RewriteRule ^ index.html [L]
        </IfModule>

      -> Copy in to build dist frontend
        cp .htaccess ./dist
    `,
    raw_html: ``,
  },
  {
    title: "select exists in raw sql and laravel",
    description: `select(DB::raw(1)) is commonly used inside EXISTS because MySQL only checks whether a row exists — it does not care what columns are selected.`,
    is_content: true,
    content: `
    So this:

    ->orWhereExists(function ($sub) use ($currentOfficeId) {

      $sub->select(DB::raw(1))
          ->from('employees as e1')
          ->whereColumn('e1.id', 'letters.created_by')
          ->where('e1.office_id', $currentOfficeId);
    });

    generates SQL like:

    OR EXISTS (
        SELECT 1
        FROM employees e1
        WHERE e1.id = letters.created_by
          AND e1.office_id = ?
    )`,
    raw_html: ``,
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