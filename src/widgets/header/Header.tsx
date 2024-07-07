import { CursorTyping } from '@app/components/cursorTyping/CursorTyping'
import Navigation from '@app/components/navigation/Navigation'
import './ui/Header.scss'

import logo from '/logo/logo-no-background.svg'

const Header = () => {
	return (
		<header className='header'>
			<div className='wrapper container'>
				<div className='logo'>
					<img src={logo} alt='kinowatch logo' width={160} />
				</div>

				<div className='text'>
					<CursorTyping />
				</div>

				<Navigation />
			</div>
		</header>
	)
}

export default Header
