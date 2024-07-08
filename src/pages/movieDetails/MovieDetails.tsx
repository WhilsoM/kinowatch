import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { headers } from '@app/api/index'
import '@pages/movieDetails/ui/MovieDetails.scss'

export const MovieDetails: React.FC = () => {
	interface ICountry {
		country: string
	}

	interface IGenre {
		genre: string
	}

	interface IMovieDetails {
		posterUrl: string | null
		nameRu: string
		year: number
		countries: ICountry[]
		genres: IGenre[]
		slogan: string
		filmLength: number
		webUrl: string
	}

	const { id } = useParams<{ id: string }>()
	const [movie, setMovie] = useState<IMovieDetails | null>(null)
	const [countries, setCountries] = useState<ICountry[]>([])
	const [genres, setGenres] = useState<IGenre[]>([])

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				const response: any = await axios.get(
					`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
					{ headers }
				)

				setMovie(response.data)
				setCountries(response.data.countries)
				setGenres(response.data.genres)
			} catch (error) {
				console.error('Error fetching movie details:', error)
			}
		}

		fetchMovieDetails()
	}, [id])

	const formatDuration = (duration: number): string => {
		const hours = Math.floor(duration / 60)
		const minutes = duration % 60
		return `${hours} ч ${minutes} мин`
	}

	if (!movie) {
		return <div>Loading...</div>
	}

	return (
		<>
			<div className='movie-details sm:flex-row lg:items-start'>
				<div className='img-movie'>
					<img src={movie.posterUrl || ''} alt={movie.nameRu || ''} />
				</div>

				<div className='about-movie'>
					<h1 className='title '>{movie.nameRu}</h1>

					<h2 className='subtitle'>О фильме</h2>

					<div className='info-movie'>
						<p>
							Год производства: <span>{movie.year}</span>
						</p>
						<p>
							Страна:{' '}
							<span>
								{countries.map((country) => (
									<span key={country.country}>{country.country}</span>
								))}
							</span>
						</p>
						<p>
							Жанр:{' '}
							<span>
								{genres.map((genre, index) => (
									<span key={genre.genre}>
										{genre.genre}
										{index !== genres.length - 1 && ', '}
									</span>
								))}
							</span>
						</p>
						<p>Слоган: {movie.slogan} </p>
						<p>Длительность: {formatDuration(movie.filmLength)}</p>
						<p>
							Смотреть фильм:{' '}
							<Link to={movie.webUrl} target='_blank'>
								клик!
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
