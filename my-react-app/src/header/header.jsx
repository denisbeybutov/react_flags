import './header.css'
import SwithcThemeIcon from '../assets/switch-theme.svg'

export default function Header(){

    return (
        
            <div className="header">
                <h1 className='header__text'>Where in the world?</h1>
                <button className='header__button'>
                    <img src={SwithcThemeIcon} alt="" />    
                    <p>Light Mode</p>
                </button>
                
            </div>
                        
        
    )
}