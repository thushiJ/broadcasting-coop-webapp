import img from '../../../Assets/Images/LiveTv/livetv card img.png';

function HeroSliderRightCard({ text, title }: any) {
	return (
		<div className='min-h-[50%] h-[265px] p-3 pt-0'>
			<p className='bg-[#F50537] inline-block text-white pb-[1px] mb-1 text-[12px] text-left px-2 rounded-sm'>
				UP Next on {text}
			</p>

			<div className='w-full h-[200px] p-2 pl-0 overflow-hidden mb-2'>
				<img
					src={img}
					alt=''
					className='w-full h-auto overflow-hidden rounded-md'
				/>
			</div>

			<div className='flex items-center text-white'>
				<div className=' bg-[#ffffff37] w-[47px] h-[26px] items-center flex justify-center rounded-md text-[11px]'>
					9:45
				</div>
				<p className='ml-2 text-[18px]'>{title}</p>
			</div>
		</div>
	);
}

export default HeroSliderRightCard;
