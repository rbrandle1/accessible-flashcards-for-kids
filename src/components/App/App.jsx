import { useState, useEffect } from 'react';
import Switch from '../Switch/Switch';
import CardCarousel from '../CardCarousel/CardCarousel';
import './App.scss';
import { Analytics } from '@vercel/analytics/react';
const App = () => {
	const [dataAccessibilityTheme, setDataAccessibilityTheme] = useState('');
	const [dataTheme, setDataTheme] = useState('🤖');

	useEffect(() => {
		document.body.setAttribute('data-accessibility-theme', dataAccessibilityTheme);
		document.body.setAttribute('data-theme', dataTheme);

		return () => {
			document.body.removeAttribute('data-accessibility-theme');
			document.body.removeAttribute('data-theme');
		};
	}, [dataAccessibilityTheme, dataTheme]);

	const handleAccessibilityTheme = () => {
		setDataAccessibilityTheme(dataAccessibilityTheme !== 'dyslexic' ? 'dyslexic' : '');
	};

	const handleThemeChange = (e) => {
		setDataTheme(e.target.value);
	};

	return (
		<div className='app'>
			<div className='wrapper'>
				<div className='controls'>
					<Switch label='Optimize for Dyslexia' onChange={handleAccessibilityTheme} />
					<div className='iconSelect'>
						<label htmlFor='icon-select'>Theme</label>
						<select id='icon-select' name='icon' value={dataTheme} onChange={handleThemeChange}>
							<option value='🚀'>🚀</option>
							<option value='🤖'>🤖</option>
						</select>
					</div>
				</div>
				<div className='leftSide'>
					<header>
						<h1>
							Multiplication Flashcards
							<br />
							<span className='accent'>for kids!</span>
						</h1>
						<h2>An accessible way to practice multiplication problems.</h2>
					</header>
				</div>
				<div className='rightSide'>
					<CardCarousel icon={dataTheme} isDyslexic={dataAccessibilityTheme === 'dyslexic'} />
				</div>
				<footer>
					<em>Crafted&nbsp;with&nbsp;care&nbsp;for&nbsp;curious&nbsp;minds.</em>{' '}
					&copy;&nbsp;2024&nbsp;Ryan&nbsp;Brandle.
				</footer>
			</div>
			<Analytics />
		</div>
	);
};
export default App;
