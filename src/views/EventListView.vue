<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/type'
import { ref, onMounted, watchEffect, computed } from 'vue'
import EventService from '@/services/EventService'
import type { AxiosResponse } from 'axios'
import 'nprogress/nprogress.css'

const country = ref<Event[]>([])
const totalEvent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  eventsPerPage: {
    type: Number,
    required: true
  }
})
onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(props.eventsPerPage, props.page).then(
      (response: AxiosResponse<Event[]>) => {
        country.value = response.data
        totalEvent.value = parseInt(response.headers['x-total-count'])
      }
    )
  })
})
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / props.eventsPerPage)
  return props.page < totalPages && country.value.length > 0
})
</script>

<template>
  <div class="event-list-container">
    <h1 class="event-title">Olympics Reported</h1>
    <div class="event-cards-container">
      <EventCard v-for="event in country" :key="event.id" :event="event" />
    </div>
    <div class="pagination-controls">
      <RouterLink
        :to="{ name: 'event-list-view', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        class="pagination-button"
        id="page-prev"
      >
        Prev Page
      </RouterLink>
      <RouterLink
        :to="{ name: 'event-list-view', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        class="pagination-button"
        id="page-next"
      >
        Next Page
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.event-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9; 
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto; 
  width: 600px;
}

.event-title {
  font-size: 2em;
  color: #3ca563; /* Main color for the title */
  font-weight: bold;
  margin-bottom: 20px;
}

.event-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Spacing between cards */
  width: 100%;
  max-width: 800px;
}

.pagination-controls {
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin-top: 20px;
}

.pagination-button {
  font-size: 1em;
  color: #3ca563;
  text-decoration: none;
  padding: 8px 16px;
  border: 2px solid #3ca563;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.pagination-button:hover {
  background-color: #3ca563;
  color: white;
}
</style>

