// imports icons 
import { FaLongArrowAltRight } from "react-icons/fa";
import About from './About';
import { NavLink } from "react-router-dom";


function Home () {
    return (
        <>
            <main className="home-section main">
                <div className="container grid grid-two-cols">
                    <div className="home-text">
                        <h1> 
                            Explore the World. Onw Country at a Time
                        </h1>

                        <p className="paragraph">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nisi, corporis consequatur numquam optio dolorum!
                        </p>

                        <NavLink to="/Country">  
                            <button className="btn">
                                Explore Now
                                <FaLongArrowAltRight />
                            </button>
                        </NavLink>
                        
                    </div>

                    <div className="home-img">
                        <img src="https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-3d-illustration-travel-around-the-world-by-plane-png-image_9199361.png" alt="World image" />
                    </div>
                </div>
            </main>

            <About />
        </>
    )
}

export default Home;