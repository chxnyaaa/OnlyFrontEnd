<script setup lang="ts">
import type { Event } from '@/type'
import { RouterLink } from 'vue-router'
import 'nprogress/nprogress.css'

defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink
    class="event-link"
    :to="{ name: 'event-detail-view', params: { id: event?.id } }"
  >
    <div class="event-card">
      <h2 class="event-name">{{ event?.name }}</h2>
      <span class="event-image">
        <img :src="event.flag" alt="Event Flag" />
      </span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-link {
  text-decoration: none; 
}

.event-card {
  cursor: pointer;
  border: 2px solid #b5e6c7; 
  border-radius: 8px; 
  padding: 20px; 
  width: 300px; 
  height: 250px;
  margin-bottom: 18px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9; 
  transition: transform 0.2s, box-shadow 0.2s; 
}

.event-card:hover {
  transform: scale(1.02); 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); 
}

.event-name {
  color: #3ca563; 
  font-size: 1.4em; 
  margin: 10px 0; 
  text-align: center; 
}

.event-image img {
  border-radius: 8px; 
  width: 100%; 
  height: auto; 
}
</style>
