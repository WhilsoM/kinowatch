import { NavLink } from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
	return (
		<nav className='nav'>
			<ul className='nav-list'>
				<li className='nav-list__item'>
					<NavLink to='/' className='nav-list__link'>
						Главная
					</NavLink>
				</li>
				<li className='nav-list__item'>
					<NavLink to='search' className='nav-list__link'>
						Найти фильм
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
