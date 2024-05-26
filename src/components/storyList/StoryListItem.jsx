import React from 'react'

const StoryListItem = ({ user, onClick }) => {
  return (
    <div className='flex flex-col gap-3 items-center cursor-pointer' onClick={onClick}>
      <div className='rounded-full bg-gradient-to-r from-primary via-red-500 to-yellow-700 p-[2px]'>
        <div className='w-16 h-16 border-2 border-white rounded-full flex-shrink-0'>
          <img className='w-full h-full rounded-full object-cover' src={user?.userImage} alt={`${user?.username}'s story`} />
        </div>
      </div>
      <span>{user?.username}</span>
    </div>
  )
}

export default StoryListItem
