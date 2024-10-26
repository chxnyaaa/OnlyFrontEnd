<script setup lang="ts">
import type { Event } from '@/type'
import type { PropType } from 'vue'
import 'nprogress/nprogress.css'

defineProps({
  event: {
    type: Object as PropType<Event>,
    required: true
  }
})
</script>

<template>
  <div v-if="event" class="event-container">
    <img :src="event.flag" class="event-flag" alt="Event Flag" />
    <h2 class="event-name">{{ event.name }}</h2>
    <p class="event-description">{{ event.description }}</p>
  </div>
</template>

<style scoped>
.event-container {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  background-color: #f9f9f9; 
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto; 
  text-align: center;
  width: 600px; 
}

.event-flag {
  /* border: 2px solid;  */
  border-radius: 8px;
  padding: 10px;
  width: 250px;
  height: auto; 
}

.event-name {
  margin: 10px 0 5px; 
  color: #3ca563;
}

.event-description {
  color: #555; 
  font-size: 1em; 
  line-height: 1.5; 
  width: 500px; 
}
</style>
