<template>
  <div>
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/shared/presentation/components/app-header.component.vue'

export default {
  name: 'App',
  components: { AppHeader }
}
</script>