import MainContent from '@widgets/mainContent/MainContent'
import { useEffect, useState } from 'react'
import { LoadingScreen } from './components/loadingScreen/LoadingScreen'

const App = () => {
	const [isLoading, setIsLoading] = useState<Boolean>(true)

	useEffect(() => {
		document.body.classList.add('overflow-hidden')

		const deleteClassBody = setTimeout(() => {
			document.body.classList.remove('overflow-hidden')
		}, 1000)

		const timeout = setTimeout(() => {
			setIsLoading(false)
		}, 1000)

		return () => {
			clearTimeout(timeout)
			clearTimeout(deleteClassBody)
		}
	}, [])

	return <>{isLoading ? <LoadingScreen /> : <MainContent />}</>
}

export default App
