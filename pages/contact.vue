<template>
  <div class="container">
    <h1>Contact</h1>
    <p>Today's date comes from a plugin: <strong>{{ today }}</strong></p>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const today = nuxtApp.today;

</script>