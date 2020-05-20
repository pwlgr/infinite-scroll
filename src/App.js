import React, { useEffect, useState } from 'react';
import { getStoryIds } from './services/Api';

export const App = () => {
	useEffect(() => {
		const stories = getStoryIds().then((data) => console.log(data));
	}, []);
	return <div className="App">this is app</div>;
};

export default App;
