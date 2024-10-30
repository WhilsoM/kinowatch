import { animated, useSpring } from '@react-spring/web'
import imgScreen from '/logo/logo-no-background.svg'

export const LoadingScreen = () => {
	const springs = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
	})
	return (
		<animated.div
			className='loading-screen '
			style={{
				...springs,
			}}
		>
			<img src={imgScreen} alt='loading-screen' />
		</animated.div>
	)
}
