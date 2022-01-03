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
    <div class=sidebar-top>
      <img src="@/assets/sword.png" transition="0.45s" width="50" height="50" style="left:0;top:0">
      <span v-cloak v-if="!$store.state.collapsed">
        <h2 class="title">
            Olympium
        </h2>
      </span>
    </div>
    <div>
      <span class='line' />
    </div>
    <!-- <transition name="fade"> -->
    <div>
      <SidebarLink to="dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
      <SidebarLink to="user" icon="fas fa-user-circle">Profil</SidebarLink>
      <SidebarLink to="docs" icon="fas fa-archive">Docs</SidebarLink>
      <!-- </transition> -->
      <span class='lightline' />
      <span
        class="collapse-icon"
        :class="{ 'rotate-180': $store.state.collapsed }"
        @click="$store.commit('toggleBar')" >
        <i class="fas fa-angle-double-left" />
      </span>
    </div>
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
.sidebar-top {
  display: inline-block;
}
.image {
  width: 50;
  height: 50;
  position: absolute;
  left:0;
  top:0;
}
.title {
  text-align: center;
  font-style: italic;
  font-weight: bold;
  color: rgb(236, 236, 236);
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

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
