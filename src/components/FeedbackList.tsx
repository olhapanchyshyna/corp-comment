import { TriangleUpIcon } from '@radix-ui/react-icons'

export default function FeedbackList() {
	return (
		<ol className='feedback-list'>
			<li className='feedback'>
				<button>
					<TriangleUpIcon />
					<span>593</span>
				</button>

				<div>
					<p>B</p>
				</div>

				<div>
					<p>ByteGrad</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s
					</p>
				</div>

				<p>4d</p>
			</li>
		</ol>
	)
}