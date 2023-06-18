import { Link } from "react-router-dom";

const divStyle = {
    maxHeight: '90vh',
};

const CountriesList = ({countries}) => {
    return (

                <div className="col-4 overflow-y-scroll" style={divStyle}>
                    {countries.map(country => {
                        return (
                            <div className="list-group">
                                <Link key={country.alpha3Code} className='list-group-item list-group-item-action' to={`/country/${country.alpha3Code}`}>
                                    <img className="countryImage"
                                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                                        alt={country.alpha3Code}
                                    />

                                    <p>{country.name.common}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
 
    )
}

export default CountriesList;