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
      <img class="sword" src="@/assets/sword.png">
      <div v-cloak v-if="!$store.state.collapsed">
        <h2 class="title">
            Olympium
        </h2>
      </div>
      <div class="collapse-icon"
        :class="{ 'rotate-180': $store.state.collapsed }"
        @click="$store.commit('toggleBar')" >
        <div class="fas fa-angle-double-left" />
      </div>
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

<style lang="scss" scoped>
.sidebar {
  background-color: var(--sidebar-bg-color);
  color: white;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 0px 10px 10px 0px;

  transition: 0.45s;

  .sidebar-top {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0px;
    height: 70px;

    .sword {
      right: 0px;
      top: 0px;
    }

    .collapse-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: rgb(32, 32, 32);
      text-align: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      top: 27.5px;
      right: -14px;
      cursor: pointer;

      color: rgba(255, 255, 255, 0.7);

      transition: 0.4s linear;
    }

    .rotate-180 {
      transform: rotate(180deg);
    }
  }

  .title {
    text-align: center;
    font-weight: bold;
    color: rgb(4, 8, 1);
  }

  .line {
    align-content: center;
    border-bottom: solid #ccc;
    height: 1px;
    margin-right: 15px;
    margin-left: 15px;
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
}

.sidebar h1 {
  height: 2.5em;
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
