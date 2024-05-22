
import React from 'react';
import { FaAngleRight, FaAngleLeft, FaVolumeMute } from "react-icons/fa";
import Avatar from '../ui/Avatar';
import StoryMedia from './SotryMedia';
import StoryProgress from '../ui/StoryProgress';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { FaVolumeHigh } from 'react-icons/fa6';
import { useStoryViewerController } from './storyViewer.controller';

const StoryViewer = () => {
  const controller = useStoryViewerController()
  const { muted, setMuted, prevStory, nextStory, story} = controller || {}


  return (
    <div className='h-screen w-screen sm:w-52 sm:h-72 flex flex-col justify-center items-start relative'>
      <StoryProgress {...controller} />
      <div>
        <Avatar {...controller} />
        <div className='flex gap-4 absolute top-8 font-extrabold right-4 z-10 text-xl text-white'>
          {story?.type=== 'video' && <div onClick={() => setMuted(prev => !prev)}>
            {!muted ? <FaVolumeHigh />
              : <FaVolumeMute />}
          </div>}
          <Link to={"/"}>
            <RxCross2 />
          </Link>

        </div>
      </div>
      <StoryMedia {...controller} />
      <button className='absolute left-1 z-10 top-1/2 bg-gray-300 rounded-full flex items-center justify-center w-5 h-5' onClick={prevStory}><FaAngleLeft /></button>
      <button className='absolute right-1 z-10 top-1/2 bg-gray-300 rounded-full flex items-center justify-center w-5 h-5' onClick={nextStory}><FaAngleRight /></button>
    </div>
  );
};

export default StoryViewer;
