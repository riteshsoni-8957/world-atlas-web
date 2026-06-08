import aboutData from '../api/aboutData.json';

function About () {
    return (
        <>
            <section className="about-section">
                <div className="container">
                    <h2 className="container-title">
                        Here are the Intresting Facts
                        <br/>
                        About the World
                    </h2>

                    <div className="container-cards grid grid-three-cols">
                        {
                            aboutData.map(({id, countryName, capital, population, interestingFact}) => {
                                return (
                                    <div className="card" key={id}>
                                        <h3 className='card-title'>{countryName}</h3>
                                        <p><strong>Population:</strong> {population}</p>
                                        <p><strong>Capital:</strong> {capital}</p>
                                        <p><strong>Interesting Fact:</strong> {interestingFact}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;