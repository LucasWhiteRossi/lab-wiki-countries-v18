import countries from '../../countries.json'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './style.modules.css'

export function CountryDetails() {
    
    const params = useParams()
    const country = countries.filter((c)=>{return c.alpha3Code === params.alpha3Code})[0]
    
    return (
    
        <div className="col-7 detail-box">
        <div className="flag-div">
        <img 
            className="flag-image"
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={`${country.name.official} flag`}
        />
        </div>
        <h1 style={{textAlign: "center"}}>{country.name.official}</h1>
        <table className="table" style={{textAlign: "center"}}>
            <thead></thead>
            <tbody>
            <tr>
                <td style={{width: "30%"}}>Capital</td>
                <td>{country.capital}</td>
            </tr>
            <tr>
                <td>Area</td>
                <td>
                {`${country.area} km`}
                <sup>2</sup>
                </td>
            </tr>
            <tr>
                <td>Borders</td>
                <td>
                <ul>
                    {
                        country.borders.map((borderAlpha3)=>{
                            return (
                                <li><Link to={`/${borderAlpha3}`}>{countries.filter((currentElement)=>{return currentElement.alpha3Code===borderAlpha3})[0].name.official}</Link></li>
                            );
                        })  
                    }
                </ul>
            </td>
            </tr>
            </tbody>
        </table>
        </div>
    );
}