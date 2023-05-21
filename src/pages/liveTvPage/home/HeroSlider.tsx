import HeroSliderLeft from './HeroSliderLeft';
import HeroSliderRightCard from './HeroSliderRightCard';

function HeroSlider() {
	return (
		<div className='grid grid-cols-12 gap-3  min-h-[450px]'>
			<div className='min-h-[450px] col-span-8'>
				<HeroSliderLeft />
			</div>
			<div className='col-span-3'>
				<HeroSliderRightCard
					text={'battery pop gaming'}
					title={'Allied Esports'}
				/>
				<HeroSliderRightCard
					text={' PXsports Pocket (LATAM)'}
					title={'The drift kings'}
				/>
			</div>
		</div>
	);
}

export default HeroSlider;
