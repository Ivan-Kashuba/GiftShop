import React from 'react';
import './Slider.css';
import men from '../img/men.png';
import women from '../img/women.png';
import kid from '../img/kid.png';


const Slider = ({box,basket,price}) => {
	return (
		<> 
		<div className='slider__flex'>
		<img className='slider__img1' src={men} alt="img" />
		<div className='slider__men'>
			<div className="man__top">
				<div className='men__title'>men's wear</div> 
				<div className="men__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.lorem</div>
			</div>
				<div className="men__phrase">lorem ipsum is simply dummy text</div>
		</div>
		<div className="flex">
			<img className='slider__img2'  src={women} alt="img" />
			<img className='slider__img2' src={kid} alt="img" />
			<div className="women__top">
				<div className='women__title'>women's wear</div> 
				<div className="women__text">Lorem Ipsum is simply dummy text of the printing and typesetting</div>
			</div>

			<div className="child__top">
				<div className='child__text'>Baby Shop</div>
				<div className='box'> 
				<img src={box} alt="present" />
				</div>
				<div className='basket'>
				<img src={basket} alt="basket" />
				</div>
				<div className='price'>
					<img src={price} alt="" />
				</div>
			</div>

			
		</div>
		</div>
		</>
	);
};

export default Slider;