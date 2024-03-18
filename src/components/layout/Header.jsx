import React from 'react';
import SearchIcon from '../../assets/icons/header/bx-search.svg';
import UserIcon from '../../assets/icons/header/bx-user.svg';
import HeartIcon from '../../assets/icons/header/bx-heart.svg';
import CartIcon from '../../assets/icons/header/bx-cart.svg';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
      <div className="container">
          <div className="header-row">
            <div className="header-logo">
              <NavLink className="header-logo-title">
                Uzum-market
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
                  <button className='header__buttons-btn'><img src={CartIcon} alt="" /></button>
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