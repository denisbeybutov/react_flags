import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './header/header'
import Search from './search/search'
import Filter from './filter/filter'
import Flag from './flag/flag'
import FLAGS from './flagsData.js'

function App() {
  const [count, setCount] = useState(0)  

  return (
    <div className='page'>     
      {/* компонент шапка */}
      <Header/>
      {/* компонент поиск и фильтр */}
      <div className="search-and-filter">
        <Search/>
        <Filter/>
      </div>
      
      {/* список флагов */}
      <div className="flag__list">
        {
          FLAGS.map((flag)=>{
            return <Flag country = {flag.name} key = {flag.name}/>
          })
        }       
      </div>      
           
    </div>
  )
}

export default App
