import { useState } from 'react'
import { MAX_CHARATERS } from '../lib/constants'

export default function FeedbackForm() {

	const [text, setText] = useState('')
	const charCount = MAX_CHARATERS - text.length

	return (
		<form className='form'>
			<textarea
				id='feedback-textarea'
				placeholder='blabla'
				spellCheck={false}
				value={text}
				onChange={(e) => {
					const newText = e.target.value;
					
					if(newText.length > MAX_CHARATERS){
						return
					}else{
						setText(newText)
					}
					
					
				}}
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
