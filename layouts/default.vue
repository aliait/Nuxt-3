<template>
  <div>
    <header class="bg-white p-1 shadow-sm">
      <nav class="container mx-auto flex justify-between p-4">
        <NuxtLink to="/about" class="font-bold"> DevAli </NuxtLink>

        <ul class="flex gap-4">
          <li><NuxtLink to="/">Homme</NuxtLink></li>
          <li><NuxtLink to="/about"> About </NuxtLink></li>
          <li><NuxtLink to="/product" class="btn"> Product </NuxtLink></li>
        </ul>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #f3d304;
  }
</style>
