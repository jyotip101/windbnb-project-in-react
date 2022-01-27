import React from 'react'

const FormInput = () => {
  return (
    <>
      <form
        // onMouseOver={openSubMenu}
        // onSubmit={submitHandler}
        className='grid   transition md:grid-cols-3  rounded-2xl grid-cols-1 border-0     sm:my-auto '
      >
        <input
          className='w-[90%] border-2 rounded-[14px] md:border-r-2 text-[#000] outline-none m-4 px-[1rem]  py-4'
          type='text'
          placeholder='Helsinki, Finland'
          name='city'
          // value={city}
          // onChange={(e) => setCity(e.target.value)}
        />
        <input
          className='w-[90%] border-2 rounded-[14px] md:border-r-2 text-[#000] outline-none m-4 px-[1rem]  py-4'
          type='text'
          placeholder='Add guests'
          name='guest'
          // value={guest}
          // onChange={(e) => setGuest(e.target.value)}
        />
        <button
          className='flex justify-center items-center outline-none  py-[0.5rem] px-[1rem]  text-[#fff] bg-[#eb5757] 
          border-[1px] rounded-[14px]  text-[18px] w-[10rem]  ml-4   md:my-4  
        '
        >
          <i className='material-icons font-medium pr-1'>search</i>Search
        </button>
      </form>
    </>
  )
}

export default FormInput
