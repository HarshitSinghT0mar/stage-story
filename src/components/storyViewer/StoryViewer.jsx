import { Line } from 'rc-progress'
import React from 'react'
import SotryMedia from './SotryMedia'
import { useNavigate, useParams } from 'react-router';

const StoryViewer = ({ stories }) => {
  const { userId, storyId } = useParams();
  const navigate = useNavigate()
  
  const userIndex = stories.users.findIndex(user => user.username === userId);
  const user = stories.users[userIndex];
  const storyIndex = user ? user.stories.findIndex(story => story.id === storyId) : -1;

 

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
      navigate(`/stories/${user?.username}/${user.stories[storyIndex - 1].id}`);
    } else if (userIndex > 0) {
      const prevUser = stories.users[userIndex - 1];
      navigate(`/stories/${prevUser.username}/${prevUser.stories[prevUser.stories.length - 1].id}`);
    }
  };

  return (
    <div className='h-screen w-screen sm:w-52 sm:h-72 flex justify-center items-start relative'>
      <Line className='w-full absolute top-2' percent={40} trailColor='#ccc' strokeColor={"#7C120C"} strokeWidth={2} trailWidth={2} strokeLinecap='square' />
      <button className='absolute left-1 z-10 top-1/2' onClick={prevStory}>Prev</button>
 
       <SotryMedia />
       
      <button className='absolute right-1 z-10 top-1/2' onClick={nextStory}>Next</button>
     
    </div>
  )
} 

export default StoryViewer