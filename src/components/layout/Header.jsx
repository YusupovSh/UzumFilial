import React from 'react';
import SearchIcon from '../../assets/icons/header/bx-search.svg';
import UserIcon from '../../assets/icons/header/bx-user.svg';
import HeartIcon from '../../assets/icons/header/bx-heart.svg';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
      <div className="container">
          <div className="header-row">
            <div className="header-logo">
              <NavLink className="header-logo-title">
                XZ-market
              </NavLink>
            </div>
            <div className="header__center">
              <div className="header__center-wrap">
                <input placeholder="Mahsulotlar va turkumlar izlash" type="text" />
                <button className='header__center-btn'> <img src={SearchIcon} alt="" /> </button>
              </div>
            </div>
            <div className="header__buttons">
                <div className="header__buttons-wrap">
                  <button className='header__buttons-btn'><img src={UserIcon} alt="" /></button>
                  <p className="header__button-text">
                    Kirish
                  </p>
                </div>
                <div className="header__buttons-wrap">
                  <button className='header__buttons-btn'><img src={HeartIcon} alt="" /></button>
                  <p className="header__button-text">
                    Saralangan
                  </p>
                </div>
                <div className="header__buttons-wrap">
                  <button className='header__buttons-btn'><svg data-v-0fe4d683="" width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" class="ui-icon  slightly transparent icon-cart">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6.5C9 4.88779 10.2402 3.5 12 3.5C13.7598 3.5 15 4.88779 15 6.5V7.5H9V6.5ZM7.5 9V11.5H9V9H15V11.5H16.5V9H18.5V19.75C18.5 20.1642 18.1642 20.5 17.75 20.5H6.25C5.83579 20.5 5.5 20.1642 5.5 19.75V9H7.5ZM7.5 7.5V6.5C7.5 4.11221 9.35984 2 12 2C14.6402 2 16.5 4.11221 16.5 6.5V7.5H19.25H20V8.25V19.75C20 20.9926 18.9926 22 17.75 22H6.25C5.00736 22 4 20.9926 4 19.75V8.25V7.5H4.75H7.5Z"></path>
                    </svg>
                  </button>
                  <p className="header__button-text">
                    Savat
                  </p>
                </div>
            </div>
          </div>

      </div>
    </header>
  )
}

export default Header


