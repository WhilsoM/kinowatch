import Navigation from '@app/components/navigation/Navigation'
import './ui/Header.scss'

import iconOnly from '/logo/icon-only.svg'
import logo from '/logo/logo-no-background.svg'

import { useResize } from '@hooks/useResize.ts'

const Header = () => {
	const width = useResize()

	return (
		<header className='header'>
			<div className='wrapper container'>
				<div className='logo'>
					{width <= 640 ? (
						<img src={iconOnly} alt='logo' width={35} />
					) : (
						<img src={logo} alt='kinowatch logo' width={160} />
					)}
				</div>

				<Navigation />
			</div>
		</header>
	)
}

export default Header
