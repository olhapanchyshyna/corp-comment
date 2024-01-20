import HashtagItem from './HashtagItem'

type hashtagListProps = {
	companyList: string[]
	setSelectCompany: React.Dispatch<React.SetStateAction<string>>
}

export default function HashtagList({companyList, setSelectCompany}:hashtagListProps) {
	return (
		<ul className='hashtags'>
			{companyList.map((company: string) => {
				return (
					<HashtagItem company={company} setSelectCompany={setSelectCompany}/>
				)
			})}
		</ul>
	)
}

