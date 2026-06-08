import { NavLink } from 'react-router-dom';
import footerData from '../../api/footerApi.json';

function Footers () {

  
  return (
    <>
      <footer>
        <div className="container grid grid-three-cols">
          {
            footerData.map(({icon, title, details, index}) => {
              return (
                <div className="footerBox flex" key={index}>
                  <div className="footerIcon">
                    {icon}
                  </div>

                  <div className="footerInfo">
                    <h3 className="footerTitle">{title}</h3>
                    <p className="footerDetails">{details}</p>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="copyrightArea">
          <div className="container">
            <div className="grid grid-two-cols">
              <div className="copyrightText">
                <p>Copyright &copy; 2024. All Rights Reserved</p>
              </div>

              <div className="footerMenu flex">
                <ul className="footerMenuList flex">
                  <li>
                    <NavLink to='/'> Home </NavLink> 
                  </li>
                  <li>
                    <NavLink to='/about'> About </NavLink>
                  </li>
                  <li>
                    <NavLink to='/country'> Country </NavLink>
                  </li>
                  <li>
                    <NavLink to='/contact'> Contact </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footers;