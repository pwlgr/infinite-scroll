import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/Api';

export const Stories = () => {
	const [ storyIds, setStoryIds ] = useState([]);

	useEffect(() => {
		getStoryIds().then((data) => setStoryIds(data));
		getStory(23265754).then((data) => console.log(data));
	}, []);
	return <React.Fragment />;
};
