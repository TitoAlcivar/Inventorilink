import React, { useContext } from 'react'
import { UserContext } from './Context'


export const Armor = () => {

  // const {link, setLink} = useContext(UserContext)

  // console.log(link);


  const getData = async () => {
    const data = await fetch("https://practise-game-inventory.vercel.app/api/items/armor")
    const response = await data.json()
    console.log(response.results);
  }
  getData()

  return (
    <div></div>
  )
}
