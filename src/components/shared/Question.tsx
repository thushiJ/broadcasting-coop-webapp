import React, { useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

function Question({ id, title, info }: any) {
	const [expanded, setExpanded] = useState(false);
	return (
		<article className='question'>
			<header>
				<h4
					onClick={() => setExpanded(!expanded)}
					className='question-title font-semibold xl:text-xl lg:text-lg md:text-md'
				>
					<span className='mr-3 xl:text-xl lg:text-lg md:text-md'>0{id}</span>
					{title}
				</h4>
				<button className='btn' onClick={() => setExpanded(!expanded)}>
					{expanded ? <AiOutlineClose /> : <AiOutlinePlus />}
				</button>
			</header>
			{expanded && (
				<p className='pt-4 pb-4 lg:text-md md:text-sm text-xs'>{info}</p>
			)}
		</article>
	);
}

export default Question;
