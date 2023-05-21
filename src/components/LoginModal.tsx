import { HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaApple } from 'react-icons/fa';

//import logo
import Logo from '../Assets/Images/a_logo.png';

function LoginModel({ clickLogin }: any) {
	return (
		// login model in main navbar
		<div className='fixed top-0 flex items-center w-full ease-in-out bg-slate-600 login_modal'>
			<div className='navbar w-[500px] mx-auto my-10 p-6 rounded text-center  h-[730px] overflow-hidden'>
				{/* close button in right side */}
				<div className='flex justify-end'>
					<HiOutlineX
						className='text-lg font-bold cursor-pointer white-text'
						onClick={clickLogin}
					/>
				</div>

				{/* image section with multiple circles */}
				<div className='relative -top-[150px] red-circle-1 rounded-full w-[400px] h-[400px] mx-auto mb-10 flex items-center'>
					<div className='red-circle-2 rounded-full w-[300px] h-[300px] mx-auto flex items-center shadow-lg'>
						<div className='red-circle-3 rounded-full w-[200px] h-[200px] mx-auto flex items-center shadow-lg'>
							<div className='bg-white rounded-full w-[100px] h-[100px] mx-auto flex items-center'>
								<img src={Logo} alt='logo' className='w-16 h-16 mx-auto mb-2' />
							</div>
						</div>
					</div>
				</div>
				{/* main topic */}
				<div className='relative -top-[300px]'>
					<h1 className='mb-2 text-4xl font-bold white-text sm:text-5xl'>
						Welcome back!
					</h1>
					<p className='mb-4 tracking-wide gray-text text-md'>
						Log in and catch up with your favorite things
					</p>

					{/* main form */}
					<form>
						<input
							type='email'
							autoComplete='email'
							placeholder='Email'
							className='w-full pl-4 pr-4 py-1.5 rounded outline-none h-[45px] mb-4 text-gray-600'
						/>
						<input
							type='password'
							placeholder='Password'
							className='w-full pl-4 pr-4 py-1.5 rounded outline-none h-[45px] mb-4 text-gray-600'
						/>
						<p className='mb-4 tracking-wide text-right cursor-pointer red-text text-md'>
							Forget password?
						</p>
						<button className='w-full py-4 mb-4 text-lg font-bold rounded-full white-text button-red'>
							Log in
						</button>
					</form>
					<div className='grid grid-cols-3 w-[80%] mx-auto mb-3'>
						<hr className='mt-3' />
						<p className='gray-text text-md'>Or sign in with</p>
						<hr className='mt-3' />
					</div>

					{/* rest of the buttos */}
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
					<p className='gray-text text-md'>
						Not a member yet?{' '}
						<Link to='/login'>
							<span className='cursor-pointer red-text'>Create Account</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default LoginModel;
