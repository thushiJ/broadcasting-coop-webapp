import { useState } from 'react';

import LandingRadio from '../../../Assets/Images/Radio Landing page.png';
import LandingLiveTv from '../../../Assets/Images/Live TVLanding page.png';
import Music from '../../../Assets/Images/music.png';
import PPV from '../../../Assets/Images/payperview.png';
import Podcast from '../../../Assets/Images/podcast.png';
import LandingGridCard from './shared/LandingGridCard';

function LandingCardSection() {
	const landingCards = [
		{
			id: 1,
			theme: 'dark',
			title: 'Music',
			info: 'Watch movies and shows anytime anywhere personalized for you',
			img: { Music },
		},
		{
			id: 2,
			theme: 'light',
			title: 'Radio',
			info: 'Watch movies and shows anytime anywhere personalized for you ',
			img: { LandingRadio },
		},
		{
			id: 3,
			theme: 'dark',
			title: 'LiveTv',
			info: 'Watch movies and shows anytime anywhere personalized for you ',
			img: { LandingLiveTv },
		},
		{
			id: 4,
			theme: 'dark',
			title: 'PayPerView',
			info: 'Watch movies and shows anytime anywhere personalized for you ',
			img: { PPV },
		},
		{
			id: 5,
			theme: 'light',
			title: 'Podcast',
			info: 'Watch movies and shows anytime anywhere personalized for you ',
			img: { Podcast },
		},
	];

	const [landingCardDetails, setCardDetails] = useState(landingCards);
	return (
		<div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  mb-10 mt-10 w-[60%] mx-auto'>
			{landingCardDetails.map((card) => (
				<div
					key={card.id}
					className={`${card.id === 1 ? 'row-span-2 h-full' : ''}`}
				>
					<LandingGridCard {...card} />
				</div>
			))}
		</div>
	);
}

export default LandingCardSection;
