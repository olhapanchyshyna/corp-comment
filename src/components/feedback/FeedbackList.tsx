import { useFeedbackItemsContext } from '../../lib/hooks'
import ErrorMessage from '../ErrorMessage'
import Spinner from '../Spinner'
import FeedbackItem from './FeedbackItem'


export default function FeedbackList() {
	const {feedbackItem,isLoading, errorMessage} = useFeedbackItemsContext()


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
