import { useEffect, useState } from 'react'
import { TFeedbackItem } from '../lib/types'
import Container from './Container'
import Footer from './Footer'
import HashtagList from './HashtagList'

function App() {
	const [feedbackItem, setFeedbackItem] = useState<TFeedbackItem[]>([])
	const [isLoading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const handleAddToList = async (text: string) => {
		const companyName = text
			.split(' ')
			.find(word => word.includes('#'))!
			.substring(1)

		const newItem: TFeedbackItem = {
			id: new Date().getTime(),
			upvoteCount: 0,
			company: companyName,
			badgeLetter: companyName.substring(0, 1).toUpperCase(),
			text: text,
			daysAgo: 0,
		}

		setFeedbackItem([...feedbackItem, newItem])

		await fetch(
			'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
			{
				method: 'POST',
				body: JSON.stringify(newItem),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}
		);
		
	}

	useEffect(() => {
		setLoading(true)
		const fetchFeedbackItem = async () => {
			try {
				const response = await fetch(
					'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
				)

				if (!response.ok) {
					throw new Error()
				}
				const data = await response.json()

				setFeedbackItem(data.feedbacks)
			} catch (error) {
				setErrorMessage('Something went wrong')
			}
			setLoading(false)
		}
		fetchFeedbackItem()
	}, [])

	return (
		<div className='app'>
			<Footer />
			<Container
				feedbackItem={feedbackItem}
				isLoading={isLoading}
				errorMessage={errorMessage}
				handleAddToList={handleAddToList}
			/>
			<HashtagList />
		</div>
	)
}

export default App
