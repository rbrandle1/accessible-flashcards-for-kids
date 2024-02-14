import './Card.scss';

export const Card = ({ icon, isSelected, isSnapped, firstNum, secondNum, solution, onClick }) => {
	const resultsArr = Array.from({ length: solution }, (_, i) => i);

	return (
		<button className={`card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
			{isSelected ? (
				<>
					<span className='selectedIcon'>{icon}</span>
					<div className='integer'>{solution}</div>
				</>
			) : (
				<>
					<div className='gridContainer'>
						{isSnapped ? (
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
						) : null}
					</div>
					<div className='integerEquation'>
						<div className='integer front'>{firstNum}</div>
						<div className='integer front'>
							<span>x</span>
							{secondNum}
						</div>
					</div>
				</>
			)}
		</button>
	);
};
export default Card;
