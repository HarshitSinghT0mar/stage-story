import React from 'react'
import { FiLoader } from 'react-icons/fi'

const StoryMedia = ({ story, muted, isLoaded , mediaType}) => {

  if (!isLoaded) {
    return <div className='w-full h-full flex bg-black items-center text-white justify-center'><FiLoader /></div>
  }

  return (
    <div className='w-full h-full relative'>
      {mediaType === 'image' && <img src={story?.mediaUrl} alt="Media Content" className='object-cover w-full h-full' />}
      {mediaType === 'video' && (
        <div className='w-full h-full'>
          <video
            src={story?.mediaUrl}
            className='object-cover w-full h-full'
            autoPlay
            muted={muted}
          />
        </div>
      )}
      {mediaType === 'unsupported' && <p className='w-full h-full bg-black'>Unsupported media type</p>}
    </div>
  )
}



export default StoryMedia
