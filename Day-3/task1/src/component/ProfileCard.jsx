import React from 'react'
import pic from '../assets/mypic.png'
const ProfileCard = () => {
  return (
    <>
    <div className='p-10 flex justify-center'>
    <div className="p-5 bg-pink-200 w-60 text-center rounded-2xl">
        <div className='flex justify-center'>
            <img src={pic} alt="" className='w-30 h-30 rounded-full'   />
        </div>
        <div>
            <h3>Abinaya</h3>
            <p>Full Stack Developer</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default ProfileCard