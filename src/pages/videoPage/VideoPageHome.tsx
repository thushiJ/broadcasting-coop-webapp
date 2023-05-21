import AdvertisementsSection from './home/AdvertisementsSection';
import CategoriesCoursel from './home/CategoriesCoursel';
import HeroCarousel from './home/HeroCarousel';
import PickupCarousel from './home/PickupCoursel';
import VideoPageSeriesCoursel from './home/VideoPageSeriesCoursel';

function VideoPageHome() {
	return (
		<div>
			<HeroCarousel />
			<PickupCarousel />
			{/* <VideoPageMovieCoursel /> */}
			<VideoPageSeriesCoursel />
			<AdvertisementsSection />
			<CategoriesCoursel />
		</div>
	);
}

export default VideoPageHome;
