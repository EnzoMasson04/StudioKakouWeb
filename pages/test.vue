<script setup>
definePageMeta({
    layout: 'user'
  })
</script>

<template>
  <div class="container">
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

    <div class="margin">
      <p>Bouton</p>
      <NuxtLink to="/"><button class="quest-btn">Appuyer</button></NuxtLink>
    </div>
    <div class="margin">
      <p>Input</p>
      <input class="quest-input"> 
    </div>
    <div class="margin" style="margin-bottom: 300px;">
      <p>CheckBox</p>
      <label class="checkbox-container">
        <input type="checkbox">
        <span class="checkmark"></span>
      </label> 
    </div>
  </div>
</template>

<style scoped>
  .margin {margin: 100px;}
</style>