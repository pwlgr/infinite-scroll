import React, { useEffect, useState } from 'react';
import { getStoryIds } from './services/Api';

export const App = () => {
	useState(async () => {
		const stories = await getStoryIds();
		console.log('this is stories', stories);
	}, []);
	return <div className="App">this is app</div>;
};

export default App;
