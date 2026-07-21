import React, { useEffect, useState } from 'react'

const Timeout = () => {
    const [timer,setTimer]=useState(0)
    useEffect(()=>{
        let time=setInterval(()=>{
         setTimer((prev) => prev + 1);
        },1000)
        return(()=>{clearInterval(time)})

},[])
  return (
    <>
     <h1>React Timer-{timer}</h1>
    </>
  )
}

export default Timeout