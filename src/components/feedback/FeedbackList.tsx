import { useFeedbackItemsStore } from '../../stores/feedbackItemStore'
import ErrorMessage from '../ErrorMessage'
import Spinner from '../Spinner'
import FeedbackItem from './FeedbackItem'


export default function FeedbackList() {
	const {isLoading, errorMessage} = useFeedbackItemsStore()
	const filteredFeedbackItems = useFeedbackItemsStore((state) => state.getFilteredFeedbackItems())

	return (
		<ol className='feedback-list'>
			{isLoading ? (
				<Spinner />
			) : (
				filteredFeedbackItems.map(feedbackItem => (
					<FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
				))
			)}
			{errorMessage ? (
				<ErrorMessage message={errorMessage} />
			) : (
				filteredFeedbackItems.map(feedbackItem => (
					<FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
				))
			)}
		</ol>
	)
}
