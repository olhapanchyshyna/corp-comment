import { useState } from 'react'
import { MAX_CHARATERS } from '../lib/constants'

type feedbackFormProps = {
	handleAddToList: (text: string) => void;
}

export default function FeedbackForm({ handleAddToList }: feedbackFormProps) {
	const [text, setText] = useState('')
	const charCount = MAX_CHARATERS - text.length

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = e.target.value

		if (newText.length > MAX_CHARATERS) {
			return
		} else {
			setText(newText)
		}
	}

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		handleAddToList(text)
		setText("")
	}

	return (
		<form onSubmit={(e)=>handleSubmit(e)} className='form'>
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
