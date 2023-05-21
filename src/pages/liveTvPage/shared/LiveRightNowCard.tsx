import { AiOutlineEye } from 'react-icons/ai';

export const LiveRightNowCard = (props: any) => {
	return (
		<div className='mx-2 inline-block w-[195px] h-[285px] rounded-md '>
			{/* image */}
			<div className=' w-full h-[195px] items-center justify-center'>
				<img
					src={props.imageSrc}
					alt='Live Channel'
					className='w-[195px] h-full  object-cover overflow-hidden rounded-md'
				/>
				{/* live status */}
				<div className='relative flex left-[4%] top-[-16%] gap-1'>
					<div className='bg-[#F50537] w-[52px] h-[23.68px] rounded-sm text-center'>
						<p className='uppercase text-white text-[15px]'>{props.live}</p>
					</div>
					<div className='bg-white/20   flex backdrop-blur-lg w-auto h-[23.68px] rounded-sm items-center text-white'>
						<div className='mx-1 my-1 text-[10px]'>
							<AiOutlineEye />
						</div>
						<div className='my-1 mr-1 text-[10px] '>{props.liveCount}</div>
					</div>
				</div>
			</div>

			<div className='relative top-1'>
				<div className='my-[4px]'>
					<p className='text-[15px] font-semibold text-white'>{props.title}</p>
				</div>

				<div className='mb-[2px]'>
					<p className='text-[12px] font-normal text-[#7B9DB4] '>
						{props.desc}
					</p>
				</div>
				<div className='flex'>
					<div className=' w-[19px] h-[19px] mr-1 rounded-full flex items-center justify-center bg-white'>
						<img
							src={props.channelLogo}
							alt='Live Channel'
							className='w-[19px] h-full overflow-hidden rounded-full '
						/>
					</div>
					<p className='text-[12px] font-semibold text-white '>{props.time}</p>
				</div>
			</div>
		</div>
	);
};
