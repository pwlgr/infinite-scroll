import React, { useState, useEffect } from 'react';
import { getStory, getStoryIds } from '../services/Api';

const Story = ({ storyId }) => {
	const [ story, setStory ] = useState({});

	useEffect(() => {
		getStory(storyId).then((data) => data && data.url && setStory(data));
	}, []);

	return <p>{JSON.stringify(story)}</p>;
};

export default Story;
