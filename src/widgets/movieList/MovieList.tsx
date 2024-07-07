import { headers } from '@app/api'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ui/MovieList.scss'

type IMovieList = {
	api: string
	parametr: string
	version: string
}

const MovieList: React.FC<IMovieList> = ({ api = '', parametr, version }) => {
	type TMovies = {
		kinopoiskId: number
		posterUrlPreview: string | null
		genres: string[]
		genre: string
		nameRu: string
	}

	const [movies, setMovies] = useState<TMovies | []>([])
	const [loading, setLoading] = useState<Boolean>(false)

	const fetchMovies = async () => {
		setLoading((current) => !current)

		try {
			const response = await axios.get(
				`https://kinopoiskapiunofficial.tech/api/${version}/films/${api}`,
				{ headers }
			)
			setMovies(response.data[parametr])
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
						<div
							key={movie.kinopoiskId}
							className='movie flex text-center flex-col items-center py-16 '
						>
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

							<h4 className='movie-title'>{movie.nameRu}</h4>

							<Link
								className='link-movie-details'
								to={`/movies/${movie.kinopoiskId}`}
							>
								Подробнее
							</Link>
						</div>
					))}
				</>
			)}
		</>
	)
}

export default MovieList
