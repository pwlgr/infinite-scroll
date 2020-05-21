import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/Api';

export const Stories = () => {
    const [storyIds, setStoryIds] = useState([]);
  
    useEffect(() => {
      getStoryIds().then(data => setStoryIds(data));
    }, []);
    return (
        <>
        </>
    )
}