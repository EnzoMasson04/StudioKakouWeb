<template>
    <h1>Statistiques des joueurs</h1>
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Rechercher"
        single-line
        hide-details
    ></v-text-field>
    <v-data-table
        :headers="headers"
        :items="player"
        :search="search"
        class="elevation-1"
    ></v-data-table>
</template>

<script lang="ts">

export default {
  data() {
    return {
      search: '',
      player: [],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Partie ID', value: 'partie_id' },
        { text: 'Nom du joueur', value: 'player_name' },
        { text: 'HP', value: 'hp' },
        { text: 'Stamina', value: 'stamina' },
        { text: 'Force', value: 'strength' },
        { text: 'Vitesse', value: 'speed' },
        { text: 'Niveau du joueur', value: 'player_level' },
        { text: 'Score', value: 'score' },
      ]
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/players')
        .then(response => response.json())
        .then(data => {
          console.log('Data received from API:');
          console.log(data[0].name);
          this.player = data;
        });
  }
}
</script>

<style scoped>
h1 {margin-top: 400px; text-align: center;}
/* pages/stats.vue */

.v-data-table {
  margin: auto;
  max-width: 90%;
  border-collapse: collapse;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  background-color: #212121;
  color: #ffffff;
}

.v-data-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

.v-data-table th,
.v-data-table td {
  padding: 12px 15px;
  border: 1px solid #424242;
}

.v-data-table tbody tr {
  border-bottom: 1px solid #424242;
}

.v-data-table tbody tr:nth-of-type(even) {
  background-color: #383838;
}

.v-data-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.v-data-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}

.v-text-field {
  margin: 20px 0;
  max-width: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
}

.v-input__control .v-label {
  color: #ffffff;
}

.v-input__control .v-input__slot {
  color: #ffffff;
}

.v-text-field input {
  color: #ffffff;
}
</style>