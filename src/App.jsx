import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './atoms/recoil.atoms'

function App() {
  
  const [count,setCount] = useRecoilState(countAtom)

  useEffect(()=>{
    setCount(201)
  },[])

  return (
    <>
    <h3>{count}</h3>
    </>
  )
}

export default App
