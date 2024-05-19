import React from 'react'

const StoryListItem = ({ user, onClick }) => {
  return (
    <div className='flex flex-col gap-3 items-center' onClick={onClick}>
    <div className='w-20 h-20  border-4 flex-shrink-0 border-solid border-primary rounded-[50%]'>
        <img className='w-full h-full rounded-[50%] object-cover' src={user?.userImage} />
      </div>
      <span>{user?.username}</span>
    </div>
  )
}

export default StoryListItem