<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  props: ['to', 'icon'],
  setup (props) {
    const isActive = computed(() => {
      return useRoute().name === props.to
    })
    return { isActive }
  }
}
</script>

<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!$store.state.collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.4em;
  padding: 1em;
  border-radius: 0.25em;
  height: 1.5em;

  color: white;
  text-decoration: none;
}

.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link.active {
  background-color: var(--sidebar-item-active);
}

.link .icon {
  width: 25;
  margin-right: 10px;
}
</style>
