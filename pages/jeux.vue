<script setup>
definePageMeta({
    layout: 'kakouquest'
  })
</script>

<template>
  <div class="container">
    <h1>Kakou Quest</h1>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="card">
          <img src="../public/Logo KakouQuest.png" alt="Kakou Quest">
          <div class="card-body">
            <h5 class="card-title">Kakou Quest</h5>
            <p class="card-text">Un RogueLike amsuant (et bien rageant) à partager entre amis.</p>
            <button class="quest-btn">Download !</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  div {font-family: 'VT323';}
  h1 {font-size: 100px;}
  .container {margin-top: 6rem;}
  .card {margin-top: 0;}
  .card img {background: radial-gradient(circle, #483B3A, #483B3A, #212121, #212121);}
</style>