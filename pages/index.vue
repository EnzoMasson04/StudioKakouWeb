<script>

export default {
  // Composant futur
}
</script>

<template>
  <div>
    <div class="container">
      <section class="presentation">
        <h2>Présentation de l'entreprise</h2>
        <p>Description de l'entreprise (A faire)</p>
        <NuxtLink to="/"><button class="gradient-btn">En savoir plus</button></NuxtLink>
      </section>

      <section class="Jeux">
        <h2>Nos Jeux</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <img src="..." alt="Kakou Quest">
              <div class="card-body">
                <h5 class="card-title">Kakou Quest</h5>
                <p class="card-text">Rogue quoi</p>
                <NuxtLink to="test.vue"><button class="gradient-btn">Détails</button></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>