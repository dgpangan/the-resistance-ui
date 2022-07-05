<template>
  <dialog open>
    <div v-if="playerIsResistance">
      <h2>You are part of the resistance!</h2>
      <p>Your goal is for 3 of 5 missions to succeed. When voting for a mission result, you can only vote for success.</p>
    </div>
    <div v-else>
      <h2>You are a spy!</h2>
      <p>Your goal is to stop the resistance from succeeding in 3 of 5 missions. When voting fo a mission result, you can vote for either success or fail.</p>
      <h3>Spies in this game:</h3>
      <ul>
        <li>Player 1 (You)</li>
        <li>Player 2</li>
      </ul>
    </div>
  </dialog>
</template>

<script>
export default {
  data() {
    return {
      playerIsResistance: false,
      spies: [ 'Player 1', 'Player 2' ]
    }
  }
}
</script>