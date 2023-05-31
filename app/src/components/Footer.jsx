import React from 'react'

const Footer = () => {
  return (
    <div >
      <div className="w-full flex md:justify-center justify-between items-center flex-col p-4">

        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-1 " />
        <div className="sm:w-[90%] w-full flex justify-center items-center mt-3">
          <p className="text-gray-300 text-left text-xs sm:text-xs">Copyright © 2023 || EasiTrans</p>
        </div>
        <div className="sm:w-[90%] w-full flex justify-center items-center mt-3 mb-1">
          <p className="text-gray-300 text-right text-xs">All rights reserved</p>
        </div>
      </div>

    </div>
  )
}

export default Footer