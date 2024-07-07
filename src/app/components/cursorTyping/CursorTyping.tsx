import { useEffect, useRef, useState } from 'react'

export const CursorTyping = () => {
	const typedTextRef = useRef(null)
	const cursorRef = useRef(null)
	const [timeoutId, setTimeoutId] = useState(null)

	const textArray = [
		'is super',
		'fun',
		'clear',
		'safe',
		'movies',
		'quality',
		'is awesome',
	]
	const typingDelay = 200
	const erasingDelay = 100
	const newTextDelay = 2000
	let textArrayIndex = 0
	let charIndex = 0

	function type() {
		if (charIndex < textArray[textArrayIndex].length) {
			if (!cursorRef.current.classList.contains('typing'))
				cursorRef.current.classList.add('typing')
			typedTextRef.current.textContent +=
				textArray[textArrayIndex].charAt(charIndex)
			charIndex++
			setTimeoutId(setTimeout(type, typingDelay))
		} else {
			cursorRef.current.classList.remove('typing')
			setTimeoutId(setTimeout(erase, newTextDelay))
		}
	}

	function erase() {
		if (charIndex > 0) {
			if (!cursorRef.current.classList.contains('typing'))
				cursorRef.current.classList.add('typing')
			typedTextRef.current.textContent = textArray[textArrayIndex].substring(
				0,
				charIndex - 1
			)
			charIndex--
			setTimeoutId(setTimeout(erase, erasingDelay))
		} else {
			cursorRef.current.classList.remove('typing')
			textArrayIndex++
			if (textArrayIndex >= textArray.length) textArrayIndex = 0
			setTimeoutId(setTimeout(type, typingDelay + 1100))
		}
	}

	useEffect(() => {
		if (textArray.length) setTimeoutId(setTimeout(type, newTextDelay + 250))

		return () => clearTimeout(timeoutId)
	}, [])

	return (
		<p>
			<span ref={typedTextRef} className='typed-text'></span>
			<span ref={cursorRef} className='cursor'>
				&nbsp;
			</span>
		</p>
	)
}
