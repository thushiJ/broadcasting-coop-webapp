function FilterSection() {
	return (
		<>
			<div className='flex'>
				{/* dropdown 1  */}
				<div className='px-3 py-2 text-white rounded-full select text-md searchbar'>
					<label htmlFor='watched' className='gray-text'>
						Watched{' '}
					</label>
					<select name='cars' id='cars' className='outline-none searchbar'>
						<option value='today'>Today</option>
						<option value='yesterday'>Yesterday</option>
						<option value='lastweek'>Last week</option>
					</select>
				</div>
				{/* dropdown 2 */}
				<div className='px-3 py-2 ml-4 text-white rounded-full select text-md searchbar'>
					<label htmlFor='types' className='gray-text'>
						Types{' '}
					</label>
					<select name='cars' id='cars' className='outline-none searchbar'>
						<option value='today'>Movies</option>
						<option value='yesterday'>Music</option>
						<option value='lastweek'>Tv Series</option>
					</select>
				</div>

				{/* searchbox */}
				<div className='relative flex items-center ml-4 white-text'>
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
						placeholder='Search watch history'
						className='w-full py-2 pl-12 rounded-full outline-none text-md searchbar'
					/>
				</div>
			</div>
		</>
	);
}

export default FilterSection;
