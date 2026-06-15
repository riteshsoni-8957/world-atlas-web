import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loader from "./loader";

import data from '../api/countryData.json'

function CountryDetails() {
  const params = useParams();

  console.log(params);

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

    // get the Data
    useEffect(() => {
        startTransition(async () => {
          const countryData = data.find(
            (item) => item.name.common === params.id
          );

          setCountry(countryData);
          console.log(countryData);
        });
    }, [params.id]);

    // return loader page
    if(!country) return <Loader/>

  return (
    <section className="country-details-section flex">
      <div className="container flex">
        <div className="grid grid-two-cols">
          <div className="country-image">
            <img src={country.flag} alt="" />
          </div>

          <div className="country-details">
            <h1 className="country-title">{country.name.official}</h1>

            <p>Native Name: 
              <span>
                {
                  Object.keys(country.name.native)
                  .map((key) => country.name.native[key].common)
                  .join(", ")
                }
              </span>
            </p>

            <p>Population: <span>{country.population}</span> </p>
            <p>Region: <span>{country.region}</span> </p>
            <p>Sub Region: <span>{country.subregion}</span> </p>
            <p>Capital: <span>{country.capital}</span> </p>
            <p>Top Level Domian: <span>{country.tld[0]}</span> </p>

            <p>Currencies: 
              <span>
                {
                  Object.keys(country.currencies)
                  .map((key) => country.currencies[key].name)
                  .join(", ")
                }
              </span> 
            </p>

            <p>Languages: 
              <span>
                {
                  Object.keys(country.languages)
                  .map((key) => country.languages[key])
                  .join(", ")
                }
              </span>
            </p>
          </div>
        </div>

        <div className="back-btn">
          <NavLink to='/country'>
            <button>
              Go Back
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default CountryDetails;