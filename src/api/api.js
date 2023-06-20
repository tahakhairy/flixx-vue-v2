const api = {
  API_KEY: '808ebf564e646d17112bbb99f33d7d2e',
  BASE_URL: 'https://api.themoviedb.org/3/'
}

async function fetchApiData(endpoint) {
  const response = await fetch(`${api.BASE_URL}${endpoint}?api_key=${api.API_KEY}&language=en-US`)

  const data = await response.json()

  return data
}

export default fetchApiData
