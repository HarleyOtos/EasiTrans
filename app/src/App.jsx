import { useState } from 'react'
import { Navbar, Welcome, Footer, Loader, Services, Transactions } from './components'

// import './App.css'

const App = () => {

  return (
    <div className='min-h-screen bg-gradient'>
      <div className='gradient-bg-value'>
        <Navbar />
      </div>
        <Welcome />
        <Services />
        <Transactions />
      <div className='fixed bottom-0 w-full gradient-bg-footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
