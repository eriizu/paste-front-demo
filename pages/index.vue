<script setup lang="ts">
const counter = useState("counter", () => 12);

const runtime_config = useRuntimeConfig();

const { data: files } = await useFetch<string[]>(
  runtime_config.public.api_base + "pastes"
);
</script>

<template>
  <h1 class="text-blue-700">hi from index</h1>
  <div>
    <div v-for="file in files">
      <NuxtLink v-bind:to="'/pastes/' + file">
        {{ file }}
      </NuxtLink>
      <!-- <a v-bind:href="'http://127.0.0.1:8000/pastes/' + file">{{ file }}</a> -->
    </div>
  </div>
</template>
