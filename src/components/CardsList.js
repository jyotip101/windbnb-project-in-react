import React from 'react'
import SingleCard from './SingleCard'
import Data from './stays.json'
import { useGlobalContext } from './Context'

const CardsList = () => {
  const { closeSubMenu } = useGlobalContext()

  return (
    <div className='m-5' onMouseOver={closeSubMenu}>
      <div className='flex flex-row justify-between my-4'>
        <h1>Stays in Finland</h1>
        <p>12+ stays</p>
      </div>

      <div className='flex flex-wrap  md:justify-around justify-center'>
        {Data.map((item) => {
          return <SingleCard key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default CardsList
