<template>
  <div class="about">
    <h1>Vuejs + Polygonjs Demo</h1>
    <img alt="Vue logo" src="../assets/logos.png">
    <p><a :href="polygonjsUrl" target="_blank">Polygonjs</a></p>
    <p><a :href="githubUrl" target="_blank">Github</a></p>
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
  computed: {
    polygonjsUrl: ()=>"https://polygonjs.com",
    githubUrl: ()=>"https://github.com/polygonjs/polygonjs-vue2",
  }
});
</script>