<script setup lang="ts">
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useEventStore } from '@/stores/event'
import 'nprogress/nprogress.css'

const store = useEventStore()
const { event } = storeToRefs(store)
</script>

<template>
  <div v-if="event">
    <h1>{{ event.name }}</h1>

    <div id="nav">
      <RouterLink :to="{ name: 'event-detail-view' }">Details</RouterLink> |
      <RouterLink :to="{ name: 'event-register-view' }">Sports</RouterLink> |
      <RouterLink :to="{ name: 'event-edit-view' }">Comment</RouterLink>
    </div>

    <RouterView :event="event"></RouterView>
  </div>
</template>
