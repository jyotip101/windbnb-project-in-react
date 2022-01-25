import React from 'react'

const SingleCard = ({ item }) => {
  const {
    city,
    country,
    superHost,
    title,
    id,
    rating,
    maxGuests,
    type,
    beds,
    photo,
  } = item
  return (
    <div className='flex justify-center   flex-col m-4 mb-8 max-w-[350px] w-fit'>
      <img src={photo} alt={title} className='w-fit rounded-[24px]' />
      <div className='flex flex-row justify-between  my-3'>
        <div className='flex   justify-center items-center'>
          {superHost && (
            <p className=' border-[1px] border-[#000]  w-fit p-4 py-1 mr-1 rounded-2xl font-medium uppercase'>
              super Host
            </p>
          )}

          <p className='mr-2 text-[#828282] '>
            {type} {beds !== null && `. ${beds} beds`}
          </p>
        </div>
        <p className='ml-1 flex justify-center p-1 text-[#4F4F4F]'>
          <i className='material-icons text-[#eb5757]'>star</i> {rating}
        </p>
      </div>
      <p className='font-medium text-xl'>{title}</p>
    </div>
  )
}

export default SingleCard
