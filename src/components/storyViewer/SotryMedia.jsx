import React, { useRef, useState, useEffect } from 'react'
import { getMediaType } from '../../utils/helper'

const StoryMedia = ({ story, nextStory }) => {
  const videoRef = useRef()
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const mediaType = getMediaType(story?.mediaUrl)

  const loadMedia = async (story,mediaType) => {
    if (mediaType === 'image') {
      try {
        await preloadImage(story?.mediaUrl)
        setIsLoaded(true)
      } catch (err) {
        console.error('Image failed to preload', err)
      }
    } else if (mediaType === 'video') {
      setIsLoaded(true)
    }
  }

  useEffect(() => {
    loadMedia(story,mediaType)
  }, [story?.mediaUrl, mediaType])

  useEffect(() => {
    if (nextStory && getMediaType(nextStory.mediaUrl) === 'image') {
      preloadImage(nextStory.mediaUrl).catch(err => console.error('Next image failed to preload', err))
    }
  }, [nextStory])

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  if (!isLoaded) {
    return <div className='w-full h-full flex items-center justify-center'>Loading...</div>
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
            muted
            onClick={togglePlayPause}
          />
          <button
            onClick={togglePlayPause}
            className='absolute bottom-4 left-4 bg-white text-black p-2 rounded'>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      )}
      {mediaType === 'unsupported' && <p className='w-full h-full bg-black'>Unsupported media type</p>}
    </div>
  )
}

const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve()
    img.onerror = (err) => reject(err)
  })
}

export default StoryMedia
