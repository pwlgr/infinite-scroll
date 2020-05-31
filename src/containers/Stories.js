import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/Api';
import Story from '../components/Story';

export const Stories = () => {
	const [ storyIds, setStoryIds ] = useState([]);

	useEffect(() => {
		getStoryIds().then((data) => setStoryIds(data));
	}, []);
	return storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />);
};
