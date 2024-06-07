<script lang="ts">

definePageMeta({
  layout: 'user'
})

export default defineComponent({
  setup() {
    const { $db } = useNuxtApp()
    const users = ref([]);

    useAsyncData(async () => {
      const [rows] = await $db.query('SELECT * FROM parties')
      users.value = rows;
      return rows;
    });

    return { users };
  }
})
</script>

<template>
  <div>
    <h1>Liste des parties</h1>
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