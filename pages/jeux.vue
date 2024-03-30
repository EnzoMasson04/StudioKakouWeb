<script setup>
definePageMeta({
    layout: 'kakouquest'
  })
</script>

<template>
  <div class="container">
    <h2>Kakou Quest</h2>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="card">
          <img src="../public/Logo KakouQuest.png" alt="Kakou Quest">
          <div class="card-body">
            <h5 class="card-title">Kakou Quest</h5>
            <p class="card-text">Un RogueLike amsuant (et bien rageant) à partager entre amis.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card img {background: radial-gradient(circle, #483B3A, #483B3A, #212121, #212121);}
</style>