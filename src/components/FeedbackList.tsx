import { useEffect, useState } from 'react'
import FeedbackItem from './FeedbackItem'
import Spinner from './Spinner'

export default function FeedbackList() {
	const [feedbackItem, setFeedbackItem] = useState([])
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch(
			'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
		)
			.then(response => {
				return response.json()
			})
			.then(data => {
				setFeedbackItem(data.feedbacks)
				setLoading(false)
			})
	}, [])

	return (
		<ol className='feedback-list'>
			{isLoading ? <Spinner/> : feedbackItem.map(feedbackItem => (
				<FeedbackItem feedbackItem={feedbackItem} />
			))
		
		}
			
		</ol>
	)
}
