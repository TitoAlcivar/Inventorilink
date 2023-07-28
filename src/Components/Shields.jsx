import React from 'react'

export const Shields = () => {

  const getData = async () => {
    const data = await fetch("https://practise-game-inventory.vercel.app/api/items/shield")
    const response = await data.json()
    console.log(response.results);
  }
  getData()

  return (
    <div></div>
  )
}
