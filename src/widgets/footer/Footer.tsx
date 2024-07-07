import Navigation from '@app/components/navigation/Navigation'
import './ui/Footer.scss'
import logo from '/logo/logo-no-background.svg'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='logo'>
					<img src={logo} alt='logo' width={160} />
				</div>

				<Navigation />
			</div>
		</footer>
	)
}

export default Footer
