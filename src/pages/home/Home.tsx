import Movies from '@widgets/movieList/MovieList.js'
import './ui/Home.scss'

export const Home = () => {
	return (
		<>
			<h2 className='title'>Фильмы к просмотру</h2>

			<div className='wrapper-movies'>
				<Movies />
			</div>
		</>
	)
}
