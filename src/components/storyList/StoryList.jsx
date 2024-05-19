import React from 'react'
import StoryListItem from './StoryListItem'



const StoryList = ({stories}) => {
  return (
      <div className='flex gap-6 overflow-x-scroll'>
          {stories?.users?.map((user, index) => {
            return <StoryListItem user={ user} key={index} />
          })}
    </div>
  )
}

export default StoryList