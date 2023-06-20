import { createRouter, createWebHistory } from 'vue-router'
import TvShows from '@/screens/TvShows.vue'
import MoviesView from '@/screens/MoviesView.vue'
import TvShowDetails from '@/screens/TvShowDetails.vue'
import MovieDetails from '@/screens/MovieDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MoviesView
  },
  {
    path: '/tv-shows',
    name: 'tvshows',
    component: TvShows
  },
  {
    path: '/show-details/',
    name: 'show details',
    component: TvShowDetails
  },
  {
    path: '/movie-details/:id',
    name: 'movie details',
    component: MovieDetails
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
