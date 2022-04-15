import styles from './Slider.module.css';

const SliderControls = props => {
	const { prevSlideBtnHandler, nextSlideBtnHandler } = props;

	return (
		<div className={styles.actions}>
			<button className={styles.button} onClick={prevSlideBtnHandler}>
				Prev
			</button>
			<button className={styles.button} onClick={nextSlideBtnHandler}>
				Next
			</button>
		</div>
	);
};

export default SliderControls;
