import type { ProductCard } from '#build/components'; import type { ProductCard } from
'#build/components';
<template>
  <div class="card text-center">
    <NuxtLink :to="`/product/${product.id}`">
      <img :src="product.image" alt="product thumb" class="thumb" />
      <p class="m-4 truncate font-bold text-gray-500">{{ product.title }}</p>

      <!-- <p class="btn my-4"> view Details </p> -->
    </NuxtLink>
  </div>
</template>

<script setup>
  const { product } = defineProps(["product"]);
</script>

<style scoped>
  .thumb {
    max-height: 120px;
    max-with: 70%;
    margin: 0 auto;
  }
</style>
