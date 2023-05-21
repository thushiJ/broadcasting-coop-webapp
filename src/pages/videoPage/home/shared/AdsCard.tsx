import { HiOutlineX } from 'react-icons/hi';
function AdsCard({ id, img }: any) {
	return (
		<div>
			<div className='mx-2 rounded-lg'>
				<div className='w-full py-2'>
					<div className='relative w-card'>
						<div
							className='relative h-[200px] w-full rounded-lg bg-img'
							style={{
								color: '#fff',
								background: `url(${img})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<div className='absolute right-0 m-2 rounded-full bg-slate-900/70 text-md'>
								<button className='p-2'>
									<HiOutlineX />
								</button>
							</div>
							<div className='absolute bottom-0 flex justify-between p-2'>
								<button className='items-center px-4 py-1 text-sm tracking-wide bg-black'>
									Advertisment
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdsCard;
