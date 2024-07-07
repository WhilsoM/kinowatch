import { Outlet } from 'react-router-dom'
import Footer from '../../widgets/footer/Footer'
import Header from '../../widgets/header/Header'

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
