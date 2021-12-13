<script>
import SidebarLink from './SidebarLink'
import store from '@/store/index.js'

export default {
  props: {},
  components: { SidebarLink },
  methods: {
    GetPixel () {
      if (store.state.collapse === true) {
        return 38
      } else {
        return 180
      }
    }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: `${$store.state.collapsed ? 38 : 180}px` }">
    <h1>
      <span v-cloak v-if="$store.state.collapsed">
        <img src="@/assets/sword.png" width="50" height="50">
      </span>
      <span v-else>
        <img src="@/assets/sword.png" width="100" height="100">
      </span>
    </h1>
    <span class='line' />
    <SidebarLink to="/" icon="fas fa-columns">Dashboard</SidebarLink>
    <SidebarLink to="/user" icon="fas fa-user-circle">Profil</SidebarLink>
    <SidebarLink to="/docs" icon="fas fa-archive">Docs</SidebarLink>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': $store.state.collapsed }"
      @click="$store.commit('toggleBar')"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
[v-cloak] {
  display: none;
}
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
[v-cloak] {
  display: none;
}
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 1em;

  transition: 0.45s ease;

  display: flex;
  flex-direction: column;
}

.line {
  border-bottom: solid #ccc;
  height: 1px;
  display: block;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
