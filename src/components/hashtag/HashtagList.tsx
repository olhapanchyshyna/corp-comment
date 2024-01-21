
import { useFeedbackItemsContext } from '../../lib/hooks'
import HashtagItem from './HashtagItem'


export default function HashtagList() {
	const{companyList, setSelectCompany} = useFeedbackItemsContext()

	return (
		<ul className='hashtags'>
			{companyList.map((company: string) => {
				return (
					<HashtagItem key={company} company={company} setSelectCompany={setSelectCompany}/>
				)
			})}
		</ul>
	)
}

