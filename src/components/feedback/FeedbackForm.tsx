import { useState } from 'react'
import { MAX_CHARATERS } from '../../lib/constants'
import { useFeedbackItemsContext } from '../../lib/hooks'


export default function FeedbackForm(){
	const {handleAddToList} = useFeedbackItemsContext()

	const [text, setText] = useState('')
	const [showValidIndicator, setShowValidIndicator] = useState(false)
	const [showInvalidIndicator, setShowInvalidIndicator] = useState(false)

	const charCount = MAX_CHARATERS - text.length

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = e.target.value

		if (newText.length > MAX_CHARATERS) {
			return
		} else {
			setText(newText)
		}
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if(text.includes('#')){
			setShowValidIndicator(true)
			handleAddToList(text)
			setText('')
			setTimeout(() => {
				setShowValidIndicator(false)
			}, 2000)
		}else{
			setShowInvalidIndicator(true)
			setTimeout(() => {
				setShowInvalidIndicator(false)
			}, 2000)
			return
		}		
		
	}

	return (
		<form onSubmit={handleSubmit} className={`form ${showValidIndicator ? 'form--valid' : '' } ${showInvalidIndicator ? 'form--invalid' : '' }`}>
			<textarea
				id='feedback-textarea'
				placeholder='blabla'
				spellCheck={false}
				value={text}
				onChange={handleChange}
			/>
			<label htmlFor='feedback-textarea'>
				Enter your feedback here, remember to #hashtag the company
			</label>
			<div>
				<p className='u-italic'>{charCount}</p>
				<button>
					<span>Submit</span>
				</button>
			</div>
		</form>
	)
}
