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
    class="text-gray-700 no-underline"
    :to="{ name: 'event-detail-view', params: { id: event?.id } }"
  >
    <div
      class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-[1.01] hover:shadow-sp flex flex-col justify-center items-center"
    >
      <h2>{{ event?.name }}</h2>
      <span>
        <img :src="event.flag" alt="">
      </span>
    </div>
  </RouterLink>
</template>

<style scoped></style>