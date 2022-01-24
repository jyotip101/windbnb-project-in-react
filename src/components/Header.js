import React from 'react'

const Header = () => {
  return (
    <>
      {/* <div className='header-section'>
        <div className='header-section-center'>
          <div className='logo'>
            <h1>
              <i className='material-icons'>polygon</i>
            </h1>
          </div>
        </div>
      </div> */}

      <div class='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
        <div class='shrink-0'></div>
        <div>
          <div class='text-xl font-medium text-black'>ChitChat</div>
          <p class='text-slate-500'>You have a new message!</p>
        </div>
      </div>
    </>
  )
}

export default Header
