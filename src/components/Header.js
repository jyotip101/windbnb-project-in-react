import React from 'react'
import logo from '../logos/logo.png'
const Header = () => {
  return (
    <>
      {/* <i className='material-icons'>polygon</i>  */}

      <div className='flex flex-col md:flex-row justify-between m-4 bg-[#fff]'>
        <div className='p-3'>
          <img src={logo} alt='logo' />
        </div>

        <div className='flex   rounded-2xl border-0 m-1 shadow-md'>
          <input
            className=' md:w-36 border-r-2 w-full outline-none  p-3 text-[#000] '
            type='text'
            placeholder='Helsinki, Finland'
            aria-label='default input example'
          ></input>
          <input
            className='md:w-32 w-full border-r-2  outline-none  p-3 '
            type='text'
            placeholder='Add guests'
          ></input>
          <button className='flex  md:w-full justify-start  p-3  text-[#eb5757]'>
            <i className='material-icons'>search</i>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header
