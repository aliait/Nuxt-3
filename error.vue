<template>
  <div class="card mx-auto mt-7 max-w-sm text-center">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <Button
      class="btn text-sm0 my-7 rounded-md bg-[#f3d304] px-3 py-2 text-white"
      @click="handleClearError"
    >
      Go Back Home...</Button
    >
    <p>test</p>
  </div>
</template>

<script setup>
  defineProps(["error"]);
  const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
