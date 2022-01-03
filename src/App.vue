<script>
import Sidebar from './components/Sidebar.vue'
export default {
  components: { Sidebar }
}
</script>
<template >
  <Sidebar/>
  <router-link to="/" />
  <router-view/>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: rgb(202, 200, 200);
}
</style>
