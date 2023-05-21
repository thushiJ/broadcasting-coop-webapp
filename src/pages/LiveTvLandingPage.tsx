import ayozatProps from '../Assets/Images/ayozat_prop.svg';
import RedEclipse from '../Assets/Images/red-eclipse.png';
import LandingCardSection from './liveTvPage/landingPage/LandingCardSection';
import LiveTVCard from './liveTvPage/landingPage/shared/LiveTVCard';
import LiveTVCard2 from './liveTvPage/landingPage/shared/LiveTVCard2';
import LiveTVCaroursel from './liveTvPage/landingPage/shared/LiveTVCarousel';

function LiveTvLandingPage() {
	return (
		<div className='overflow-hidden'>
			<div className='livetv-heroimage'>
				<div className=' mt-[150px] mx-auto'>
					<h1 className='font-Plus Jakarta Sans red-text text-center text-[40px] leading-loose'>
						AYOZAT <span className='font-normal white-text'>LiveTV</span>
					</h1>
					<p className='font-Plus Jakarta Sans white-text text-[45px] font-[500] w-[800px] mx-auto leading-10 text-center fw-100'>
						Watch movies and shows anytime anywhere personalized for you
					</p>
					<div className='flex justify-center w-full'>
						<button className='white-text  button-red px-8 py-1.5 mt-[25px] font-medium rounded-full xl:text-lg lg:text-lg md:text-md sm:text-sm'>
							Explore content
						</button>
					</div>
				</div>
			</div>
			{/* landing page section 2 */}
			<div className='relative overflow-hidden'>
				<img
					src={RedEclipse}
					alt='red_eclipse'
					className='ml-[1200px] mt-[-170px] absolute'
				/>
				<LiveTVCard />
			</div>
			<div>
				<img
					src={RedEclipse}
					alt='red_eclipse'
					className='absolute -mt-52 -ml-72'
				/>
				<LiveTVCard2 />
			</div>

			<div>
				<h1 className='font-Plus Jakarta Sans w-[744px] text-[32px] white-text font-[700] text-center mx-auto mt-10'>
					Watch movies and shows anytime anywhere personalized for you
				</h1>
				<p className='font-Plus Jakarta Sans w-[543px] text-[20px] font-[400] text-center mx-auto text-[#7B9DB4] mt-6'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam
				</p>
			</div>

			{/* coursel */}
			<div>
				<LiveTVCaroursel />
			</div>

			<div className='mt-10 -mb-28'>
				<div className='w-[450px] mx-auto'>
					<p className='font-Plus Jakarta Sans white-text text-[32px] font-[700] text-center '>
						Join with us today and gain access to all
					</p>
					<button className='white-text button-red px-8 py-1.5 ml-36 mt-[25px] font-medium rounded-full xl:text-lg lg:text-lg md:text-md sm:text-sm'>
						Register now
					</button>
				</div>
			</div>

			<div>
				<img src={ayozatProps} alt='ayozat figure' className='mx-auto' />
				<div className='w-[300px] mx-auto'>
					<p className='-mt-36 font-Plus Jakarta Sans white-text text-center font-[700] text-[44px]'>
						$1.99 /<span className='font-normal text-[24px]'> month</span>
					</p>
				</div>
			</div>

			{/* landing page final section */}
			<div>
				<h1 className='font-Plus Jakarta Sans w-[744px] white-text text-[32px] font-[700] text-center mx-auto mt-8'>
					Explore some of what more you can recive with the membership
				</h1>
				<LandingCardSection />
				{/* <LandingGridCard /> */}
			</div>
		</div>
	);
}

export default LiveTvLandingPage;
