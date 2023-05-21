import { useState } from 'react';
import AddNewCard from './shared/AddNewCard';
import WatchlistCard from './shared/WatchlistCard';

function WatchlistSection() {
	const cards = [
		{
			id: 1,
			title: 'Weekend Series',
			images: [
				'https://apollohou.com/wp-content/uploads/y0fmiq96uu871.jpg',
				'https://www.scrolldroll.com/wp-content/uploads/2022/04/Doctor-strange-Hollywood-movies-releasing-in-may-2022.webp',
				'https://qqcdnpictest.mxplay.com/pic/cda6ced62b423d4a51c8e817f31d8067/en/2x3/320x480/test_pic1583329887991.webp',
				'https://www.bollymoviereviewz.com/wp-content/uploads/2013/05/330px-Fantastic_Beasts2C_The_Secrets_of_Dumbledore_teaser_poster.png',
				'https://img.republicworld.com/republic-prod/stories/images/xxhdpi/aflifh6ao5w1u1bk_1639573138.jpeg',
				'https://m.media-amazon.com/images/I/A1CcbJfKqJL._AC_SL1500_.jpg',
				'https://www.bollymoviereviewz.com/wp-content/uploads/2013/05/330px-Fantastic_Beasts2C_The_Secrets_of_Dumbledore_teaser_poster.png',
				'https://i.pinimg.com/736x/07/12/4d/07124dcc3f708eabd0a1d5bc0f52a179.jpg',
				'https://assets.gadgets360cdn.com/pricee/assets/product/202205/jurassic_world_dominion_poster_1652087377.jpeg',
			],
		},
		{
			id: 2,
			title: 'Funny Series',
			images: [
				'https://apollohou.com/wp-content/uploads/y0fmiq96uu871.jpg',
				'https://www.scrolldroll.com/wp-content/uploads/2022/04/Doctor-strange-Hollywood-movies-releasing-in-may-2022.webp',
				'https://qqcdnpictest.mxplay.com/pic/cda6ced62b423d4a51c8e817f31d8067/en/2x3/320x480/test_pic1583329887991.webp',
				'https://www.bollymoviereviewz.com/wp-content/uploads/2013/05/330px-Fantastic_Beasts2C_The_Secrets_of_Dumbledore_teaser_poster.png',
				'https://img.republicworld.com/republic-prod/stories/images/xxhdpi/aflifh6ao5w1u1bk_1639573138.jpeg',
				'https://m.media-amazon.com/images/I/A1CcbJfKqJL._AC_SL1500_.jpg',
				'https://www.bollymoviereviewz.com/wp-content/uploads/2013/05/330px-Fantastic_Beasts2C_The_Secrets_of_Dumbledore_teaser_poster.png',
			],
		},
		{
			id: 3,
			title: 'Cartoon',

			images: [
				'https://apollohou.com/wp-content/uploads/y0fmiq96uu871.jpg',
				'https://www.scrolldroll.com/wp-content/uploads/2022/04/Doctor-strange-Hollywood-movies-releasing-in-may-2022.webp',
				'https://www.bollymoviereviewz.com/wp-content/uploads/2013/05/330px-Fantastic_Beasts2C_The_Secrets_of_Dumbledore_teaser_poster.png',
				'https://assets.gadgets360cdn.com/pricee/assets/product/202205/jurassic_world_dominion_poster_1652087377.jpeg',
			],
		},
		{
			id: 4,
			title: 'Adventure',

			images: [
				'https://assets.gadgets360cdn.com/pricee/assets/product/202205/jurassic_world_dominion_poster_1652087377.jpeg',
				'https://www.scrolldroll.com/wp-content/uploads/2022/04/Doctor-strange-Hollywood-movies-releasing-in-may-2022.webp',
				'https://www.bollymoviereviewz.com/wp-content/uploads/2013/05/330px-Fantastic_Beasts2C_The_Secrets_of_Dumbledore_teaser_poster.png',
			],
		},
		{
			id: 5,
			title: 'Adventure',

			images: [
				'https://www.bollymoviereviewz.com/wp-content/uploads/2013/05/330px-Fantastic_Beasts2C_The_Secrets_of_Dumbledore_teaser_poster.png',
			],
		},
		{
			id: 1,
			title: 'Action Series',
			images: [
				'https://apollohou.com/wp-content/uploads/y0fmiq96uu871.jpg',
				'https://www.scrolldroll.com/wp-content/uploads/2022/04/Doctor-strange-Hollywood-movies-releasing-in-may-2022.webp',
				'https://qqcdnpictest.mxplay.com/pic/cda6ced62b423d4a51c8e817f31d8067/en/2x3/320x480/test_pic1583329887991.webp',
				'https://www.bollymoviereviewz.com/wp-content/uploads/2013/05/330px-Fantastic_Beasts2C_The_Secrets_of_Dumbledore_teaser_poster.png',
				'https://img.republicworld.com/republic-prod/stories/images/xxhdpi/aflifh6ao5w1u1bk_1639573138.jpeg',
				'https://m.media-amazon.com/images/I/A1CcbJfKqJL._AC_SL1500_.jpg',
				'https://www.bollymoviereviewz.com/wp-content/uploads/2013/05/330px-Fantastic_Beasts2C_The_Secrets_of_Dumbledore_teaser_poster.png',
				'https://i.pinimg.com/736x/07/12/4d/07124dcc3f708eabd0a1d5bc0f52a179.jpg',
				'https://assets.gadgets360cdn.com/pricee/assets/product/202205/jurassic_world_dominion_poster_1652087377.jpeg',
				'https://www.bollymoviereviewz.com/wp-content/uploads/2013/05/330px-Fantastic_Beasts2C_The_Secrets_of_Dumbledore_teaser_poster.png',
				'https://i.pinimg.com/736x/07/12/4d/07124dcc3f708eabd0a1d5bc0f52a179.jpg',
				'https://assets.gadgets360cdn.com/pricee/assets/product/202205/jurassic_world_dominion_poster_1652087377.jpeg',
			],
		},
	];
	const [details, setDetails] = useState(cards);
	return (
		<div className='mt-4 mb-5 w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'>
			{details.map((card: any, i: number) => (
				<WatchlistCard {...card} key={i} />
			))}
			<AddNewCard />
		</div>
	);
}

export default WatchlistSection;
