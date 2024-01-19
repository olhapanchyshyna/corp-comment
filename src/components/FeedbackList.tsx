import { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage'
import FeedbackItem from './FeedbackItem'
import Spinner from './Spinner'

export default function FeedbackList() {
	const [feedbackItem, setFeedbackItem] = useState([])
	const [isLoading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

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
		<ol className='feedback-list'>
			{isLoading ? (
				<Spinner />
			) : (
				feedbackItem.map(feedbackItem => (
					<FeedbackItem feedbackItem={feedbackItem} />
				))
			)}
			{errorMessage ? (
				<ErrorMessage message={errorMessage} />
			) : (
				feedbackItem.map(feedbackItem => (
					<FeedbackItem feedbackItem={feedbackItem} />
				))
			)}
		</ol>
	)
}
