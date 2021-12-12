import React from 'react';

const NavItem = ({item , title,name,text,buttonText}) => {
	return (
			<li className="nav__item">{title}
					<ul className='submenu'>
						<li className='li__item'>
							<img className='li__img' src={item} alt="item" />
							<div className="submenu_flex"> 
								<div className='item__name'>{name}</div>
								<div className='item__text'>{text}</div>
								<a className='item__btn' href="!">{buttonText}</a>
							</div>
						</li>

						<li className='li__item'>
							<img className='li__img' src={item} alt="item" />
							<div className="submenu_flex"> 
								<div className='item__name'>Item Name Here</div>
								<div className='item__text'>Lorem ipsum is simply dummy text of the</div>
								<a className='item__btn' href="!">More Detail</a>
							</div>
						</li>

						<li className='li__item'>
							<img className='li__img' src={item} alt="item" />
							<div className="submenu_flex"> 
								<div className='item__name'>Item Name Here</div>
								<div className='item__text'>Lorem ipsum is simply dummy text of the</div>
								<a className='item__btn' href="!">More Detail</a>
							</div>
						</li>
						<a className='seeMore' href="!">See All Items</a>
					</ul>
			</li>
	);
};

export default NavItem;