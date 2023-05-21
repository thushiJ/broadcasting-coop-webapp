import { useState } from 'react';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Logo from '../Assets/ayozat_logo.svg';
import { RouteName } from '../constant/routeNames';
import LoginModel from './LoginModal';
import NavbarPageNav from './shared/NavbarPageNav';

function HomeNavbar() {
	const [loginModel, setLoginModel] = useState(false);

	const clickLogin = (e: any) => {
		console.log('login');
		setLoginModel((current) => !current);
	};

	const [isActive, setIsActive] = useState(true);

	//toggle dropdown
	const dropDown = (e: any) => {
		// console.log('dropdown');
		setIsActive((current) => !current);
	};

	return (
		<>
			{/* home page navbar */}
			<div className='flex w-[95%] h-16 mx-auto justify-between items-center'>
				{/* logo */}
				<div className='flex-none text-2xl font-extrabold navbar-image'>
					{/* AYOZAT */}
					<Link to={RouteName.Home}>
						<img src={Logo} alt='logo' />
					</Link>
				</div>
				{/* search bar in the middle */}
				<div className='justify-center navbar-search grow'>
					<div className='hidden md:block  ml-[35%]'>
						<div className='relative flex items-center white-text'>
							<span className='absolute flex items-center pr-3 left-4'>
								<svg
									xmlns='http://ww50w3.org/2000/svg'
									className='w-4 fill-current'
									viewBox='0 0 35.997 36.004'
								>
									<path
										id='Icon_awesome-search'
										data-name='search'
										d='M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z'
									></path>
								</svg>
							</span>
							<input
								type='text'
								name='leadingIcon'
								id='leadingIcon'
								placeholder='Search..'
								className='w-[50%] pl-12 pr-4 py-1.5 rounded-md text-md outline-none'
							/>
						</div>
					</div>
				</div>

				{/* end section of navbar */}
				<div className='flex flex-row items-center flex-none navbar-end'>
					<HiOutlineViewGrid
						className='ml-5 text-2xl cursor-pointer white-text'
						onClick={dropDown}
					/>
					<button
						className='px-8 py-2 ml-4 rounded-full white-text button-red'
						onClick={clickLogin}
					>
						Login
					</button>
				</div>

				{/* dropdown on grid icon select */}
				<div
					className={
						isActive
							? 'absolute top-[10px] right-[80px] md:right-[130px] duration-200 p-2 pt-4 w-[200px] md:w-[300px] overflow-x-auto text-center shadow mt-8 navbar rounded-md opacity-0 z-50 pointer-events-none border-solid border-2 border-black'
							: 'absolute duration-200 top-5 right-[80px] md:right-[130px] p-2 pt-4 w-[200px] md:w-[300px] overflow-x-auto text-center shadow mt-8 navbar rounded-md opacity-100 z-50 border-solid border-2 border-black'
					}
				>
					<NavbarPageNav />
				</div>
			</div>

			{loginModel && <LoginModel clickLogin={clickLogin} />}
		</>
	);
}

export default HomeNavbar;
