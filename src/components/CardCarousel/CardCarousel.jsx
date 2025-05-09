import { useEffect, useState } from 'react';
import './CardCarousel.scss';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import Card from '../Card/Card';
import { PrevButton, NextButton, usePrevNextButtons } from './CardCarouselButtons';

const integers = Array.from({ length: 11 }, (_, index) => index);

export const equations = integers.flatMap((firstNum) =>
	integers.map((secondNum) => ({
		firstNum,
		secondNum,
		result: firstNum * secondNum,
	})),
);

const shuffle = (arr) => {
	return arr.slice().sort(() => Math.random() - 0.5);
};

const cards = shuffle(equations);

export const CardCarousel = ({ icon, isDyslexic }) => {
	const emblaOptions = {
		duration: 12,
	};
	const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [ClassNames()]);
	const [scrollProgress, setScrollProgress] = useState(0);
	const [selectedId, setSelectedId] = useState(null);
	const [slidesInView, setSlidesInView] = useState([]);

	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

	useEffect(() => {
		if (!emblaApi) return;

		const updateSlidesInView = () => setSlidesInView(emblaApi.slidesInView());
		emblaApi.on('slidesInView', updateSlidesInView);
		emblaApi.emit('slidesInView', updateSlidesInView);

		return () => emblaApi.off('slidesInView', updateSlidesInView);
	}, [emblaApi, isDyslexic]);

	useEffect(() => {
		if (!emblaApi) return;

		const onScroll = () => {
			const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
			setScrollProgress(progress * 100);
		};

		onScroll();
		emblaApi.on('reInit', onScroll);
		emblaApi.on('scroll', onScroll);

		return () => {
			emblaApi.off('reInit', onScroll);
			emblaApi.off('scroll', onScroll);
		};
	}, [emblaApi]);

	const handleCardClick = (id) => {
		setSelectedId(id !== selectedId ? id : null);
	};

	// Todo: Future feature:
	// or +10, +20 +30... fades in and up... like scoring points
	// const progressText = (progress) => {
	// 	if (progress <= 10) {
	// 		return '';
	// 	} else if (progress <= 20) {
	// 		return 'First 10 Down!';
	// 	} else if (progress <= 30) {
	// 		return 'Keep Going!';
	// 	} else if (progress <= 50) {
	// 		return '1/2 way there';
	// 	}
	// };

	return (
		<section className='embla' aria-label='Flashcards'>
			<div className='viewport' ref={emblaRef}>
				<ul
					className='slidesContainer'
					role='listbox'
					aria-label='Multiplication flashcards carousel'
					aria-description='Navigate through flashcards using tab key and flip the cards using space or enter keys.'
				>
					{cards.length > 0 &&
						cards.map(({ firstNum, secondNum, result }, i) => {
							const isSelected = i === selectedId;

							return (
								<li
									className='slide'
									role='option'
									key={i}
									aria-selected={isSelected}
									aria-label={isSelected ? `Answer: ${result}` : `${firstNum} times ${secondNum}`}
								>
									<article>
										<Card
											icon={icon}
											isSelected={isSelected}
											isVisible={slidesInView.includes(i)}
											isDyslexic={isDyslexic}
											firstNum={firstNum}
											secondNum={secondNum}
											solution={result}
											onClick={() => handleCardClick(i)}
										/>
									</article>
								</li>
							);
						})}
				</ul>
			</div>
			<div className='progressContainer'>
				<div
					className='progressBar'
					// data-progress-text={progressText(scrollProgress)}
					style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
				/>
			</div>
			<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
			<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
		</section>
	);
};
export default CardCarousel;
