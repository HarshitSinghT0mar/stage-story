import { Line } from 'rc-progress';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Avatar from '../ui/Avatar';
import StoryMedia from './SotryMedia';
import StoryProgress from '../ui/StoryProgress';

const StoryViewer = ({ stories }) => {
  const { userId, storyId } = useParams();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [progressBars, setProgressBars] = useState([]);

  const userIndex = stories.users.findIndex(user => user.username === userId);
  const user = stories.users[userIndex];
  const storyIndex = user ? user.stories.findIndex(story => story.id === storyId) : -1;
  const story = user.stories[storyIndex];



  useEffect(() => {
    const timer = setTimeout(() => {
      nextStory();
    }, 5000);

    // const progressTimerId = setTimeout(() => {
    //   setProgress(prev => prev + 10)
    // }, 500)

    return () => {
      clearTimeout(timer)

    }
  }, [userIndex, storyIndex]);



  const nextStory = () => {
    if (user && storyIndex < user.stories.length - 1) {
      navigate(`/stories/${user.username}/${user.stories[storyIndex + 1].id}`);
    } else if (userIndex < stories.users.length - 1) {
      const nextUser = stories.users[userIndex + 1];
      navigate(`/stories/${nextUser.username}/${nextUser.stories[0].id}`);
    }
  };

  const prevStory = () => {
    if (user && storyIndex > 0) {
      navigate(`/stories/${user.username}/${user.stories[storyIndex - 1].id}`);
    } else if (userIndex > 0) {
      const prevUser = stories.users[userIndex - 1];
      navigate(`/stories/${prevUser.username}/${prevUser.stories[prevUser.stories.length - 1].id}`);
    }
  };

  return (
    <div className='h-screen w-screen sm:w-52 sm:h-72 flex flex-col justify-center items-start relative'>
      <StoryProgress user={user} story={ story} />
      <Avatar user={user} />
      <StoryMedia story={story} />
      <button className='absolute left-1 z-10 top-1/2 bg-gray-300 rounded-full flex items-center justify-center w-5 h-5' onClick={prevStory}><FaAngleLeft /></button>
      <button className='absolute right-1 z-10 top-1/2 bg-gray-300 rounded-full flex items-center justify-center w-5 h-5' onClick={nextStory}><FaAngleRight /></button>
    </div>
  );
};

export default StoryViewer;
