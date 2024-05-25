<script lang="ts">
import { defineComponent } from 'vue'
import { useAsyncData } from '#app'

definePageMeta({
    layout: 'user'
  })

export default defineComponent({
  setup() {
    const { $db } = useNuxtApp()
    const users = ref([]);

    useAsyncData(async () => {
      const [rows] = await $db.query('SELECT * FROM utilisateurs')
      users.value = rows;
    });

    return { users };
  }
})
</script>

<template>
  <div>
    <h1>Liste des utilisateurs</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.pseudo }} - {{ user.score }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
  h1 {margin-top: 400px; text-align: center;}
</style>