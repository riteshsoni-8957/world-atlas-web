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
    const[search, setSearch] = useState();
    const[filter, setFilter] = useState("all");

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

    // create handle input change
    function handleSearchChange(event) {
        setSearch(event.target.value);
    }

    // create handle select change
    function handleSelectChange(event) {
        setFilter(event.target.value);
    }


    function searchCountry(country) {
        if(search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        } 
        else{
            return countries;
        }
    }

    function filterRegion(country) {
        if(filter === "all") {
            return countries;
        } else{
            return country.region === filter;
        }
    }

    // here is the main logic for filter countries
    const filteredCountry = countries.filter((country) =>
        searchCountry(country) && filterRegion(country)

        // if(search) {
        //     return country.name.common.toLowerCase().includes(search.toLowerCase());
        // }

        // if(!search) {
        //     return countries;
        // }

        // if(filter === "all") {
        //     return countries;
        // }

        // if(filter != "all") {
        //     return country.region === filter;
        // }
    )


    // sort Countries by Asc and Desc
    function sortCountries(value) {
        const sortCountry = [...countries].sort((a, b) => {
            return value === "Asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common)
        })

        setCountries(sortCountry);
    }

    // return loader page
    if(isPending) return <Loader/>

    console.log(search, filter);

    // return country Section jsx
    return (
        <section className="country-section">
            <div className="container flex">
                <div className="searchFilter-section">
                    <div className="search-input">
                        <input type="text" placeholder="Search..." value={search} onChange={handleSearchChange} />
                    </div>

                    <div className="asc-btn">
                        <button className="btn1" onClick={() => sortCountries("Asc")} >Asc</button>
                    </div>

                    <div className="desc-btn">
                        <button className="btn2" onClick={() => sortCountries("Desc")}>Desc</button>
                    </div>

                    <div className="select-option">
                        <select className="select-section" value={filter} onChange={handleSelectChange}>
                            <option value="all">All</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                    
                </div>

                <div className="cards-container grid grid-four-cols">
                    {
                        filteredCountry.slice(0, limit).map((country, index) => {
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