
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FaAngleRight, FaAngleLeft, FaCross, FaVolumeMute } from "react-icons/fa";
import Avatar from '../ui/Avatar';
import StoryMedia from './SotryMedia';
import StoryProgress from '../ui/StoryProgress';
import { getMediaType, getNextUserStory } from '../../utils/helper';
import { preloadImage } from '../../utils/preloadImage';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { FaVolumeHigh } from 'react-icons/fa6';

const StoryViewer = ({ stories }) => {
  const { userId, storyId } = useParams();
  const navigate = useNavigate();
  const [muted, setMuted] = useState(true)
  const userIndex = stories.users.findIndex(user => user.username === userId);
  const user = stories.users[userIndex];
  const storyIndex = user ? user.stories.findIndex(story => story.id === storyId) : -1;
  const story = user.stories[storyIndex];
  const nextUserStory = getNextUserStory(stories, userIndex, storyIndex)?.story
  preloadImage(nextUserStory?.mediaUrl)
  const mediaType=getMediaType(story?.mediaUrl)


  useEffect(() => {
    const timer = setTimeout(() => {
      nextStory();
    }, 5000);



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
      <StoryProgress user={user} story={story} />
      <div>
        <Avatar user={user} />
        <div className='flex gap-4 absolute top-8 font-extrabold right-4 z-10 text-xl text-white'>
         {mediaType==='video' && <div onClick={()=>setMuted(prev=>!prev)}>
          {!muted ? <FaVolumeHigh />
              : <FaVolumeMute />}
          </div>}
          <Link to={"/"}>
            <RxCross2 />
          </Link>
         
        </div>
      </div>
      <StoryMedia story={story} nextStory={nextUserStory} muted={muted} />
      <button className='absolute left-1 z-10 top-1/2 bg-gray-300 rounded-full flex items-center justify-center w-5 h-5' onClick={prevStory}><FaAngleLeft /></button>
      <button className='absolute right-1 z-10 top-1/2 bg-gray-300 rounded-full flex items-center justify-center w-5 h-5' onClick={nextStory}><FaAngleRight /></button>
    </div>
  );
};

export default StoryViewer;
