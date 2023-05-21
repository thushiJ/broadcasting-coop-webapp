import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppRouter from '../routes/Router';

function App() {
	return (
		<>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				limit={1}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<AppRouter />
		</>
	);
}

export default App;
