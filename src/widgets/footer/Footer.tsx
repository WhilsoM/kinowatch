import Navigation from '@app/components/navigation/Navigation'
import './ui/Footer.scss'

import { useResize } from '@hooks/useResize'
import iconOnly from '/logo/icon-only.svg'
import logo from '/logo/logo-no-background.svg'

const Footer = () => {
	const width = useResize()

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='logo'>
					{width <= 640 ? (
						<img src={iconOnly} alt='logo' width={35} />
					) : (
						<img src={logo} alt='kinowatch logo' width={160} />
					)}
				</div>

				<Navigation />
			</div>
		</footer>
	)
}

export default Footer
