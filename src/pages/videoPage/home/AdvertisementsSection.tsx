import  { useState } from 'react';
import AdsCard from './shared/AdsCard';

function AdvertisementsSection() {
	const data = [
		{
			id: 1,
			img: 'https://www.smartinsights.com/wp-content/uploads/2019/10/si_blog_banner.png',
		},
		{
			id: 2,
			img: 'https://marketplace.canva.com/EAFCh60VbhA/1/0/1600w/canva-blue-modern-digital-marketing-specialist-linkedin-banner-N6L0Wq0a5r8.jpg',
		},
	];

	const [ads, setAds] = useState(data);

	return (
		<div className='grid grid-cols-1 -mt-20 lg:grid-cols-2'>
			{ads.map((ad, i) => (
				<div key={i}>
					<AdsCard {...ad} />
				</div>
			))}
		</div>
	);
}

export default AdvertisementsSection;
