
import './../../App.css';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="NavBar">
          <div className="companyLogo">
            <div className="shape3">
            </div>
            <div className="shape5">
            </div>
            <div className="shape4">
            </div>
            <div className="text">Marico</div>
          </div>
          <div className="navMenu">
            <select name="pets" id="pet-select">
              <option value="">Use cases</option>
            </select>

            <a href=" ">About</a>
            <a href="">Prising</a>
            <a href="">Blog</a>


          </div>
          <div className="authMenu">
            <a href="">Login</a>

            <button>Sign Up</button>
          </div>

        </div>
      </header>
    )
  }
};
export default Header;