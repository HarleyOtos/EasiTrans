import React, { useContext } from 'react'

import { TransactionContext } from "../context/TransContext";

import { dummyData } from "../utils/dummyData";

const Transactions = () => {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='flex w-full justify-center items-center 2xl:px-20'>
        <div className='flex flex-col md:p-12 px-4'>
          {currentAccount ? (
            <h3 className='text-white text-3xl text-center my-2'>
              Latest Transactions
            </h3>
          ) : (
            <h3 className='text-white text-3xl text-center my-2'>
              Connect your wallet to see the latest transactions
            </h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default Transactions