import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './header/header'
import Search from './search/search'
import Filter from './filter/filter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page'>     
      {/* компонент шапка */}
      <Header/>
      {/* компонент поиск и фильтр */}
      <Search/>
      <Filter/>
      {/* список флагов */}
    </div>
  )
}

export default App
