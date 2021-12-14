<script>
import Sidebar from './components/Sidebar.vue'
export default {
  components: { Sidebar }
}
</script>
<template>
  <Sidebar />
  <router-link to="/" />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: rgb(198, 241, 200);
}
</style>
