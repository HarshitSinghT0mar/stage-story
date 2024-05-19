import React from 'react'
import { getMediaType } from '../../utils/helper'


const SotryMedia = ({ story }) => {

    // const mediaType = getMediaType(story?.mediaUrl)

  return (
      <div className='w-full h-full'>
         
          {<img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1715990400&semt=sph' alt="Media Content" className='object-cover w-full h-full' />}
          {/* {mediaType === 'video' && <video src={mediaUrl} controls className='object-cover w-full h-full' />}
          {mediaType === 'unsupported' && <p className='w-full h-full bg-black'>Unsupported media type</p>} */}
    </div>
  )
}

export default SotryMedia