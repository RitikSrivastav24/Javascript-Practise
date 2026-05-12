import React from 'react'

export const Login = () => {
  return (
    <>
    <div className='h-screen flex justify-center items-center bg-gray-100'>
        <div className='bg-white w-100 shadow-xl rounded-xl p-8'>
            <form className='flex flex-col gap-6'>
                <div className='flex flex-col items-center gap-4'>
                    
                    <img src='https://cdn-icons-png.flaticon.com/512/9322/9322127.png' className='w-10 h-10'/>
                    <h1 className='text-2xl font-bold'>Login in to your account!</h1>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium'>Email</label>
                    <input className='border border-gray-200 rounded-xl shadow-xl outline-none focus:border-blue-500 px-2 py-1'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-medium'>Password</label>
                    <input className='border border-gray-200 rounded-xl shadow-xl outline-none focus:border-blue-500 px-2 py-1'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <button className='bg-blue-500 rounded-xl shadow-xl font-bold w-full py-1 transition hover:bg-blue-700 '>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}
