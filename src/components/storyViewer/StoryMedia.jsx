import React from 'react'
import { FiLoader } from 'react-icons/fi'

const StoryMedia = ({ story, muted, isLoaded }) => {

  if (!isLoaded) {
    return <div className='w-full h-full flex bg-black items-center text-white justify-center'><FiLoader /></div>
  }

  return (
    <div className='w-full h-full relative'>
      {story?.type === 'image' && <img src={story?.mediaUrl} alt="Media Content" className='object-cover sm:object-contain w-full h-full bg-black' />}
      {story?.type === 'video' && (
        <div className='w-full h-full'>
          <video
            src={story?.mediaUrl}
            className='object-cover w-full h-full bg-black'
            autoPlay
            muted={muted}
          />
        </div>
      )}
    </div>
  )
}



export default StoryMedia
