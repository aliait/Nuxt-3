<template>
  <div>
    <h2>ABOUT uS</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam quis laudantium
      veritatis mollitia, optio assumenda nemo reiciendis dignissimos doloribus.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aperiam quis laudantium
      veritatis mollitia, optio assumenda nemo reiciendis dignissimos doloribus.
    </p>
    <div>
      {{ data }}
    </div>
  </div>
</template>

<script setup>
    const {data}=await useFetch('/api/currency/GBP')
    
</script>
    
<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>
