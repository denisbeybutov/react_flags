import './search.css'
import SearchIcon from '../assets/search.svg'

export default function Search() {
    return (
        
        <form className='form'>
            <img className='form__icon' src={SearchIcon} alt="" />
            <input id='input' className='form__input' type="text" placeholder='Search for a country...' />
        </form>
            
        
    )
}