import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/Api';
import Story from '../components/Story';

import {
	GlobalStyle,
	StoriesContainerWrapper,
	} from '../styles/StoriesContainerStyles';
	
	import { useInfiniteScroll } from '../hooks/UseInfiniteScroll'

export const Stories = () => {
	const { count } = useInfiniteScroll();
	const [ storyIds, setStoryIds ] = useState([]);

	useInfiniteScroll()

	useEffect(() => {
		getStoryIds().then((data) => setStoryIds(data));
	}, []);
	return (
		<>
		<GlobalStyle />
		<StoriesContainerWrapper data-test-id="stories-container">
		  <h1>Hacker News Stories</h1>
		  {storyIds.slice(0, count).map(storyId => (
			<Story key={storyId} storyId={storyId} />
		  ))}
		</StoriesContainerWrapper>
	  </>
	)
};
