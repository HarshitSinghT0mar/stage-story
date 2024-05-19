import React from 'react'
import StoryList from '../../components/storyList/StoryList'
import { stories } from '../../data/stories'

const StoryListContainer = () => {
  return (
    <StoryList stories={stories} />
  )
}

export default StoryListContainer