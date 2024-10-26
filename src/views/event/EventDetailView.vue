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
  <div v-if="event" class="flex flex-col justify-center items-center">
    <br>
    <!-- Next time use Image tag!! -->
    <img :src="event.flag" alt="">
    <p>{{ event.name }}</p><br>
    <p>{{ event.description }}</p>
  </div>
</template>