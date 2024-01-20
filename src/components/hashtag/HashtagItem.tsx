type HashtagItemProps = {
	company: string
	setSelectCompany: React.Dispatch<React.SetStateAction<string>>
}

export default function HashtagItem({company, setSelectCompany}: HashtagItemProps) {
	return (
		<li key={company}><button onClick={()=>{setSelectCompany(company)}}>#{company}</button></li>
	)
}
