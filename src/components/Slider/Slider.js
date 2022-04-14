import { useState } from 'react';

import Card from '../Card/Card';
import Slide from '../Slide/Slide';

import styles from './Slider.module.css';

const Slider = props => {
	const { slidesData } = props;
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const renderSlide = index => {
		const { title, content, author } = slidesData[activeSlideIndex];
		return <Slide title={title} content={content} author={author} />;
	};

	const changeSlideHandler = direction => {
		let changeToSlide;
		if (direction === 'prev') {
			changeToSlide = activeSlideIndex - 1;
		} else {
			changeToSlide = activeSlideIndex + 1;
		}
		if (changeToSlide > slidesData.length - 1) {
			changeToSlide = 0;
		}
		if (changeToSlide < 0) {
			changeToSlide = slidesData.length - 1;
		}
		setActiveSlideIndex(changeToSlide);
	};

	const prevSlide = () => changeSlideHandler('prev');
	const nextSlide = () => changeSlideHandler('next');

	return (
		<Card className={styles.slider}>
			{renderSlide(activeSlideIndex)}
			<div className={styles.actions}>
				<button className={styles.button} onClick={prevSlide}>
					Prev
				</button>
				<button className={styles.button} onClick={nextSlide}>
					Next
				</button>
			</div>
		</Card>
	);
};

export default Slider;
