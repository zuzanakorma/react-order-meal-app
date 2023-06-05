import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import mainImg from '../../assets/mainImg.jpg';
import classes from './Header.module.css'

function Header(props) {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>OrderMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mainImg} alt='meals'/>
        </div>
    </React.Fragment>
  )
}

export default Header