import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      {/* компонент шапка */}
      <Header/>
      {/* компонент поиск и фильтр */}
      {/* список флагов */}
    </>
  )
}

export default App
