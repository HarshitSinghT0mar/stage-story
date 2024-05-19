import React from 'react'
import { getMediaType } from '../../utils/helper'
import { useParams } from 'react-router'


const SotryMedia = ({story}) => {

    


    const mediaType = getMediaType(story?.mediaUrl)

  return (
      <div className='w-full h-full'>
         
          {mediaType === 'image' && <img src={story.mediaUrl} alt="Media Content" className='object-cover w-full h-full' />}
          {mediaType === 'video' && <video src={story?.mediaUrl} controls className='object-cover w-full h-full' />}
          {mediaType === 'unsupported' && <p className='w-full h-full bg-black'>Unsupported media type</p>}
    </div>
  )
}

export default SotryMedia