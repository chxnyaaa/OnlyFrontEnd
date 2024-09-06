import axios, { type AxiosResponse } from 'axios'
import type { Event } from '@/type'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/DeformiaR/lab2-14',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: Number, page: Number): Promise<AxiosResponse<Event[]>> {
    return apiClient.get<Event[]>(`/events?_limit=${perPage}&_page=${page}`)
  },

  getEventById(id: Number): Promise<AxiosResponse<Event>> {
    return apiClient.get<Event>(`/events/${id}`)
  }
}
