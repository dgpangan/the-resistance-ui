<template>
  <section>
    <ul>
      <li v-for="(mission, id) in missions" :key="id">
        <span v-if="mission.status === 'success'">Success</span>
        <span v-else-if="mission.status === 'fail'">Fail</span>
        <span v-else>{{ mission.playerCount }}</span>
      </li>
    </ul>

    <ul class="cancellations">
      <li v-for="id in 5" :key="id" :class="isMarked(id)">{{ id }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  inject: ['missions', 'cancellations'],
  methods: {
    isMarked(id) {
      if (this.cancellations >= id) return 'marked';
    }
  }
}
</script>

<style scoped>
  .marked {
    color: red;
  }
</style>