import React from 'react'

const Avatar = ({user}) => {
  return (
      <div className='flex gap-2 items-center absolute top-6 left-2 z-10 text-white bg-transparent font-bold text-sm'>
          <div className=' w-8 h-8 rounded-[50%]'>
              <img src={user?.userImage} className='w-full h-full object-cover rounded-full' />
          </div>
          <span>{user?.username}</span>
        
      </div>
  )
}

export default Avatar