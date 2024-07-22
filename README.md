### To get started with recoil you need to first install the recoil

```
npm i recoil
```

### wrap the App component in RecoilRoot

```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)
```

### go to src --> create atoms folder(feel to change the folder name it's totally depends on you)

### create a file for ex : - recoil.atoms.js (feel to change the file name it's totally depends on you)

### create an atom in the recoil.atoms.js like this

```
import { atom } from "recoil";

export const countAtom = atom({
    key:'countAtom',
    default:10
})
```

### use the atom wherever you want like i use in the App.jsx

```
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
```



