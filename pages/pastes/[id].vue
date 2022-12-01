<script setup lang="ts">
const route = useRoute();

const runtime_config = useRuntimeConfig();
const { data: contents } = await useFetch<string>(
  runtime_config.public.api_base + "pastes/" + route.params.id
);

console.log(contents.value);
</script>

<template>
  <h1 class="text-blue-700">Paste content</h1>

  <div class="paste-text">
    {{ contents }}
  </div>
</template>

<style>
.paste-text {
  font-family: monospace;
}
</style>
