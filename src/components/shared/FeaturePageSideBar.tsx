import { Link, useLocation } from 'react-router-dom';

function FeaturePageSideBar({ isActive, navData }: any) {
	const location = useLocation();
	console.log(location);

	return (
		<div>
			{isActive ? (
				<div className='sidebar navbar fixed  left-0 p-2 md:w-[150px] w-[100px] shadow pt-4 z-50 h-full'>
					{navData?.map((n: any, i: number) => (
						<div
							className='mb-10 text-center text-gray-100 cursor-pointer feature-side-nav'
							key={i}
						>
							<Link to={n.link}>
								<div className='flex ml-8 '>
									<button className='mb-1'>
										<n.icon className='mr-2 text-lg md:text-2xl' />
									</button>

									<p className='text-sm gray-text'>{n.title}</p>
								</div>
								<p className='text-sm opacity-0 gray-text'>{n.title}</p>
							</Link>
						</div>
					))}
				</div>
			) : (
				<div className='sidebar navbar fixed  left-0 p-2 md:w-[100px] w-[60px]  shadow pt-4 z-50 h-full'>
					{navData?.map((n: any, i: number) => (
						<div
							className='mb-10 text-center text-gray-100 cursor-pointer feature-side-nav'
							key={i}
						>
							<Link to={n.link}>
								<button className='mb-1'>
									<n.icon className='text-lg md:text-2xl' />
								</button>

								<p className='text-xs gray-text'>{n.title}</p>
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default FeaturePageSideBar;
