<template>
  <dialog open>
    <h2>Select X members that you would like to go on this mission:</h2>
    <ul>
      <li v-for="player in players" :key="player.id">
        {{ player.name }}
        <span v-if="player.id === playerId">(You)</span>
      </li>
    </ul>
  </dialog>
</template>

<script>
export default {
  inject: ['players', 'playerId']
}
</script>