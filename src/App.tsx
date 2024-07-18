
import { useState } from 'react'
import './App.css'
import StarRating from './components/StarRating'

function App() {

  const[rating,setRating]=useState(0);


  const handleClick=(rating:number)=>{
    setRating(rating)
  }

  console.log(rating,"rayay")

  return (
    <>
      <StarRating rating={rating} size={5} onClick={handleClick}/>
    </>
  )
}

export default App
