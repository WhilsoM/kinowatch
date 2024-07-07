import { Route, Routes } from 'react-router-dom'

import Layout from '@app/components/Layout.tsx'
import { Home } from '@pages/home/Home.tsx'
import { MovieDetails } from '@pages/movieDetails/MovieDetails.tsx'
import { NotFoundPage } from '@pages/notFountPage/NotFoundPage.tsx'
import { Search } from '@pages/search/Search.tsx'

const MainContent = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='search' element={<Search />} />
					<Route path='*' element={<NotFoundPage />} />
					<Route path='movies/:id' element={<MovieDetails />} />
				</Route>
			</Routes>
		</>
	)
}

export default MainContent
