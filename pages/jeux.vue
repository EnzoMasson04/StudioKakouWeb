<script setup>
definePageMeta({
    layout: 'user'
  })
</script>

<template>
  <div class="container">
    <h2 class="game-title">Kakou Quest</h2>
    <br>
    <p style="font-size: 32px;">
      Choisissez quelle option vous souhaitez télécharger
    </p>

    <br>

    <p style="font-size: 23px;">
      Vous ne savez pas jouer à Kakou Quest ? Consultez notre guide utilisateur pour en savoir plus  :
    </p>
    <NuxtLink to="/user_guide">
      <p class="card-text" style="font-style: 29px;">User's Guide</p>
    </NuxtLink>
    <br>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <img src="../public/Logo KakouQuest.png" alt="Kakou Quest">
          <div class="card-body">
            <h2 class="card-title">Solo</h2>
            <p class="card-text">Jouez à notre jeu en solo avec nos derniers ajouts et fonctionnalités !</p>
            <button class="quest-btn">Télécharger</button>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card">
          <img src="../public/Logo KakouQuest.png" alt="Kakou Quest">
          <div class="card-body">
            <h2 class="card-title">Multijoueur</h2>
            <p class="card-text">Jouez à une version plus élémentaire de Kakou Quest avec jusqu'à 4 amis !</p>
            <button class="quest-btn">Télécharger</button>
          </div>
        </div>
      </div>
    </div>

    <p class="card-text" style="font-size: 30px;">Vous souhaitez héberger votre partie multijoueur ?</p>
    <p class="card-text" style="font-style: 29px;"><a href="">Téléchargez notre outil de serveur</a></p>
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