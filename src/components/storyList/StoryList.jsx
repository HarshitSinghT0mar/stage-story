import React from 'react'
import StoryListItem from './StoryListItem'



const StoryList = () => {
  return (
      <div className='flex gap-4 overflow-x-scroll'>
          {[...new Array(20)].map((story, index) => {
              return <StoryListItem key={ index} />
          })}
    </div>
  )
}

export default StoryList