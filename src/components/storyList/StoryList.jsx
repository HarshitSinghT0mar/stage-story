import React from 'react'
import StoryListItem from './StoryListItem'
import { useStoryListController } from './storyList.controller'

const StoryList = () => {
  const {stories, handleStoryClick}=useStoryListController()
  
  return (
      <div className='flex p-2 gap-6 overflow-x-scroll'>
          {stories?.users?.map((user, index) => {
            return <StoryListItem user={user} key={index} onClick={()=>handleStoryClick(user)}  />
          })}
    </div>
  )
}

export default StoryList