import type { TEvent } from '@/types/types'
import { useEffect, useState } from 'react'

export const useResize = () => {
	const [width, setWidth] = useState<number>(window.innerWidth)

	useEffect(() => {
		const handleResize = (event: TEvent) => {
			setWidth(event.target.innerWidth)
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return width
}
