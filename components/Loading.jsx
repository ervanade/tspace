import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loading = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
    <div className="flex justify-center items-center mt-[50vh]">
    <FaSpinner className="animate-spin inline-block w-10 h-10 text-secondary" />
    </div>
  </div>
  )
}

export default Loading
