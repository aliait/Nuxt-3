<template>
   <Head>
      <title>
        {{ product.title }}
      </title>
      <meta name="description" :content=" product.description " />
    </Head>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params;

  const url = "https://fakestoreapi.com/products/" + id;
  const { data: product } = await useFetch(url, { key: id });
  if (!product.value) {
    throw createError({ statusCode: 404, message: "Page not found", fatal: true });
  }

  definePageMeta({
    layout: "product",
  });
</script>

<style scoped>
  p {
    margin: 20px 0;
  }
</style>
