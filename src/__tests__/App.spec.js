import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import { App } from '../App';
import { storyIds, singleStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/hnApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { STORY_INCREMENT } from '../constants';

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');

jest.mock('../services/hnApi', () => ({
	getStory: jest.fn(),
	getStoryIds: jest.fn()
}));

test('renders app', async () => {
	useInfiniteScroll.mockImplementation(() => ({
		count: STORY_INCREMENT
	}));
	getStory.mockImplementation(() => Promise.resolve(singleStory));
	getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

	const { getByText, queryByTestId } = render(<App />);
	await waitForElement(() => [
		expect(getByText('This is story')).toBeTruthy(),
		expect(queryByTestId('story-by').textContent).toEqual('By: Adam McAdams')
	]);
});
