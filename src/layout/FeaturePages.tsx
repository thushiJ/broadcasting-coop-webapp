import { useState } from 'react';
import ContentNavbar from '../components/ContentNavbar';
import FeaturePageSideBar from '../components/shared/FeaturePageSideBar';

function FeaturePages({ Content, navData, title }: any) {
	const [isActive, setIsActive] = useState(false);

	//toggle side bar
	const handleClick = (e: any) => {
		e.preventDefault();
		setIsActive((current) => !current);
	};
	return (
		<>
			<ContentNavbar handleClick={handleClick} title={title} />
			<FeaturePageSideBar isActive={isActive} navData={navData} />
			<div className='md:pl-[80px] pl-[60px] duration-500 p-2 mt-2 ml-8 z-20'>
				<Content />
			</div>
		</>
	);
}

export default FeaturePages;
