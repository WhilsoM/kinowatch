import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
	return (
		<>
			<h2 className='title'>Страница не найдена!</h2>
			<div className='text-center'>
				<Link to='/' className='text-3xl'>
					Вернуться на Главную?
				</Link>{' '}
			</div>
		</>
	)
}
