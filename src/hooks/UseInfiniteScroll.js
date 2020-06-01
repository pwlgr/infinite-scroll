import { useState, useEffect } from 'react';
import { STORY_INCREMNT, MAX_STORIES } from '../constants';

export const useInfiniteScroll = () => {
	const [ loading, setLoading ] = useState(false);
	const [ count, setCount ] = useState(STORY_INCREMNT);

	const handleScroll = () => {
		console.log('window', window);
	};

	handleScroll();
};
