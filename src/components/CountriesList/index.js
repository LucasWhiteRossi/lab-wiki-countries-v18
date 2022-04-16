import './style.modules.css'
import { Link } from "react-router-dom";
import countries from '../../countries.json'


export function CountriesList(props) {
    return (
        <div class="col-5" style={{maxHeight:"90vh", overflow:"scroll"}}>
            <div class="list-group">
                
                {countries.map((country)=>{
                    return (
                        <Link class="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
                            <div className="d-flex justify-content-center">
                            <img 
                                className="little-flag align-self-center"
                                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                                alt={`${country.name.official} flag`}
                            />
                            </div>
                            <p></p>
                            <div className="country-name">
                            {country.name.official}
                            </div>
                        </Link>
                    );
                })}
                
            </div>
        </div>
    );
}
