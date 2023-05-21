import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import CategoryCard from './shared/CategoryCard';
import VideoService from '../../../services/VideoService';
function CategoriesCoursel() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		VideoService.getAllGenres()
			.then((res) => {
				// console.log(res);
				setCategories(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	const category = [
		{
			id: 1,
			title: 'Comedy',
		},
		{
			id: 2,
			title: 'Adventure',
		},
		{
			id: 3,
			title: 'Horror',
		},
		{
			id: 4,
			title: 'Supernatural',
		},
		{
			id: 5,
			title: 'Animation',
		},
		{
			id: 6,
			title: 'Cartoons',
		},
		{
			id: 7,
			title: 'Actions',
		},
	];
	return (
		<div>
			<div className='flex justify-between w-[95%]'>
				<h1 className='text-white md:text-xl text-md '>Top Categories</h1>
				<p className='text-sm font-bold cursor-pointer red-text place-self-end'>
					{''} See all
				</p>
			</div>
			<Swiper
				slidesPerView={5}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					540: {
						slidesPerView: 2,
					},
					740: {
						slidesPerView: 3,
					},
					1000: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 5,
					},
					1400: {
						slidesPerView: 5,
					},
					1600: {
						slidesPerView: 5,
					},
				}}
				modules={[Pagination]}
				className='mt-8 mb-10 mySwiper'
			>
				{categories.map((card: any, i) => (
					<SwiperSlide key={i}>
						<CategoryCard {...card} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default CategoriesCoursel;
