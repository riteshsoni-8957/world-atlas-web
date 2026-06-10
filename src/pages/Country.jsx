import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { NavLink } from "react-router-dom";
import Loader from '../pages/loader'

// import icons
import { FaAngleDown } from "react-icons/fa";


function Country() {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [limit, setLimit] = useState(20);

    // get the Data
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data);
            
            console.log(res);
            console.log(res.data);
        });
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
                            const {name, flags, capital, population} = country;

                            return (
                                <div className="country-card" key={index}>
                                    <div className="image-div">
                                        <img src= {flags.svg} alt= {flags.alt} />
                                    </div>

                                    <div className="card-info">
                                        <h3 className="cardTitle">{name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}</h3>

                                        <p>
                                            Capital: 
                                            <small>{capital[0]}</small>
                                        </p>

                                        <p>
                                            Population:
                                            <small>{population}</small>
                                        </p>

                                        <button className="btn">
                                            <NavLink to={`/country/${name.common}`}>
                                                Read More
                                            </NavLink>
                                        </button>
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