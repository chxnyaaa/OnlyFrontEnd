<script setup lang="ts">
import type { Event } from '@/type'
import type { PropType } from 'vue'
import 'nprogress/nprogress.css'
//  import { count } from 'console';

defineProps({
  event: {
    type: Object as PropType<Event>,
    required: true
  }
})
</script>

<template>
  <div v-if="event">
    <br>
    <p>{{ event.flag }}</p>
    <p>{{ event.name }}</p><br>
    <p>{{ event.description }}</p>
  </div>
</template>
