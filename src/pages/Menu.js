import React, { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <a href="/"><img className="logoimg" src="img/main_logo.png" alt="Gohackathon Logo"/></a>
        </div>

        {/* 2nd menu part  */}
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href='webinar'>Webinars</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href={URL}>Hackathon</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href={URL}>Jobs</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href={URL}>Training</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href={URL}>About</a>
            </li>
            
            <li>
              {
                  isAuthenticated && <a className="nav-link" href={URL}>{user.name}</a>
              }
            </li>
            
            {
                isAuthenticated ? (
                <li>
                  <button className='btn btn-primary' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
                </li>
                ) : (
                <li>
                  <button className='btn btn-primary px-5 py-2 primary-btn' onClick={() => loginWithRedirect()}>Login / Signup</button>
                </li>
                )
            }
          </ul>
        </div>
        
        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href={URL} onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;