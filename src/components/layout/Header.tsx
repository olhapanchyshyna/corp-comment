import FeedbackForm from '../feedback/FeedbackForm'
import Logo from '../Logo'
import PageHeading from '../PageHeading'
import Pattern from '../Pattern'

type headerProps = {
	handleAddToList: (text: string) => void
}

export default function Header({ handleAddToList }: headerProps) {
	return (
		<header>
			<Pattern />
			<Logo />
			<PageHeading />
			<FeedbackForm handleAddToList={handleAddToList} />
		</header>
	)
}
