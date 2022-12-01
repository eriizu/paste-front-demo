<template>
  <header class="navbar">
    <nav class="contents">
      <div class="allcaps">Make Paste!</div>
      <ul role="list">
        <li><a href="/"> Home </a></li>
        <li>
          <a href="/new"> Create Paste </a>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <div>
      <NuxtLayout> <NuxtPage /> </NuxtLayout>
    </div>
  </div>
</template>
