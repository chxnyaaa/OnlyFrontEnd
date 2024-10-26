<script setup lang="ts">
import { RouterView, useRoute, RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useEventStore } from '@/stores/event'
import 'nprogress/nprogress.css'

const store = useEventStore()
const { event } = storeToRefs(store)

const route = useRoute()
</script>

<template>
  <div v-if="event" class="container">
    <h1 class="event-title">{{ event.name }}</h1>

    <nav class="nav">
      <RouterLink
        :to="{ name: 'event-detail-view' }"
        :class="{ active: route.name === 'event-detail-view' }"
      >Details</RouterLink>
      <RouterLink
        :to="{ name: 'event-register-view' }"
        :class="{ active: route.name === 'event-register-view' }"
      >Sports</RouterLink>
      <RouterLink
        :to="{ name: 'event-edit-view' }"
        :class="{ active: route.name === 'event-edit-view' }"
      >Comment</RouterLink>
    </nav>

    <RouterView :event="event"></RouterView>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.event-title {
  text-align: center;
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.nav a {
  color: #666;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav a:hover {
  background-color: #e8f5e9;
}

.nav a.active {
  color: #000000;
  background-color: #c6eed4;
  font-weight: bold;
}
</style>
