import React from 'react'

export const Card = () => {
  return (
    <>
    <div className='h-screen bg-black justify-center items-center flex p-4'>
        <div className='bg-white/20 backdrop-blur-lg border-white/30 w-100 shadow-xl rounded-2xl max-w-sm flex flex-col p-6 items-center text-center gap-4'>
           <img src='https://cdn-icons-png.flaticon.com/512/9322/9322127.png' className='w-20 h-10 object-contain'/>
           <h1 className='font-bold text-2xl'>
            This is my Card
           </h1>
           <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptatem, atque impedit velit unde consequuntur at sint, illum enim ex sed reprehenderit, minima praesentium expedita quibusdam in perspiciatis iste aperiam!</p>
           <button className=' bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white rounded-2xl shadow-2xl mb-2 mt-2 font-bold transition'>Learn More</button>
        </div>
    </div>
    </>
  )
}
