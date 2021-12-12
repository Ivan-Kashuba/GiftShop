import React from 'react';
import './Header.css';
import logo from '../img/logo.png'

const Header = ({box,basket}) => {
	return (
		<>
		<div className="links">
			<a href="!" className="link__item">Sell</a>
			<a href="!" className="link__item">Refisry</a>
			<a href="!" className="link__item">Community</a>
			<a href="!" className="link__item">Blogs</a>
			<a href="!" className="link__item">Mobile</a>
			<a href="!" className="link__item">Gift Cards</a>
		</div>	
		
		<div className="header">
		<img src={logo} alt="logo" />
		<div className="header__items">
			<a href="!" className="header__item">Register</a>
			<a href="!" className="header__item">Sign In</a>
			<a href="!" className="header__item">
				Whislost
			<img className="header_item_image" src={box} alt="" />
			</a>

			<a href="!" className="header__item">
				Cart
				<img className="header_item_image" src={basket} alt="" />
				</a>
		</div>
		</div>
		</>
	);
};

export default Header;