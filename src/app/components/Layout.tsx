import Footer from '@widgets/footer/Footer'
import Header from '@widgets/header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
	return (
		<>
			<Header />

			<main className='container'>
				<Outlet />
			</main>

			<Footer />
		</>
	)
}

export default Layout
