import { TFeedbackItem } from '../../lib/types'
import FeedbackList from '../feedback/FeedbackList'
import Header from './Header'

type containerProps = {
	isLoading: boolean
	errorMessage: string
	feedbackItem: TFeedbackItem[]
	handleAddToList: (text: string) => void
}

export default function Container({
	feedbackItem,
	isLoading,
	errorMessage,
	handleAddToList,
}: containerProps) {
	return (
		<div className='container'>
			<Header handleAddToList={handleAddToList} />
			<FeedbackList
				feedbackItem={feedbackItem}
				isLoading={isLoading}
				errorMessage={errorMessage}
			/>
		</div>
	)
}
