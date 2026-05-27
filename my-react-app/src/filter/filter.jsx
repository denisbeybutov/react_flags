import './filter.css'
import ExpandMore from '../assets/expand-more.svg'

export default function Filter() {
    function toggleMenu() {        
        const filetList = document.querySelector('.filter__list');
        filetList.classList.toggle('hidden');
    }
    return (
        <div className="filter">
            <button onClick={toggleMenu} className="filter__button">
                <p>Filter by Region</p>
                <img src={ExpandMore} alt="" />
            </button>
            <ul className="filter__list hidden">
                <li className="filter__item">Africa</li>
                <li className="filter__item">America</li>
                <li className="filter__item">Asia</li>
                <li className="filter__item">Europe</li>
                <li className="filter__item">Oceania</li>
            </ul>
        </div>
    )
}