import { useEffect, useState } from 'react'
import Container from './Container'
import Footer from './Footer'
import HashtagList from './HashtagList'
import { TFeedbackItem } from '../lib/types'

function App() {
	const [feedbackItem, setFeedbackItem] = useState<TFeedbackItem[]>([])
	const [isLoading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')


	const handleAddToList = (text: string) => {

		const companyName = text.split(' ').find((item)=> item.includes('#'))!

		const newItem: TFeedbackItem = {
			id: new Date().getTime(),
			upvoteCount: 0,
			companyName: companyName,
			badgeLetter: companyName.substring(1,2).toUpperCase(),
			text: text,
			daysAgo: 0,
		}

		setFeedbackItem([...feedbackItem, newItem])
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
			<Container feedbackItem={feedbackItem} isLoading={isLoading} errorMessage={errorMessage} handleAddToList={handleAddToList}/>
			<HashtagList />
		</div>
	)
}

export default App
