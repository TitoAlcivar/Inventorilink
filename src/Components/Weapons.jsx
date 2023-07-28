import React from 'react'

export const Weapons = () => {

  const getData = async () => {
    const data = await fetch("https://practise-game-inventory.vercel.app/api/items/weapon")
    const response = await data.json()
    console.log(response.results);
  }
  getData()

  return (
    <div>weapons</div>
  )
}
