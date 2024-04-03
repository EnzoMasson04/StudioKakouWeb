<script setup>
definePageMeta({
    layout: 'user'
  })
</script>

<!-- C'est pas très clair vu le nom du fichier mais ça c'est la page de login -->

<template>
  <div class="login-box">
    <h1>Connexion</h1>
    <br>
    <form action="#" method="post">
        <input class="input-text" type="text" name="username" placeholder="Nom de Kakou" required>
        <br><br>
        <input class="input-text" type="password" name="password" placeholder="Kakou password" required>
        <br><br>
        <NuxtLink to="stats">
          <button class="kakou-btn">Se connecter</button>
        </NuxtLink>
    </form>
</div>
</template>

<style scoped>
  form {position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%);}
  input {padding: 2rem; outline: 5px solid #FA283A;}
  input::placeholder{color: #FC5C1C;}
  button {position: absolute; top: 120%; left: 50%; transform: translate(-50%, -50%);}
  h1 {position: absolute; top: 20%; left: 50%; transform: translate(-50%, -50%); font-size: 70px;}
</style>

