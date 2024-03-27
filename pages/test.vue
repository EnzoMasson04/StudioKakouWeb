<script setup>
definePageMeta({
    layout: 'user'
  })
</script>

<template>
  <div class="margin">
    <p>Bouton</p>
    <NuxtLink to="/"><button class="kakou-btn">Appuyer</button></NuxtLink>
  </div>
  <div class="margin">
    <p>Input</p>
    <input class="input"> 
  </div>
  <div class="margin">
    <p>CheckBox</p>
    <label class="checkbox-container">
      <input type="checkbox">
      <span class="checkmark"></span>
    </label> 
  </div>
</template>

<style scoped>
  div {margin: 100px;}
</style>