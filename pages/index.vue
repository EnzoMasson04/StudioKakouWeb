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
          <img src="../public/Tableau.jpg" alt="Image de notre principal jeu">
          <div class="card-body">
            <h5 class="card-title">Kakou Quest</h5>
            <p class="card-text">Le nouveau jeu Kakou Quest est enfin disponible. Jouez au tout nouveau Roguelike remis au goût du jour.</p>
            <NuxtLink to="jeux">
              <button class="kakou-btn">Jouez dès maintenant</button>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card" @click="navigateTo('jeux')">
          <img src="../public/Tableau.jpg" alt="Image de notre principal jeu">
          <div class="card-body">
            <h5 class="card-title">Nos serveurs</h5>
            <p class="card-text">Notre jeu Kakou Quest a comme particularité principale son incroyable mode multijoueur. Pour cela,
              vous devrez louer nos serveurs pour jouer a + de 4 amis.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <img src="../public/Tableau.jpg" alt="Image de notre principal jeu">
          <div class="card-body">
            <h5 class="card-title">Studio Kakou</h5>
            <p class="card-text">Le nouveau jeu Kakou Quest est enfin disponible. Jouez au tout nouveau Roguelike remis au goût du jour.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {margin-bottom: 300px;}
  .kakou-btn {width: 22rem;}
  .card:hover {transition: 0.3s; scale: 1.05; box-shadow: 0 0 9px 4px #ffffff; cursor: pointer;}
</style>