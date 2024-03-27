<script setup>
definePageMeta({
    layout: 'kakouquest'
  })
</script>

<template>
  <div class="container">
    <h2>Kakou Quest</h2>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <img src="../public/Logo KakouQuest" alt="Kakou Quest">
          <div class="card-body">
            <h5 class="card-title">Kakou Quest</h5>
            <p class="card-text">Rogue quoi</p>
            <NuxtLink to="test"><button class="kakou-btn">Détails</button></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>