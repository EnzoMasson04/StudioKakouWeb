<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

const search = ref('');
const players = ref([]);
const headers = [
  { text: 'ID', value: 'id' },
  { text: 'Partie ID', value: 'partie_id' },
  { text: 'Nom du joueur', value: 'player_name' },
  { text: 'HP', value: 'hp' },
  { text: 'Stamina', value: 'stamina' },
  { text: 'Force', value: 'strength' },
  { text: 'Vitesse', value: 'speed' },
  { text: 'Niveau du joueur', value: 'player_level' },
  { text: 'Score', value: 'score' },
];

onMounted(() => {
  fetch('http://localhost:3000/api/players')
    .then(response => response.json())
    .then(data => {
      players.value = data;
    });
});

const filteredPlayers = computed(() => {
  return players.value.filter(player =>
    Object.values(player).some(val =>
      String(val).toLowerCase().includes(search.value.toLowerCase())
    )
  );
});
</script>

<template>
  <div>
    <h1>Statistiques des joueurs</h1>
    <input
      type="text"
      v-model="search"
      placeholder="Rechercher"
      class="search-input"
    />
    <div class="table-container">
      <table class="player-table">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header.value">
              {{ header.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in filteredPlayers" :key="player.id" class="table-row">
            <td>{{ player.id }}</td>
            <td>{{ player.partie_id }}</td>
            <td>{{ player.player_name }}</td>
            <td>{{ player.hp }}</td>
            <td>{{ player.stamina }}</td>
            <td>{{ player.strength }}</td>
            <td>{{ player.speed }}</td>
            <td>{{ player.player_level }}</td>
            <td>{{ player.score }}</td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 140px;
  text-align: center;
}

input{
  color: #ffffff;
}

.search-input {
  display: block;
  margin: 20px auto;
  padding: 10px;
  max-width: 400px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.table-container {
  margin: 20px auto;
  width: 90%;
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.player-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #292828;
  border-radius: 8px;
  overflow: hidden;
  color: #ffffff;
}

.player-table th,
.player-table td {
  padding: 12px 15px;
  text-align: left;
}

.player-table th {
  background-color: #212121;
  color: #ffffff;
}

.player-table tbody tr {
  transition: background-color 0.3s ease;
}

.player-table tbody tr:hover {
  background-color: #444141;
}

.table-row {
  border-radius: 8px;
}

@media screen and (max-width: 600px) {
  .table-container {
    width: 100%;
    overflow-x: scroll;
  }
}
</style>
