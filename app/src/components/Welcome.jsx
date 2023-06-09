import React, { useContext } from 'react';

import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransContext";
import { Loader } from "./";
import { shortenAddress } from "../utils/shortenAddress";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, handleChange, value }) => (
  <input
    placeholder={placeholder}
    name={name}
    type={type}
    value={value}
    step="0.0001"
    onChange={(e) => handleChange(e, name)}
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
  />
);

const Welcome = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='flex w-full justify-center items-center'>
        <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
          <div className='flex flex-1 justify-start flex-col mf:mr-10'>
            <h1 className='text-3xl sm:text-4xl text-white text-gradient py-1'>
              EasiTrans
            </h1>
            <h3 className='text-left mt-5 font-light md:w-9/12 w-11/12 text-base text-white'>
              A fun and easy way of sending internet money to friends and family.
            </h3>
            {!currentAccount && (<button
              type='button'
              onClick={connectWallet}
              className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-md cursor-pointer text-white font-bold hover:bg-[#2546bd]'
            >
              Connect Wallet
            </button>
            )}

            <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
              <div className={`rounded-tl-2xl ${commonStyles}`}>
                Secure
              </div>
              <div className={commonStyles}>
                Blockchain
              </div>
              <div className={`sm:rounded-tr-2xl ${commonStyles}`}>
                Web 3.0
              </div>
              <div className={`sm:rounded-bl-2xl ${commonStyles}`}>
                Transparent
              </div>
              <div className={commonStyles}>
                Ethereum
              </div>
              <div className={`rounded-br-2xl ${commonStyles}`}>
                Fast Transactions
              </div>
            </div>
          </div>

          <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
            <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 card-2 white-glassmorphism '>
              <div className='flex justify-between flex-col w-full h-full'>
                <div className='flex justify-between items-start'>
                  <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                    <SiEthereum fontSize={24} color='' />
                  </div>
                  <BsInfoCircle fontSize={24} color='' />
                </div>
                <div>
                  {currentAccount ? (
                    <p className='text-gray-700 font-bold text-sm'>
                      {shortenAddress(currentAccount)}
                    </p>
                  ) : (
                    <p className='text-gray-700 font-bold text-sm'>
                      Connected Wallet
                    </p>
                  )}
                  <p className='text-gray-700 font-bold text-lg mt-1'>
                    EasiTrans
                  </p>
                </div>
              </div>
            </div>

            <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
              <Input placeholder="Address to" name="addressTo" type="text" handleChange={handleChange} />
              <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
              <Input placeholder="Keyword (GIF)" name="keyword" type="text" handleChange={handleChange} />
              <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

              <div className='h-[1px] w-full bg-gray-400 my-2' />

              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type='button'
                  onClick={handleSubmit}
                  className='text-white w-full mt-2 border-[1px] p-2 rounded-full border-[#3d4f7c] cursor-pointer'
                >
                  Send
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome