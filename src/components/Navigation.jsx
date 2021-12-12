import React from 'react';
import './Navigation.css';
import item from '../img/item.png';
import NavItem from './NavItem';

const Navigation = () => {
	return (
		<div className='nav'>
			<ul className='menu'> 
			<NavItem item={item} title='Art' name="Item Name Here" text="Lorem ipsum is simply dummy text of the" buttonText='More Detail'/>
			<NavItem item={item} title='Home & Living' name="Item Name Here" text="Lorem ipsum is simply dummy text of the" buttonText='More Detail'/>
			<NavItem item={item} title='Jewerly' name="Item Name Here" text="Lorem ipsum is simply dummy text of the" buttonText='More Detail'/>
			<NavItem item={item} title='Women' name="Item Name Here" text="Lorem ipsum is simply dummy text of the" buttonText='More Detail'/>
			<NavItem item={item} title='Men' name="Item Name Here" text="Lorem ipsum is simply dummy text of the" buttonText='More Detail'/>
			<NavItem item={item} title='Kids' name="Item Name Here" text="Lorem ipsum is simply dummy text of the" buttonText='More Detail'/>
			<NavItem item={item} title='Vintage' name="Item Name Here" text="Lorem ipsum is simply dummy text of the" buttonText='More Detail'/>
			<NavItem item={item} title='Weddings' name="Item Name Here" text="Lorem ipsum is simply dummy text of the" buttonText='More Detail'/>
			<NavItem item={item} title='More' name="Item Name Here" text="Lorem ipsum is simply dummy text of the" buttonText='More Detail'/>
			</ul>
		</div>
	);
};

export default Navigation;