import styles from './Slide.module.css';

const Slide = props => {
	const { title, content, author } = props;

	return (
		<div className={styles.slide}>
			<h2>{title}</h2>
			<p>{content}</p>
			<p>{author}</p>
		</div>
	);
};

export default Slide;
