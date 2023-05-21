import { useState } from 'react';
import ContentNavbar from '../components/ContentNavbar';
import GridCardsSection from './welcome/GridCardSection';
import MusicCarousel from './welcome/MusicCarousel';
import TrendMovies from './welcome/TrendMovies';
import WelcomePageSidebar from './welcome/WelcomePageSidebar';
import Footer from '../components/Footer';

function Welcome() {
	const [isActive, setIsActive] = useState(false);

	//toggle side bar
	const handleClick = (e: any) => {
		// console.log('sidebar');
		e.preventDefault();
		setIsActive((current) => !current);
	};
	return (
		<>
			<ContentNavbar handleClick={handleClick} />
			<WelcomePageSidebar isActive={isActive} />
			<div
				className={
					isActive
						? ' md:pl-[100px] pl-[80px] duration-500 p-2 mt-2 ml-4'
						: ' pl-0 duration-500 p-2 mt-2 ml-8'
				}
			>
				<div className='mb-8'>
					<h1 className='text-2xl font-medium text-white lg:text-3xl md:text-3xl'>
						Welcome to ayozat User!
					</h1>
					<p className='text-sm gray-text md:text-md'>
						We are so ecited to have you check out
					</p>
				</div>

				<TrendMovies />
				<MusicCarousel />
				<GridCardsSection />
			</div>
			<Footer />
		</>
	);
}

export default Welcome;
