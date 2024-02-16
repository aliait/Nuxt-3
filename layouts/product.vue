<template>
  <div>
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/product" class="font-bold"> DevAli </NuxtLink>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
    <footer class="container mx-auto flex justify-between border-t-2 p-4">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Homme</NuxtLink></li>
        <li><NuxtLink to="/about"> About </NuxtLink></li>
        <li><NuxtLink to="/product"> Product </NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #f3d304;
  }
</style>
