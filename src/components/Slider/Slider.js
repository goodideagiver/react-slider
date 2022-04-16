import { useState } from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';

import Card from '../Card/Card';
import Slide from '../Slide/Slide';
import SliderControls from './SliderControls';

import styles from './Slider.module.css';
import './SlideAnimation.css';

const Slider = props => {
	const { slidesData } = props;
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const { title, content, author } = slidesData[activeSlideIndex];

	const changeSlideHandler = direction => {
		if (direction === 'prev') {
			setActiveSlideIndex(
				activeSlideIndex === 0
					? slidesData.length - 1
					: activeSlideIndex - 1
			);
		} else if (direction === 'next') {
			setActiveSlideIndex(
				activeSlideIndex === slidesData.length - 1
					? 0
					: activeSlideIndex + 1
			);
		}
	};

	const prevSlide = () => changeSlideHandler('prev');
	const nextSlide = () => changeSlideHandler('next');

	return (
		<Card className={styles.slider}>
			<Slide
				key={Math.random()}
				title={title}
				content={content}
				author={author}
			/>
			<SliderControls
				prevSlideBtnHandler={prevSlide}
				nextSlideBtnHandler={nextSlide}
			/>
		</Card>
	);
};

export default Slider;
