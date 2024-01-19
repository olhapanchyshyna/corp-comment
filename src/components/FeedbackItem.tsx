import { TriangleUpIcon } from '@radix-ui/react-icons'

// type FeedbackItem = {
// 	upvoteCount: number;
// 	companyLogo: string;
// 	company: string;
// 	text: string;
// 	days: string;
// }

export default function FeedbackItem({feedbackItem}) {
	return (
		<li className='feedback'>
			<button>
				<TriangleUpIcon />
				<span>{feedbackItem.upvoteCount}</span>
			</button>

			<div>
				<p>{feedbackItem.badgeLetter}</p>
			</div>

			<div>
				<p>{feedbackItem.companyName}</p>
				<p>
					
					{feedbackItem.text}
				</p>
			</div>

			<p>{feedbackItem.daysAgo}</p>
		</li>
	)
}
