import React, { useState } from 'react';
import GridCard from './GridCard';
function CardGridSection() {
	const cards = [
		{
			id: 1,
			time: '1h 18m',
			info: 'Lady Gaga The Art of Music ',
			year: '2019',
			type: 'Documentary',
			img: 'https://apollohou.com/wp-content/uploads/y0fmiq96uu871.jpg',
		},
		{
			id: 2,
			time: '2h 48m',
			info: 'Lady Gaga The Art of Music ',
			year: '2019',
			type: 'Documentary',
			img: 'https://www.scrolldroll.com/wp-content/uploads/2022/04/Doctor-strange-Hollywood-movies-releasing-in-may-2022.webp',
		},
		{
			id: 3,
			time: '1h 32m',
			info: 'Lady Gaga The Art of Music ',
			year: '2019',
			type: 'Documentary',
			img: 'https://qqcdnpictest.mxplay.com/pic/484f535d77542bca63e21efb896f4cd6/en/2x3/320x480/test_pic1638541013780.webp',
		},
		{
			id: 4,
			time: '2h 18m',
			info: 'Lady Gaga The Art of Music',

			year: '2019',
			type: 'Documentary',
			img: 'https://qqcdnpictest.mxplay.com/pic/cda6ced62b423d4a51c8e817f31d8067/en/2x3/320x480/test_pic1583329887991.webp',
		},
		{
			id: 5,
			time: '2h 30m',
			info: 'Lady Gaga The Art of Music ',
			year: '2019',
			type: 'Documentary',
			img: 'https://www.bollymoviereviewz.com/wp-content/uploads/2013/05/330px-Fantastic_Beasts2C_The_Secrets_of_Dumbledore_teaser_poster.png',
		},
		{
			id: 6,
			time: '1h 18m',
			info: 'Lady Gaga The Art of Music ',
			year: '2019',
			type: 'Documentary',
			img: 'https://assets.gadgets360cdn.com/pricee/assets/product/202205/jurassic_world_dominion_poster_1652087377.jpeg',
		},
		{
			id: 7,
			time: '2h 20m',
			info: 'Lady Gaga The Art of Music ',
			year: '2019',
			type: 'Documentary',
			img: 'https://img.republicworld.com/republic-prod/stories/images/15731132155dc3cd7fb3fd3.jpg',
		},
		{
			id: 8,
			time: '1h 40m',
			info: 'Lady Gaga The Art of Music ',
			year: '2019',
			type: 'Documentary',
			img: 'https://m.media-amazon.com/images/I/A1CcbJfKqJL._AC_SL1500_.jpg',
		},
		{
			id: 9,
			time: '2h 18m',
			info: 'Lady Gaga The Art of Music ',
			year: '2019',
			type: 'Documentary',
			img: 'https://i.pinimg.com/736x/07/12/4d/07124dcc3f708eabd0a1d5bc0f52a179.jpg',
		},
		{
			id: 10,
			time: '1h 18m',
			info: 'Lady Gaga The Art of Music ',
			year: '2019',
			type: 'Documentary',
			img: 'https://img.republicworld.com/republic-prod/stories/images/xxhdpi/aflifh6ao5w1u1bk_1639573138.jpeg',
		},
	];

	const [cardDetails, setCardDetails] = useState(cards);
	return (
		<div>
			<div className='mt-4 mb-5 w-[95%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
				{cardDetails.map((card, i) => (
					<div key={i}>
						<GridCard {...card} />
					</div>
				))}
			</div>
		</div>
	);
}

export default CardGridSection;
