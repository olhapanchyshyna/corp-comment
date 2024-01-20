import { TFeedbackItem } from '../lib/types'
import ErrorMessage from './ErrorMessage'
import FeedbackItem from './FeedbackItem'
import Spinner from './Spinner'

type feedbackListProps = {
	isLoading: boolean, 
	errorMessage: string
	feedbackItem: TFeedbackItem[]
}

export default function FeedbackList({feedbackItem, isLoading, errorMessage}: feedbackListProps) {
	return (
		<ol className='feedback-list'>
			{isLoading ? (
				<Spinner />
			) : (
				feedbackItem.map(feedbackItem => (
					<FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
				))
			)}
			{errorMessage ? (
				<ErrorMessage message={errorMessage} />
			) : (
				feedbackItem.map(feedbackItem => (
					<FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
				))
			)}
		</ol>
	)
}
