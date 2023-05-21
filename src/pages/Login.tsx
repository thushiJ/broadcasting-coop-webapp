import { FaFacebookF, FaApple } from 'react-icons/fa';

//import logo
import Logo from '../Assets/Images/a_logo.png';

function Login() {
	return (
		<div
			className='overflow-hidden'
			// main back image
			style={{
				color: '#fff',
				backgroundImage: `url('https://foreverdc.com/wp-content/uploads/2021/03/moviesbaba-1.jpg')`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '100vh',
			}}
		>
			{/* red dot top left */}
			<div className='loginpage-back'>
				<div
					className='absolute h-[800px] w-[800px] -left-[350px] -top-[350px]'
					style={{
						color: '#fff',
						backgroundImage: `url('https://i.stack.imgur.com/G7vn7.png')`,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
					}}
				></div>
				<div className='relative sm:w-[500px] w-[80%] left-28 top-40 text-center '>
					{/* ayosat logo part */}
					<div className='relative left-0 bg-white rounded-full w-[100px] h-[100px] flex items-center mb-10'>
						<img src={Logo} alt='logo' className='w-16 h-16 mx-auto mb-2' />
					</div>

					{/* main topic section */}
					<div className='relative'>
						<div className='text-left'>
							<h1 className='mb-2 text-4xl font-bold white-text sm:text-5xl'>
								Welcome!
							</h1>
							<p className='mb-4 tracking-wide gray-text text-md'>
								Let's get some basic information and get you started as soon as
								possible
							</p>
						</div>
						{/* buttons  */}
						<div className='flex '>
							<button className='flex items-center justify-center w-full py-2 mb-4 mr-1 text-lg font-bold rounded-full white-text button-red facebook-button'>
								<FaFacebookF className='mr-1 text-xl ' /> Facebook
							</button>
							<button className='flex items-center justify-center w-full py-2 mb-4 ml-1 text-lg font-bold rounded-full white-text button-red apple-button'>
								<FaApple className='mr-1 text-3xl' />
								Apple
							</button>
						</div>
						<button className='flex items-center justify-center w-full py-2 mb-4 text-lg font-bold border-2 border-white rounded-full white-text '>
							<img
								src='https://img.icons8.com/fluency/48/000000/google-logo.png'
								alt='google'
								className='w-8 h-8 mr-2'
							/>
							Google
						</button>
						<div className='grid grid-cols-3 w-[80%] mx-auto mb-3'>
							<hr className='mt-3' />
							<p className='gray-text text-md'>Or sign in with</p>
							<hr className='mt-3' />
						</div>

						{/* sign in form */}
						<form>
							<input
								type='text'
								autoComplete='name'
								placeholder='Name'
								className='w-full pl-4 pr-4 py-1.5 rounded outline-none h-[45px] mb-4 text-gray-600'
							/>
							<input
								type='email'
								placeholder='Email'
								autoComplete='email'
								className='w-full pl-4 pr-4 py-1.5 rounded outline-none h-[45px] mb-4 text-gray-600'
							/>
							<div className='flex'>
								<input
									type='password'
									placeholder='Password'
									className='w-full pl-4 pr-4 py-1.5 rounded outline-none h-[45px] mb-4 text-gray-600 mr-1'
								/>
								<input
									type='password'
									placeholder='Confirm Password'
									className='w-full pl-4 pr-4 py-1.5 rounded outline-none h-[45px] mb-4 text-gray-600 ml-1'
								/>
							</div>

							<button className='w-full py-4 mb-4 text-lg font-bold rounded-full white-text button-red'>
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
