import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;

const getAllTVShows = async () => {
	const response = await axios({
		method: 'get',
		url: `http://localhost:8000/api/tvshows`,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
	// alert("Favourite created --- "+ response);
	return response.data;
};

const getAllGenres = async () => {
	const response = await axios({
		method: 'get',
		url: `http://localhost:8000/api/genres`,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
	// alert("Favourite created --- "+ response);
	return response.data;
};

const getAllTVShowsByGenresId = async (id: any) => {
	const response = await axios({
		method: 'get',
		url: `http://localhost:8000/api/tvshows?genre=${id}`,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
	// alert("Favourite created --- "+ response);
	return response.data;
};

const getDetailsBySlug = async (slug: any) => {
	const response = await axios({
		method: 'get',
		url: `http://localhost:8000/api/tvshows/${slug}`,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
	// alert("Favourite created --- "+ response);
	return response.data;
};

const VideoService = {
	getAllTVShows,
	getAllGenres,
	getAllTVShowsByGenresId,
	getDetailsBySlug,
};

export default VideoService;
