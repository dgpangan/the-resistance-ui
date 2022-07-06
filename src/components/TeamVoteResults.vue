<template>
  <dialog open>
    <h2>Team vote results</h2>
    <ul>
      <!-- TODO: shuffle votes -->
      <li v-for="player in players" :key="player.id">{{ player.teamVote }}</li>
    </ul>
  </dialog>
</template>

<script>
export default {
  inject: ['players']
}
</script>