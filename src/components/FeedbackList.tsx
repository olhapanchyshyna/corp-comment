import { useEffect, useState } from 'react'
import FeedbackItem from './FeedbackItem'

// const feedbackItem = [
// 	{
// 		upvoteCount: 593,
// 		badgeLetter: 'B',
// 		companyName:'ByteGrad',
// 		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s",
// 		daysAgo: 4
// 	},
// 	{
// 		upvoteCount: 239,
// 		badgeLetter: 'MD',
// 		companyName:'McDonalds',
// 		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since  the 1500s",
// 		daysAgo: 12
// 	}
// ]

export default function FeedbackList() {
	const [feedbackItem, setFeedbackItem] = useState([])

	useEffect(() => {
		fetch(
			'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
		).then(response => {return response.json()})
		.then((data) => {setFeedbackItem(data.feedbacks)})
	}, [])

	return (
		<ol className='feedback-list'>
			{feedbackItem.map(feedbackItem => (
				<FeedbackItem feedbackItem={feedbackItem} />
			))}
		</ol>
	)
}
