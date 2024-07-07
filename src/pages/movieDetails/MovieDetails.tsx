import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { headers } from '@pages/home/api/index.ts'
import '@pages/movieDetails/ui/MovieDetails.scss'

interface IMovieDetails {
	posterUrl: null
	nameRu: string
	year: number
	countries: string[]
	country: string
	genres: string[]
	genre: string
	slogan: string
	filmLength: number
	webUrl: string
}

export const MovieDetails = () => {
	const { id } = useParams()
	const [movie, setMovie] = useState([])
	const [countries, setCountries] = useState([])
	const [genres, setGenres] = useState([])

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				const response = await axios.get(
					`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
					{ headers }
				)

				setMovie(response.data)
				setCountries(response.data.countries)
				setGenres(response.data.genres)
				console.log(response.data)
			} catch (error) {
				console.error('Error fetching movie details:', error)
			}
		}

		fetchMovieDetails()
	}, [id])

	const formatDuration = (duration: number) => {
		const hours = Math.floor(duration / 60)
		const minutes = duration % 60
		return `${hours} ч ${minutes} мин`
	}

	if (!movie) {
		return <div>Loading...</div>
	}

	return (
		<>
			<div className='movie-details'>
				<div className='img-movie'>
					<img src={movie.posterUrl} alt={movie.nameRu} />
				</div>

				<div className='about-movie'>
					<h1 className='title'>{movie.nameRu}</h1>

					<h2 className='subtitle'>О фильме</h2>

					<div className='info-movie'>
						<p>
							Год производства: <span>{movie.year}</span>
						</p>
						<p>
							Страна:
							<span>
								{countries.map((country) => (
									<span key={country.country}>{country.country}</span>
								))}
							</span>
						</p>
						<p>
							Жанр:
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
						<p>
							Длительность:
							{formatDuration(movie.filmLength)}
						</p>
						<p>
							Смотреть фильм:
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
