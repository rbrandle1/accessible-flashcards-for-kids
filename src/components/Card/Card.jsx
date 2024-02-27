import { lazy, Suspense } from 'react';
import './Card.scss';

const IconGrid = lazy(() => import('../IconGrid/IconGrid'));

export const Card = ({ icon, isSelected, isVisible, firstNum, secondNum, solution, onClick, isDyslexic }) => {
	return (
		<button className={`card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
			{isSelected ? (
				<>
					<span className='selectedIcon'>{icon}</span>
					<div className='integer'>{solution}</div>
				</>
			) : (
				<>
					{isDyslexic && isVisible ? (
						<Suspense>
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
