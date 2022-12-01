<script setup lang="ts">
const file_name = useState("file_name", () => "");
const contents = useState("contents", () => "");
const save_url = useState("save_url", () => "");
const submit = () => {
  console.log("i wann submit", file_name, contents);
  createPaste();
};

const runtime_config = useRuntimeConfig();

const createPaste = async () => {
  let res = await $fetch<string>(runtime_config.public.api_base + "pastes", {
    method: "POST",
    body: contents.value,
  });
  if (res) {
    save_url.value = "/pastes/" + res;
  }
};
// watch(files, (newFiles) => {
//   console.log(newFiles);
// });
</script>

<template>
  <h1 class="text-blue-700">Create a new paste</h1>

  <form class="table rows" @submit.prevent="onsubmit" @reset.prevent="onreset">
    <p>
      <label for="file_name">File name</label>
      <input v-model.trim="file_name" id="file_name" />
    </p>
    <p>
      <label for="contents">Contents</label>
      <textarea
        v-model="contents"
        class="paste-text"
        rows="10"
        id="contents"
      ></textarea>
    </p>
    <p>
      <label for="submit"></label>
      <button id="submit" v-on:click="submit()">Create paste</button>
    </p>
    <p>
      <label for="reset"></label>
      <button class="warn" type="reset">Reset form</button>
    </p>
  </form>
  <div>
    <NuxtLink v-bind:to="save_url">{{
      save_url ? "Access your new pastes" : ""
    }}</NuxtLink>
  </div>
</template>

<style>
.paste-text {
  font-family: monospace;
  width: 30rem;
}
</style>
