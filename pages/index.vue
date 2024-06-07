<script setup>
definePageMeta({
    layout: 'user'
  })

</script>

<template>
  <div class="container">
    <div class="row">
      <h1>Studio Kakou</h1>
      <div class="col-md-12">
        <div class="card" @click="navigateTo('jeux')">
          <div class="row">
            <div class="col-md-6">
              <img src="../public/ScreenshotGame (1).png" alt="Image de notre principal jeu" class="img-fluid rounded-start">
            </div>
            <div class="col-md-6">
              <div class="card-body jeu">
                <h2 class="game-title" style="font-size: 40px;">Kakou Quest</h2>
                <br>
                <p class="card-text">Le nouveau jeu Kakou Quest est enfin disponible. Jouez au tout nouveau Roguelike remis au goût du jour
                  par notre équipe. Dans cette toute nouvelle approche, découvrez un grand nombre de nouveautés dans ce genre tel qu'un mode 
                  multijoueur.</p>
                <br>
                <NuxtLink to="jeux">
                  <button class="kakou-btn">Jouer dès maintenant</button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card" @click="navigateTo('serveurs')">
          <img src="../public/Serveurs.png" alt="Serveurs">
          <div class="card-body">
            <h5 class="card-title">Nos serveurs</h5>
            <p class="card-text">Kakou Quest a comme particularité principale son incroyable mode multijoueur.
              Vous devrez louer nos serveurs pour jouer avec + de 4 amis.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card logo" @click="navigateTo('entreprise')">
          <img src="../public/Logo Sans Fond.png" alt="Studio Kakou" class="logo">
          <div class="card-body">
            <h5 class="card-title">Studio Kakou</h5>
            <p class="card-text">Venez découvrir la merveilleuse équipe du Studio Kakou. Nous serions enchantés de pouvoir collaborer avec vous dans le futur. 😊</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .jeu {margin-top: 3rem;}
  .container {margin-bottom: 300px;}
  .kakou-btn {width: 22rem;}
  .card:hover {transition: 0.3s; scale: 1.05; box-shadow: 0 0 9px 4px #ffffff; cursor: pointer;}
  .logo img {background: radial-gradient(circle, #6d4c04, #6d4c04, #1F1E1F, #1F1E1F);}
  h1 {font-size: 70px;}
  h5 {margin: 1rem 0;}
</style>