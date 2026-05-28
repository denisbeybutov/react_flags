import './flag.css'
import FLAGS from '../flagsData.js'

export default function Flag(props) {
    let {country} = props;
    let image;
    let population;
    let region;
    let capital;

    for(let flag of FLAGS) {
        if(flag.name === country) {
            image = flag.flags.png
            population = flag.population;
            region = flag.region;
            capital = flag.capital;
        }
    }
    

    return (
        <button className="flag">
            <img className='flag__image' src={image} alt="" />
            <div className="flag__description">
                <h2 className="flag__name">{country}</h2>
                <div className="flag__population population">
                    <h3 className="population__population">Population:</h3>
                    <p className="population__count">{population}</p>
                </div>
                <div className="flag__region region">
                    <h3 className="region__region">Region: </h3>
                    <p className="region__name">{region}</p>
                </div>
                <div className="flag__capital capital">
                    <h3 className="capital__capital">Capital:</h3>
                    <p className="capital__name">{capital}</p>
                </div>

            </div>
        </button>
    )
}