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
		fetch(
			'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
		)
			.then(response => {
				if (!response.ok) {
					throw new Error()
				}
				return response.json()
			})
			.then(data => {
				setFeedbackItem(data.feedbacks)
				setLoading(false)
			})
			.catch(() => {
				setErrorMessage('Something went wrong')
				setLoading(false)
			})
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
			{errorMessage ? <ErrorMessage message={errorMessage} /> : feedbackItem.map(feedbackItem => (
					<FeedbackItem feedbackItem={feedbackItem} />
				))}
		</ol>
	)
}
