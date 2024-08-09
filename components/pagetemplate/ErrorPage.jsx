import React from 'react'

const ErrorPage = ({statusCode, message}) => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col text-white bg-slate-800'>
      <h3 className='text-4xl font-medium'>{statusCode}</h3>
      <h6>{message}</h6>
    </div>
  )
}

export default ErrorPage