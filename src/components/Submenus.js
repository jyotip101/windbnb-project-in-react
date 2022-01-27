import React from 'react'
import FormInput from './FormInput'

const Submenus = ({ items, setCity }) => {
  // console.log(items)
  return (
    <>
      <div className='flex flex-col h-46 absolute top-0 left-0 w-full z-10 shadow bg-[#fff] p-4 transition-all '>
        <FormInput />
        <div className='flex sm:flex-row flex-col ml-4 '>
          <div className='w-[50%] transition'>
            {items.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    setCity(item)
                    // setGuest(item.split(', ')[1])
                  }}
                  key={index}
                  className='text-[#4F4F4F] transition  my-8 w-max   flex    cursor-pointer hover:text-[#eb5757]'
                >
                  <i className='material-icons  '>location_on</i>
                  {item},
                </button>
              )
            })}
          </div>
          <div className='w-[50%]'>
            <div className=''>
              <h1 className='font-medium text-[20px]'>Adults</h1>
              <p className='text-[#0000004d]  '>13 or above</p>
              <div className='my-4 flex w-fit items-center justify-center'>
                <button className='text-[#828282] border-[1px] border-[#828282]  w-8 p-[0.2rem] rounded-[4px]   font-medium flex '>
                  <i className='material-icons'>add</i>
                </button>
                <p className='m-2'>3</p>
                <button className='text-[#828282] border-[1px] border-[#828282]  w-8 p-[0.2rem] rounded-[4px]   font-medium flex'>
                  <i className='material-icons'>remove</i>
                </button>
              </div>
            </div>
            <div className=''>
              <h1 className='font-medium text-[20px]'>Children</h1>
              <p className='text-[#0000004d]'> Ages 2-12</p>
              <div className='my-4 flex w-fit items-center justify-center'>
                <button className='text-[#828282] border-[1px] border-[#828282]  w-8 p-[0.2rem] rounded-[4px]   font-medium flex '>
                  <i className='material-icons'>add</i>
                </button>
                <p className='m-2'>2</p>
                <button className='text-[#828282] border-[1px] border-[#828282]  w-8 p-[0.2rem] rounded-[4px]   font-medium flex'>
                  <i className='material-icons'>remove</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Submenus
