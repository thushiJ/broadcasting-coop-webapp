import Footer from '../components/Footer';
import HomeNavbar from '../components/HomeNavBar';

function LandingPages({ Content }: any) {
	return (
		<>
			<HomeNavbar />
			<Content />
			<Footer />
		</>
	);
}

export default LandingPages;
