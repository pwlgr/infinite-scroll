import { useState, useEffect } from 'react';
import { STORY_INCREMNT, MAX_STORIES } from '../constants';
import { debounce } from '../utils/debounce';
export const useInfiniteScroll = () => {
	const [ loading, setLoading ] = useState(false);
	const [ count, setCount ] = useState(STORY_INCREMNT);

	const handleScroll = debounce(() => {
		if (
			window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
			loading
		) {
			return false;
		}
		setLoading(true);
	}, 300);

	useEffect(
		() => {
			if (!loading) return;
			if (count + STORY_INCREMNT >= MAX_STORIES) {
				setCount(MAX_STORIES);
			} else {
				setCount(count + STORY_INCREMNT);
			}
			setLoading(false);
		},
		[ loading ]
	);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll); //clean up
	}, []);

	return { count };
};
