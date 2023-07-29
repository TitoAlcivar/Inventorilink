import React from 'react'
import { nameFuntion } from '../utils/conditionButton'

export const Buttons = ({ name, handleClick }) => {

  return (
    <>
      <button className='rounded ... bg-green-400 p-1 text-white' onClick={handleClick}>

        {
          name === 'Inventory' ? name :
            <img className='h-12	p-2' src={nameFuntion(name)} alt="" />

        }
      </button>

    </>

  )
}