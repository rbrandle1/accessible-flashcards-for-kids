// import IconGrid from '../IconGrid/IconGrid'; // comment out when attempting lazy.
import { lazy, Suspense } from 'react';
import './Card.scss';

const IconGrid = lazy(() => import('../IconGrid/IconGrid'));

export const Card = ({
	icon,
	isSelected,
	// isSnapped,
	firstNum,
	secondNum,
	solution,
	onClick,
	isDyslexic,
}) => {
	// const resultsArr = Array.from({ length: solution }, (_, i) => i);

	return (
		<button className={`card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
			{isSelected ? (
				<>
					<span className='selectedIcon'>{icon}</span>
					<div className='integer'>{solution}</div>
				</>
			) : (
				<>
					{isDyslexic ? (
						<Suspense fallback={`🔥`}>
							<IconGrid icon={icon} firstNum={firstNum} secondNum={secondNum} solution={solution} />
						</Suspense>
					) : null}
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
