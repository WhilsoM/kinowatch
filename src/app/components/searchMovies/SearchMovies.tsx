import type { IMediaPosts } from '@/types/types'
import { headers } from '@app/api'
import { Input } from '@components/ui/input'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ui/SearchMovies.scss'

export const SearchMovies = () => {
	const [movieMediaPosts, setMovieMediaPosts] = useState<IMediaPosts[]>([])
	const [isLoading, setIsLoading] = useState<Boolean>(false)
	const [mediaPostSearch, setMovieSearch] = useState<string>('')

	const fetchMovies = async () => {
		setIsLoading(true)
		try {
			const response = await axios.get(
				`https://kinopoiskapiunofficial.tech/api/v1/media_posts`,
				{ headers }
			)
			console.log(response.data.items)

			setMovieMediaPosts(response.data.items)
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

	const filteredPosts = movieMediaPosts.filter((release: any) =>
		release.title.toLowerCase().includes(mediaPostSearch.toLowerCase())
	)

	return (
		<div className='flex justify-center items-center flex-col'>
			<Input
				type='text'
				placeholder='Search movie...'
				onChange={(event) => setMovieSearch(event.target.value)}
				className='mb-4 text-2xl border-black border-2 py-6 px-5 max-w-full'
			/>

			<div className=' lg:grid lg:grid-cols-2 gap-5 xl:grid-cols-3'>
				{filteredPosts.map((post: any) => (
					<div className='mb-6 p-6 ' key={post.kinopoiskId}>
						<img
							loading='lazy'
							className='movie-search-img'
							src={post.imageUrl}
							alt={post.nameEn}
						/>
						<h3 className='movie-title'>{post.title}</h3>
						<Link to={post.url} target='_blank'>
							смотреть!
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}
