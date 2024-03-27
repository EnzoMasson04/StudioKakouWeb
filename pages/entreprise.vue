<script setup>
definePageMeta({
    layout: 'user'
  })
</script>

<template>
  <div class="container">
    <div class="row">
      <h2>L'entreprise</h2>
      <p>Description de l'entreprise (A faire)</p>
    </div>

    <div class="row">
      <h2>L'équipe</h2>
      <p>Que des génies c'est une dinguerie</p>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-2 bg">
        <h5>Swann</h5>
        <img src="../public/Swann.jpg" alt="">
      </div>
      <div class="col-md-2 bg">
        <h5>Hugo</h5>
        <img src="../public/Hugo.jpg" alt="">
      </div>
      <div class="col-md-2 bg">
        <h5>Enzo</h5>
        <img src="../public/Enzo.jpg" alt="">
      </div>
      <div class="col-md-2 bg">
        <h5>Fabrice</h5>
        <img src="../public/Fabrice.jpg" alt="">
      </div>
      <div class="col-md-2 bg">
        <h5>Matthieu</h5>
        <img src="../public/Matthieu.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
  img {height: 300px;}
  .bg {margin: 1rem;}
</style>