import Logo from '../../../Assets/ayozat_logo.svg';

import '../../../styles/card.css';
function Card({ id, title, info, img }: any) {
	return (
		<div className='z-20 w-full mb-10 home-carousel-container'>
			<div
				className='z-30 shadow-lg card'
				style={{
					color: '#fff',
					background: `url(${img}) top right 20% no-repeat`,
				}}
			>
				<div className='contentBx'>
					<h2 className='white-text'>
						<span className='font-extrabold red-text lg:text-xl md:text-lg sm:text-md'>
							AYOZAT
						</span>{' '}
						{title}
					</h2>

					<div className='mb-2 content'>
						<p className='gray-text lg:text-md md:text-md sm:text-sm'>
							{info}{' '}
						</p>
					</div>
					<button className='px-4 mb-2 mr-1 font-semibold rounded-full white-text button-red lg:text-md md:text-md sm:text-sm'>
						Explore
					</button>
					<button className='px-4 font-semibold rounded-full black-text button-white lg:text-md md:text-md sm:text-sm'>
						Learn more
					</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
