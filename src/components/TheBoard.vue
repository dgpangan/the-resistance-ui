<template>
  <section>
    <h3>Missions</h3>
    <ul>
      <li v-for="(mission, id) in missions" :key="id">
        <span v-if="mission.status === 'success'">Success</span>
        <span v-else-if="mission.status === 'fail'">Fail</span>
        <span v-else>{{ mission.playerCount }}</span>
      </li>
    </ul>
    <h3>Recalls</h3>
    <ul>
      <li v-for="id in 5" :key="id" :class="isMarked(id)">{{ id }}</li>
    </ul>
    <h3>Players</h3>
    <ul>
      <li v-for="player in players" :key="player.id">{{ player.name }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  inject: ['players', 'missions', 'recalls'],
  methods: {
    isMarked(id) {
      if (this.recalls >= id) return 'marked';
    }
  }
}
</script>

<style scoped>
  .marked {
    color: red;
  }
</style>