<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logos.png">
    <HelloWorld msg="Welcome to Your Vue.js + Polygonjs App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
