import MovieList from '@widgets/movieList/MovieList.js'
import './ui/Home.scss'

export const Home = () => {
	return (
		<>
			<h2 className='title'>Фильмы к просмотру</h2>

			<div className='wrapper-movies lg:grid lg:grid-cols-2 xl:grid-cols-3'>
				<MovieList api='collections' parametr='items' version='v2.2' />
			</div>
		</>
	)
}
