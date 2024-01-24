type HashtagItemProps = {
	company: string
	selectCompany : (company: string) => void;
}

export default function HashtagItem({company, selectCompany}: HashtagItemProps) {
	return (
		<li key={company}><button onClick={()=>{selectCompany(company)}}>#{company}</button></li>
	)
}
