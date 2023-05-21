import { useEffect, useState } from 'react';
import TrendingNearYou from './discover/TrendingNearYou';
import { useParams } from 'react-router';
import VideoService from '../../services/VideoService';

function VideoPageDiscover() {
	const { id } = useParams();
	console.log(id);
	const [cardDetails, setCardDetails] = useState([]);
	const [loading, setLoading] = useState(false);

	//load data according to the id
	useEffect(() => {
		setLoading(true);
		VideoService.getAllTVShowsByGenresId(id)
			.then((res) => {
				console.log(res.data);
				setCardDetails(res.data);
				setLoading(false);
			})
			.catch((e) => {
				console.log(e);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			{/* main topic section */}
			<div className='mb-8'>
				<h1 className='text-2xl font-medium text-white lg:text-3xl md:text-3xl'>
					Discover movies and tv series
				</h1>
			</div>
			{/* coursel */}
			<TrendingNearYou cardDetails={cardDetails} />
			<div className='-mt-20'>{/* <TrendingNearYou /> */}</div>

			<div className='-mt-20'>{/* <TrendingNearYou /> */}</div>
		</div>
	);
}

export default VideoPageDiscover;
