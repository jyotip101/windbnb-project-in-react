import React from 'react'

const FormInput = () => {
  return (
    <>
      <form
        // onMouseOver={openSubMenu}
        // onSubmit={submitHandler}
        className='grid   transition md:grid-cols-3  rounded-2xl grid-cols-1 border-0     sm:my-auto '
      >
        <div className='w-[90%] md:border-2 md:rounded-[14px]  border-2 border-b-0 rounded-t-[14px]  text-[#000] outline-none md:m-4 px-[1rem]  py-2 sm:mb-0 sm:ml-4'>
          <label
            htmlFor='city'
            className='text-[#000] text-[16px]  uppercase font-medium'
          >
            Location
          </label>
          <input
            className='w-[100%] border-0 text-[#000] outline-none '
            type='text'
            placeholder='Helsinki, Finland'
            name='city'
            // value={city}
            // onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className='w-[90%] md:border-2 md:rounded-[14px] border-2 text-[#000] outline-none md:m-4 sm:ml-4 sm:mb-4 px-[1rem] rounded-t-none rounded-b-[14px] py-2 sm:border-t-0'>
          <label
            htmlFor='guest'
            className='text-[#000] text-[16px]  uppercase font-medium'
          >
            Guests
          </label>
          <input
            className='w-[100%] border-0 text-[#000] outline-none '
            type='text'
            placeholder='Add guests'
            name='guest'
            // value={guest}
            // onChange={(e) => setGuest(e.target.value)}
          />
        </div>

        <button
          className='flex justify-center items-center outline-none  py-[0.5rem] px-[1rem]  text-[#fff] bg-[#eb5757] 
          border-[1px] rounded-[14px]  text-[18px] w-[10rem]  ml-4 my-4  md:my-4  
        '
        >
          <i className='material-icons font-medium pr-1'>search</i>Search
        </button>
      </form>
    </>
  )
}

export default FormInput
