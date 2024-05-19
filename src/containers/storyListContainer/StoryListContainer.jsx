import React from 'react'
import StoryList from '../../components/storyList/StoryList'
import { stories } from '../../data/stories'
import { useNavigate } from 'react-router'

const StoryListContainer = () => {
    const navigate=useNavigate()
    const handleStoryClick = (user) => {
        navigate(`/stories/${user?.name}/${user?.stories[0]?.id}`)
    }

    
  return (
    <StoryList stories={stories} onStoryClick={handleStoryClick} />
  )
}

export default StoryListContainer