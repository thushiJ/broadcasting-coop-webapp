import {
	HiOutlineLocationMarker,
	HiOutlineMail,
	HiOutlinePhone,
} from 'react-icons/hi';

import {
	FaFacebookF,
	FaTwitter,
	FaInstagramSquare,
	FaLinkedinIn,
	FaYoutube,
	FaRegCopyright,
} from 'react-icons/fa';
function Footer() {
	return (
		// footer section
		<div className='w-[70%] mx-auto'>
			<div className='grid grid-cols-2 mt-8 mb-5 white-text sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
				{/* section 1 */}
				<div className='col-span-2 mb-6'>
					<h1 className='font-extrabold red-text xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl'>
						AYOZAT
					</h1>
					<p className='mt-3 mb-5 text-xs gray-text sm:text-sm'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
					<div className='flex mt-4'>
						<FaFacebookF className='mr-4 red-text' />
						<FaTwitter className='mr-4 red-text' />
						<FaInstagramSquare className='mr-4 red-text' />
						<FaLinkedinIn className='mr-4 red-text' />
						<FaYoutube className='mr-4 red-text' />
					</div>
				</div>

				{/* cestion 2 */}
				<div className='mb-6 text-xs sm:text-sm'>
					<h4 className='mb-8'>Product</h4>
					<div className='gray-text'>
						<p className='mb-1'>Features</p>
						<p className='mb-1'>Pricing</p>
						<p className='mb-1'>Case Studies</p>
						<p className='mb-1'>Reviews</p>
						<p className='mb-1'>Updates</p>
					</div>
				</div>

				{/* section 3 */}
				<div className='mb-6 text-xs sm:text-sm'>
					<h4 className='mb-8'>Company</h4>
					<div className='gray-text'>
						<p className='mb-1'>About</p>
						<p className='mb-1'>Contact Us</p>
						<p className='mb-1'>Careers</p>
						<p className='mb-1'>Culture</p>
						<p className='mb-1'>Blog</p>
					</div>
				</div>

				{/* section 4 */}
				<div className='mb-6 text-xs sm:text-sm'>
					<h4 className='mb-8'>Support</h4>
					<div className='gray-text'>
						<p className='mb-1'>Getting started</p>
						<p className='mb-1'>Help center</p>
						<p className='mb-1'>Server status</p>
						<p className='mb-1'>Report a bug</p>
						<p className='mb-1'>Chat support</p>
					</div>
				</div>

				{/* sction 5 */}
				<div className='mb-6 text-xs sm:text-sm'>
					<h4 className='mb-8'>Contact us</h4>
					<div className='text-justify gray-text'>
						<p className='flex items-center mb-1'>
							<HiOutlineMail className='mr-2 red-text xl:text-xl lg:text-lg md:text-md sm:text-sm' />
							contact@company.com
						</p>
						<p className='flex items-center mb-1'>
							<HiOutlinePhone className='mr-2 red-text xl:text-xl lg:text-lg md:text-md sm:text-sm' />{' '}
							(414)- 678 - 456
						</p>
						<p className='flex items-center mb-1'>
							<HiOutlineLocationMarker className='mr-2 red-text xl:text-xl lg:text-lg md:text-md sm:text-sm' />
							Lorem Ipsum has
						</p>
						<p className='mb-1 ml-6'>recently with desktop</p>
						<p className='mb-1 ml-6'>unknown printe</p>
					</div>
				</div>
			</div>
			<hr />
			{/* bottom section */}
			<div className='flex justify-between mt-5 mb-5 text-xs gray-text md:text-sm'>
				<div className='flex items-center '>
					Copyright <FaRegCopyright className='mx-2' />{' '}
					{new Date().getFullYear()} AYOZAT
				</div>
				<div>
					All Right Reserved |{' '}
					<a href='' className='underline cursor-pointer red-text'>
						Terms and Conditions
					</a>{' '}
					|{' '}
					<a href='' className='underline cursor-pointer red-text'>
						Privacy Policy
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
