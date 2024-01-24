import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { TFeedbackItem } from '../lib/types'

type FeedbackItemsContextProviderProps = {
	children: ReactNode
}

type TFeedbackItemsContext = {
	feedbackItem: TFeedbackItem[]
	isLoading: boolean
	errorMessage: string
	setSelectCompany: Dispatch<SetStateAction<string>>
}
export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
	null
)

export default function FeedbackItemsContextProvider({
	children,
}: FeedbackItemsContextProviderProps) {
	const [feedbackItem, setFeedbackItem] = useState<TFeedbackItem[]>([])
	const [isLoading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [selectCompany, setSelectCompany] = useState('all')

	// const filteredFeedbackItem = useMemo(
	// 	() => selectCompany === 'all' ? feedbackItem : feedbackItem.filter(item => item.company === selectCompany),
	// 	[feedbackItem, selectCompany]
	// )

	// const companyList = useMemo(
	// 	() =>
	// 		feedbackItem
	// 			.map(item => item.company)
	// 			.filter((company, index, array) => array.indexOf(company) === index),
	// 	[feedbackItem]
	// )

	// const handleAddToList = async (text: string) => {
	// 	const companyName = text
	// 		.split(' ')
	// 		.find(word => word.includes('#'))!
	// 		.substring(1)

	// 	const newItem: TFeedbackItem = {
	// 		id: new Date().getTime(),
	// 		upvoteCount: 0,
	// 		company: companyName,
	// 		badgeLetter: companyName.substring(0, 1).toUpperCase(),
	// 		text: text,
	// 		daysAgo: 0,
	// 	}

	// 	setFeedbackItem([...feedbackItem, newItem])

	// 	await fetch(
	// 		'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
	// 		{
	// 			method: 'POST',
	// 			body: JSON.stringify(newItem),
	// 			headers: {
	// 				Accept: 'application/json',
	// 				'Content-Type': 'application/json',
	// 			},
	// 		}
	// 	)
	// }

	// useEffect(() => {
	// 	setLoading(true)
	// 	const fetchFeedbackItem = async () => {
	// 		try {
	// 			const response = await fetch(
	// 				'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
	// 			)

	// 			if (!response.ok) {
	// 				throw new Error()
	// 			}
	// 			const data = await response.json()

	// 			setFeedbackItem(data.feedbacks)
	// 		} catch (error) {
	// 			setErrorMessage('Something went wrong')
	// 		}
	// 		setLoading(false)
	// 	}
	// 	fetchFeedbackItem()
	// }, [])

	return (
		<FeedbackItemsContext.Provider
			value={{
				feedbackItem: filteredFeedbackItem,
				isLoading,
				errorMessage,
				setSelectCompany
			}}
		>
			{children}
		</FeedbackItemsContext.Provider>
	)
}


