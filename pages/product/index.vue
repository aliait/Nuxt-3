<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in product">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: "product",
  });

  const { data: product } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
</style>
