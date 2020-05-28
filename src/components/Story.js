import React, { useState, useEffect } from 'react';
import { getStory, getStoryIds } from '../services/Api';

const Story = ({ storyId }) => {
	const [ storyIds, setStoryIds ] = useState([]);

	useEffect(() => {
		getStoryIds().then((data) => setStoryIds(data));
	}, []);

	return <p>{storyId}</p>;
};

export default Story;
