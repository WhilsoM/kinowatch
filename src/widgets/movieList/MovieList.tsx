import type { TMovieList, TObject } from '@/types/types'
import { headers } from '@app/api'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ui/MovieList.scss'

const MovieList: React.FC<TMovieList> = ({ api = '', parametr, version }) => {
	const [movies, setMovies] = useState<TObject | []>([])
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
					{movies.map((movie: any) => (
						<div
							key={movie.kinopoiskId}
							className='movie flex text-center flex-col items-center p-6 '
						>
							<img
								loading='lazy'
								src={movie.posterUrlPreview}
								alt={movie.nameRu}
							/>

							<div className='genres'>
								{movie.genres.map((genre: any) => (
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
