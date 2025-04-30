import '../Card/Card.scss';

export const IconGrid = ({ icon, firstNum, secondNum, solution }) => {
	const resultsArr = Array.from({ length: solution }, (_, i) => i);

	return (
		<div className='gridContainer' aria-hidden='true'>
			<div
				className='integerGrid'
				style={{
					'--grid-columns': `${secondNum}`,
					'--grid-rows': `${firstNum}`,
				}}
			>
				{resultsArr.map((i) => (
					<div className='cell' key={i}>
						{icon}
					</div>
				))}
			</div>
		</div>
	);
};
export default IconGrid;
