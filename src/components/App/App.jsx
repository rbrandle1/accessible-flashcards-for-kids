import { useState, useEffect } from 'react';
import Switch from '../Switch/Switch';
import CardCarousel from '../CardCarousel/CardCarousel';
import './App.scss';

/**
 * This project incorporates the following:
 * Designed layout, typography, color systems
 * SCSS includes, use, prepped for css modules
 * SCSS design system, css custom properties, mixins, functions
 * SASS for loop
 * CSS animation
 * Creation of custom React components and integration of third party component
 * Custom accessibility theming
 * Accessibility enhancements, specifically for keyboard users, dyslexia and prefers-reduced-motion
 * React state management, derived state, lifting state, child to parent communication.
 * Translating JS data into CSS variables for style manipulation.
 * User research - dyslexia design theory and mathematics
 * User testing - dyslexic user, prefer colors, fonts, icons(1x1 spacing vs spread out), layout
 * Fluid typography using container queries techniques
 */

/**
 * PROBLEM SOLVING
 * Started with a grid. Not ideal for dyslexia because there is so much competing information. Decided to show one at a time with a carousel to help focus on 1 problem at a time and reducing distraction.
 * Decided to create a global level design system to apply to any app that could potentially be used within the DOM instead of applying global variables like data-themes from within the React app itself. There are pros and cons to both options, but my approach was to handle this at the top level of the DOM on the body tag instead of using a useRef within the app.
 * Typography. Unkempt vs Bangers... Unkempt too much like the "For Dummies" books from the 90's.
 * Color theming. Utilized native html emoji colors to create well balanced, well contrasted and easy to read color themes.
 * Token variable naming conventions... attempted to map the raw color names to a --theme-accent-primary/1/2/3 but found that confusing and unnecessary for this particular project. In a more advanced system naming primary/secondary/accents would be more appropriate.
 * Made buttons large so children who are using a mouse and touch screen can interact easier.
 * Make progress bar span as much space as possible to make progress more noticeable with so many cards. Noticing progress is more encouraging than barely making a dent.
 * Accessibility. Tabbing. I had options to utilize arrows as tabbable navigation, however, since each slide item is a focusable element itself, then the user can automatically tab forward and backward through the slides. Incorporating the arrow buttons would be difficult because the user would have to tab into the specific card shown, then tab back to the arrows in order to continue navigating. I decided to keep it simple and not over-complicate the solution.
 * I ran into issues with the dyslexia icons on mobile. I experimented with many options to reduce the choppiness on mobile safari.
 */

/**
 * Dyslexia features to note:
 * site resources... note a few things like visuals, left align, colors, fonts, etc.
 * https://uxplanet.org/designing-for-dyslexia-6d12e8c41cd7
 * https://www.prologic-technologies.com/blog/how-to-design-for-users-with-dyslexia
 * https://mathsnoproblem.com/blog/learner-focus/supporting-dyslexia-maths-classroom#:~:text=Give%20visual%20support%20for%20the,(e.g.%20tri%20%3D%203).
 * https://homeschoolingwithdyslexia.com/dyslexia-mastering-math/
 *
 */

/**
 * Other Resources:
 * https://www.embla-carousel.com/
 * Container Query Units and Fluid Typography by Stephanie Eckles - https://moderncss.dev/container-query-units-and-fluid-typography/
 */

const App = () => {
	const [dataAccessibilityTheme, setDataAccessibilityTheme] = useState('');
	const [dataTheme, setDataTheme] = useState('🤖');

	useEffect(() => {
		document.body.setAttribute('data-accessibility-theme', dataAccessibilityTheme);

		return () => {
			document.body.removeAttribute('data-accessibility-theme');
		};
	}, [dataAccessibilityTheme]);

	useEffect(() => {
		document.body.setAttribute('data-theme', dataTheme);

		return () => {
			document.body.removeAttribute('data-theme');
		};
	}, [dataTheme]);

	const handleAccessibilityTheme = () => {
		setDataAccessibilityTheme(dataAccessibilityTheme !== 'dyslexic' ? 'dyslexic' : '');
	};

	return (
		<div className='app'>
			<div className='wrapper'>
				<div className='controls'>
					<Switch label='Optimize for Dyslexia' onChange={() => handleAccessibilityTheme()} />
					<div className='iconSelect'>
						<label htmlFor='icon-select'>Theme</label>
						<select id='icon-select' name='icon' value={dataTheme} onChange={(e) => setDataTheme(e.target.value)}>
							<option value='🚀'>🚀</option>
							<option value='🤖'>🤖</option>
							{/* <option value="🦊">🦊</option> */}
							{/* <option value="🌴">🌴</option> */}
							{/* <option value="💜">💜</option> */}
							{/* <option value="🍔">🍔</option> */}
							{/* <option value="💩">💩</option> */}
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
		</div>
	);
};
export default App;
