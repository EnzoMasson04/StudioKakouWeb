<script lang="ts">


fetch('http://localhost:3000/api/players')
    .then(response => response.json())
    .then(data => {
      console.log('Data received from API:');
      console.log(data);
    });

</script>

<template>
  <div>
    <h1>Liste des parties</h1>
    <ul>
    <!--TODO: Display the list of players stats-->
    </ul>
  </div>
</template>

<style scoped>
  h1 {margin-top: 400px; text-align: center;}
</style>