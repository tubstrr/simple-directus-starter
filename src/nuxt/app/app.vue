<script setup>
const toaster = { position: "bottom-right" };
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
