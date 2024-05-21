import React from 'react'
import StoryListItem from './StoryListItem'

const StoryList = ({ stories, onStoryClick }) => {
  
  return (
      <div className='flex p-2 gap-6 overflow-x-scroll'>
          {stories?.users?.map((user, index) => {
            return <StoryListItem user={ user} key={index} onClick={()=>onStoryClick(user)}  />
          })}
    </div>
  )
}

export default StoryList