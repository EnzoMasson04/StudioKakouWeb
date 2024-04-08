<script setup>
definePageMeta({
    layout: 'user'
  })
</script>

<template>
  <div class="container">
    <div class="row">
      <h2>L'entreprise</h2>
      <br><br>
      <p>Bienvenue dans le monde débordant de Studio Kakou, où cinq esprits créatifs de l'IUT de Sophia-Antipolis se sont réunis pour donner naissance à des aventures
        inoubliables. Armés de claviers, de souris et d'une dose bien trop maigre de sommeil, nous sommes les maîtres du royaume des pixels, jonglant entre lignes de code et éclats de rire.
        Notre dernier chef-d'œuvre en gestation ? Kakou Quest, un jeu roguelike moderne aussi addictif que Geometry Dash. Plongez dans des donjons infestés de
        monstres, parcourez des labyrinthes tordus et affrontez des boss épiques, le tout dans un univers aussi coloré que nos personnalités.
        Dans notre studio, chaque ligne de code est tissée avec amour et chaque pixel est imprégné de notre passion pour le jeu. Rejoignez-nous dans notre quête pour repousser
        les limites du possible et créer des expériences de jeu qui vous transporteront vers des mondes fantastiques.
        Avec Studio Kakou, l'aventure n'est jamais très loin, et le plaisir est toujours au rendez-vous !</p>
    </div>

    <div class="card">
      <div class="card-title"><h2>L'équipe</h2></div>
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
  </div>
</template>

<style scoped>
  img {height: 300px;}
  img:hover {transition: 5s; scale: 8;}
  .bg {margin: 1rem;}
</style>