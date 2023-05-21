import Logo from '../../../Assets/Images/logo.png';
export const ChannelCard = (props: any) => {
	return (
		<div className='inline-block text-center'>
			<div className='flex justify-center w-[120px] h-[120px] bg-[#363636] rounded-full items-center'>
				<img
					src={Logo}
					alt='Channel Icon'
					className='object-contain w-3/4 h-3/4'
				/>
			</div>
			<p className='inline-block mt-2 text-white'>{props.channelName}</p>
		</div>
	);
};
