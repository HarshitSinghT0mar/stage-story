import React, { useRef, useState, useEffect } from 'react'
import { getMediaType } from '../../utils/helper'
import { FaPause, FaPlay } from 'react-icons/fa'
import { preloadImage } from '../../utils/preloadImage'
import { FiLoader } from 'react-icons/fi'

const StoryMedia = ({ story, nextStory, muted }) => {
  const videoRef = useRef()
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoaded,setIsLoaded]=useState(false)
  const mediaType = getMediaType(story?.mediaUrl)

  if (mediaType==='image') {
    preloadImage(story.mediaUrl).then(()=>setIsLoaded(true))
  }

  // const loadMedia = async (story,mediaType) => {
  //   if (mediaType === 'image') {
  //     try {
  //       await preloadImage(story?.mediaUrl)
  //       setIsLoaded(true)
  //     } catch (err) {
  //       console.error('Image failed to preload', err)
  //     }
  //   } else if (mediaType === 'video') {
  //     setIsLoaded(true)
  //   }
  // }

  // useEffect(() => {
  //   loadMedia(story,mediaType)
  // }, [story?.mediaUrl, mediaType])

  // useEffect(() => {
  //   if (nextStory && getMediaType(nextStory.mediaUrl) === 'image') {
  //     preloadImage(nextStory.mediaUrl).catch(err => console.error('Next image failed to preload', err))
  //   }
  // }, [nextStory])

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

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
            ref={videoRef}
            autoPlay
            muted={muted}
            onClick={togglePlayPause}
          />
          <button
            onClick={togglePlayPause}
            className='absolute  left-1/2 top-1/2 text-white text-2xl p-2 rounded'>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      )}
      {mediaType === 'unsupported' && <p className='w-full h-full bg-black'>Unsupported media type</p>}
    </div>
  )
}



export default StoryMedia
