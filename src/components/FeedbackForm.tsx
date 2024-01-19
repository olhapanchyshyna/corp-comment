import { useState } from 'react'
import { MAX_CHARATERS } from '../lib/constants'

export default function FeedbackForm() {
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

	return (
		<form className='form'>
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
