import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loader from "./loader";
import { getCountryIndData } from "../api/postApi";

function CountryDetails() {
  const params = useParams();

  console.log(params);


  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

    // get the Data
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryIndData(params.id);
            // console.log(res);
            console.log(res.data[0]);

            setCountry(res.data[0])
            // console.log(country)
        });
    }, [params.id]);

    // return loader page
    if(!country) return <Loader/>

  return (
    <section className="country-details-section flex">
      <div className="container flex">
        <div className="grid grid-two-cols">
          <div className="country-image">
            <img src={country.flags.png} alt={country.flags.alt} />
          </div>

          <div className="country-details">
            <h1 className="country-title">{country.name.official}</h1>

            <p>Native Name: 
              <span>
                {
                  Object.keys(country.name.nativeName)
                  .map((key) => country.name.nativeName[key].common)
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
          <button>
            <NavLink to='/country'>
              Go Back
            </NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CountryDetails;