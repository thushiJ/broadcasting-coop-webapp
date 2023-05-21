import Footer from '../components/Footer';
import HomeNavbar from '../components/HomeNavBar';
import Accodion from './home/Accodion';
import AyozatLiveTv from './home/AyozatLiveTv';
import AyozatMusic from './home/AyozatMusic';
import AyozatPayPerView from './home/AyozatPayPerView';
import AyozatPodcast from './home/AyozatPodacst';
import AyozatRadio from './home/AyozatRadio';
import AyozatVideo from './home/AyozatVideo';
import CardSection from './home/CardSection';
import Hero from './home/Hero';

function Home() {
	return (
		<>
			<HomeNavbar />
			<div className='hero-image'>
				<Hero />
				<CardSection />
			</div>
			<AyozatVideo />
			<AyozatMusic />
			<AyozatRadio />
			<AyozatLiveTv />
			<AyozatPodcast />
			<AyozatPayPerView />
			<Accodion />
			<Footer />
		</>
	);
}

export default Home;
