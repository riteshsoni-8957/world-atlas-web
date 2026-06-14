import { useEffect, useState, useTransition } from "react";
import { NavLink } from "react-router-dom";
import Loader from '../pages/loader'

// import data
import data from '../api/countryData.json';

// import icons
import { FaAngleDown } from "react-icons/fa";


function Country() {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [limit, setLimit] = useState(20);

    // set data in countries
    useEffect(() => {
        startTransition(() => {
            setCountries(data)
            console.log(data); 
        })
    }, []);
    

    // set the country limit
    function showMore() {
        setLimit(limit+20);
    }

    // return loader page
    if(isPending) return <Loader/>

    // return country Section jsx
    return (
        <section className="country-section">
            <div className="container flex">
                <div className="all-buttons">

                </div>

                <div className="cards-container grid grid-four-cols">
                    {
                        countries.slice(0, limit).map((country, index) => {
                            const {name, flag, capital, population, region} = country;

                            return (
                                <div className="country-card" key={index}>
                                    <div className="image-div">
                                        <img src= {flag} alt="" />
                                    </div>

                                    <div className="card-info">
                                        <h3 className="cardTitle">{name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}</h3>

                                        <p>
                                            Capital: 
                                            <small>{capital[0]}</small>
                                        </p>

                                        <p>
                                            Region:
                                            <small>{region}</small>
                                        </p>

                                        <p>
                                            Population:
                                            <small>{population}</small>
                                        </p>

                                        <NavLink to={`/country/${name.common}`}>
                                            <button className="btn">
                                                Read More
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="show-more-btn">
                    <button className="btn" onClick={showMore}>
                        show More
                        <FaAngleDown />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Country;