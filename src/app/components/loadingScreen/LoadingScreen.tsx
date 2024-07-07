import { animated, useSpring } from '@react-spring/web'
import imgScreen from '/logo/logo-no-background.svg'

export const LoadingScreen = () => {
	const springs = useSpring({
		from: { x: 0, opacity: 0 },
		to: { x: 100, opacity: 1 },
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
