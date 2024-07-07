import { headers } from '@pages/home/api/index.js'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Movies() {
	const [movies, setMovies] = useState([])
	const [loading, setLoading] = useState(false)

	const fetchMovies = async () => {
		setLoading((current) => !current)

		try {
			const response = await axios.get(
				'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections',
				{ headers }
			)

			setMovies(response.data.items)
		} catch (error) {
			console.log('Error', error)
		} finally {
			setLoading((current) => !current)
		}
	}

	useEffect(() => {
		fetchMovies()
	}, [])

	return (
		<>
			{loading && 'Loading...'}

			{!loading && (
				<>
					{movies.map((movie) => (
						<div key={movie.kinopoiskId} className='movie'>
							<img
								loading='lazy'
								src={movie.posterUrlPreview}
								alt={movie.nameRu}
							/>
							<div className='genres'>
								{movie.genres.map((genre) => (
									<p key={genre.genre}>{genre.genre}</p>
								))}
							</div>
							<h4>{movie.nameRu}</h4>

							<Link to={`/movies/${movie.kinopoiskId}`}>Подробнее</Link>
						</div>
					))}
				</>
			)}
		</>
	)
}

export default Movies
