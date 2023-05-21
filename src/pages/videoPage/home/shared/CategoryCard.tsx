import { Link } from 'react-router-dom';

function CategoryCard({ data }: any) {
	//category card in movie page
	return (
		<Link to={`/video/discover/${data.id}`}>
			<div className='button-red w-[90%] rounded flex items-center h-24 cursor-pointer'>
				<h1 className='mx-auto text-xl font-bold white-text'>{data.name}</h1>
			</div>
		</Link>
	);
}

export default CategoryCard;
