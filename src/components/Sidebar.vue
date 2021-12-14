<script>
import SidebarLink from './SidebarLink'

export default {
  props: {},
  components:
  {
    SidebarLink
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: $store.state.NavBarwidth }">
    <h1>
      <span v-cloak v-if="$store.state.collapsed">
        <img src="@/assets/sword.png" transition="0.45s" width="50" height="50" style="position: absolute;left:0;top:0">
      </span>
      <span v-else>
        <img src="@/assets/sword.png" transition="0.45s" width="50" height="50" style="position: absolute;left:0;top:0">
        <h5 class="logo-title d-flex align-items-center fw-bold">
            Olympium
        </h5>
      </span>
    </h1>
    <span class='line' />
    <SidebarLink to="dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
    <SidebarLink to="user" icon="fas fa-user-circle">Profil</SidebarLink>
    <SidebarLink to="docs" icon="fas fa-archive">Docs</SidebarLink>
    <span class='lightline' />
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': $store.state.collapsed }"
      @click="$store.commit('toggleBar')" >
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
.image {
  width: 50;
  height: 50;
  position: absolute;
  left:0;
  top:0;
}
.title {
  font-style: italic;
  color: gold;
}
.sidebar {
  transition: 0.45s;

  color: white;
  background-color: var(--sidebar-bg-color);

  border-end-end-radius: 10px;
  border-top-right-radius: 10px;

  float: left;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 1em;

  display: flex;
  flex-direction: column;
}

.line {
  margin-left: 2px;
  border-bottom: solid #ccc;
  height: 1px;
  display: block;
}

.lightline {
  margin-left: auto;
  margin-right: auto;
  border-bottom: solid #ccc;
  padding-bottom: 20px;
  width: 20%;
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
