import { useState, useEffect } from "react"

// using hooks allows me paginate easy,
// thats why I use a hook,
// but nyt has no pagination

export default function useMovies () {
  const [movies, setMovies] = useState([])

  async function updateMoviesPage () {
    const response = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=big&api-key=9FLUS2fgswi6DRbQb5TbguYkxUAUe8Gi`)
    const data = await response.json()
    setMovies(data.results)
  }

  useEffect(() => {
    updateMoviesPage()
  }, [])

  return [movies, updateMoviesPage]
}