import React from 'react'

const StoryListItem = ({ user, onClick }) => {
  return (
    <div className='flex flex-col gap-3 items-center' onClick={onClick}>
    <div  className='w-20 h-20  border-4 flex-shrink-0 border-solid border-primary rounded-[50%]'>
      <img className='w-full h-full rounded-[50%] object-cover' src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1715990400&semt=sph' />
      </div>
      <span>{user?.username}</span>
    </div>
  )
}

export default StoryListItem