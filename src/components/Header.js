import React, { useState } from 'react'
import logo from '../logos/logo.png'
import { useGlobalContext } from './Context'
import Data from './stays.json'
import Submenus from './Submenus'

const items = [...new Set(Data.map((item) => item.city + ', ' + item.country))]

const Header = () => {
  const { isSubMenuOpen, openSubMenu, closeSubMenu } = useGlobalContext()
  const [data, setData] = useState(Data)

  const submitHandler = (e) => {
    e.preventDefault()
    // if (city && guest) {
    //   const tempBtn = e.target.getBoundingClientRect()
    //   // openSubMenu()
    //   console.log(tempBtn)
    //   closeSubMenu()
    // } else {
    //   console.log('error')
    //   closeSubMenu()
    // }
    closeSubMenu()
  }
  return (
    <>
      {/* <i className='material-icons'>polygon</i>  */}

      <div className='flex flex-col md:flex-row justify-between m-4 bg-[#fff]'>
        <div className='p-3'>
          <img src={logo} alt='logo' />
        </div>

        <div
          onMouseOver={openSubMenu}
          className='flex   transition  rounded-2xl border-0 m-1 shadow-md hover:shadow-none focus:shadow-none'
        >
          <input
            className=' md:w-36 border-r-2 hover:w-full w-full outline-none  p-3 text-[#000] '
            type='text'
            placeholder='Helsinki, Finland'
            name='city'
            // value={city}
            // onChange={(e) => setCity(e.target.value)}
          />
          <input
            className='md:w-32 w-full border-r-2 text-[#000]  outline-none  p-3 '
            type='text'
            placeholder='Add guests'
            name='guest'
            // value={guest}
            // onChange={(e) => setGuest(e.target.value)}
          />
          <button className='flex  md:w-full justify-start outline-none  p-3  text-[#eb5757]'>
            <i className='material-icons'>search</i>
          </button>
        </div>
      </div>
      {isSubMenuOpen && <Submenus items={items} />}
    </>
  )
}

export default Header
