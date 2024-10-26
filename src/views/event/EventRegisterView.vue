<script setup lang="ts">
import type { Event } from '@/type'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import 'nprogress/nprogress.css'

const props = defineProps<{
  event: Event
}>()

// Computed property to sum the medals
const totalMedals = computed(() => {
  return props.event.sports.reduce(
    (acc, sport) => {
      acc.gold += sport.gold || 0;   // Ensure a default of 0 if undefined
      acc.silver += sport.silver || 0;
      acc.bronze += sport.bronze || 0;
      return acc;
    },
    { gold: 0, silver: 0, bronze: 0 } // Initial accumulator values
  )
})
</script>

<template>
  <div v-if="event" class="table-container">
    <table class="styled-table">
      <thead>
        <tr>
          <th>Sport</th>
          <th>Gold</th>
          <th>Silver</th>
          <th>Bronze</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sport, index) in event.sports" :key="index">
          <td>{{ sport.name }}</td>
          <td>{{ sport.gold }}</td>
          <td>{{ sport.silver }}</td>
          <td>{{ sport.bronze }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>{{ totalMedals.gold }}</th>
          <th>{{ totalMedals.silver }}</th>
          <th>{{ totalMedals.bronze }}</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.styled-table {
  width: 80%;
  border-collapse: collapse;
  margin: 0 auto;
  font-size: 1.1em;
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.styled-table thead {
  background-color: #3ca563;
  color: #fff;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

.styled-table tbody tr:hover {
  background-color: rgba(175, 215, 190, 0.2);
}

.styled-table tfoot {
  background-color: #cef9de;
  color: #000000;
  font-weight: bold;
}

.styled-table tfoot th {
  border-top: 2px solid #fff;
}
</style>
