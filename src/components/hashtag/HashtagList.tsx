import { useFeedbackItemsStore } from '../../stores/feedbackItemStore'
import HashtagItem from './HashtagItem'


export default function HashtagList() {
	const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
	const selectCompany = useFeedbackItemsStore((state => state.selectCompany))

	return (
		<ul className='hashtags'>
			{companyList.map((company: string) => {
				return (
					<HashtagItem key={company} company={company} selectCompany={selectCompany}/>
				)
			})}
		</ul>
	)
}

