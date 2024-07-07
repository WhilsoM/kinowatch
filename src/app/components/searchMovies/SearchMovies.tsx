import { headers } from '@app/api'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './ui/SearchMovies.scss'

interface ISearchMovies {
	filmId: number
	nameRu: string
	posterUrlPreview: string
	nameEn: string
}

export const SearchMovies = () => {
	const [movieRelease, setMovieRelease] = useState<ISearchMovies | []>([])
	const [isLoading, setIsLoading] = useState<Boolean>(false)
	const [movieSearch, setMovieSearch] = useState<string>('')

	const fetchMovies = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(
				`https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=2024&month=JUNE&page=2`,
				{ headers }
			)

			setMovieRelease(response.data.releases)
		} catch (error) {
			console.log('Error', error)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchMovies()
	}, [])

	if (isLoading) {
		return <div>Loading...</div>
	}

	const filteredMovies = movieRelease.filter((release: any) =>
		release.nameRu.toLowerCase().includes(movieSearch.toLowerCase())
	)

	return (
		<div className='flex justify-center items-center flex-col'>
			<input
				type='text'
				placeholder='Search movie...'
				onChange={(event) => setMovieSearch(event.target.value)}
				className='mb-4 text-2xl border-black border-2 py-2 px-3'
			/>

			<div className=' lg:grid lg:grid-cols-2 gap-5 xl:grid-cols-3'>
				{filteredMovies.map((release: any) => {
					return (
						<div className='mb-6' key={release.filmId}>
							<img
								loading='lazy'
								className='movie-search-img'
								src={release.posterUrlPreview}
								alt={release.nameEn}
							/>
							<h3 className='movie-title'>
								{release.nameRu === '' ? release.nameEn : release.nameRu}
							</h3>
						</div>
					)
				})}
			</div>
		</div>
	)
}
