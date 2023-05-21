import { HiOutlinePlus } from 'react-icons/hi';
function AddNewCard() {
	return (
		<div className='relative z-20 w-card h-[288px] w-[224px] add-new-card rounded-md flex items-center justify-center cursor-pointer'>
			<div className='white-text'>
				<div className='flex items-center justify-center w-16 h-16 mx-auto border-4 border-red-100 rounded-full'>
					<HiOutlinePlus className='text-5xl' />
				</div>
				<p className='mx-auto mt-4 text-lg'>Create new Watchlist</p>
			</div>
		</div>
	);
}

export default AddNewCard;
