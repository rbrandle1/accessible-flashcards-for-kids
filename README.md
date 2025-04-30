# Accessible Multiplication Flashcards for Kids

An accessible React application providing multiplication flashcards with dyslexia-friendly features and customizable themes.

## Features

- Designed layout, typography, and color systems
- SCSS includes, use, prepped for CSS modules
- SCSS design system, CSS custom properties, mixins, functions
- SASS for loop
- CSS animation
- Custom React components and third-party component integration
- Custom accessibility theming
- Accessibility enhancements for keyboard users, dyslexia and prefers-reduced-motion
- React state management, derived state, lifting state, child-to-parent communication
- React lazy loading
- Translating JS data into CSS variables for style manipulation
- User research - dyslexia design theory and mathematics
- User testing with dyslexic users (colors, fonts, icons, layout preferences)
- Fluid typography using container queries techniques

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Design Decisions & Problem Solving

- **Focused UI**: Used a carousel instead of a grid to help users focus on one problem at a time, reducing distraction
- **Global Theming**: Created a global level design system at the DOM level rather than using React-specific implementation
- **Typography**: Carefully selected fonts for readability (avoided fonts resembling "For Dummies" books)
- **Color Theming**: Utilized native HTML emoji colors for well-balanced, contrasted, and readable color themes
- **Accessibility**:
  - Large buttons for easier interaction with mouse or touch
  - Maximized progress bar visibility to encourage continued engagement
  - Optimized tab navigation for natural slide progression
  - Used React lazy loading to improve performance for dyslexia icons on mobile
  - Prioritized performance and responsiveness over animations

## Resources

### Dyslexia Design Resources

- [Designing for Dyslexia](https://uxplanet.org/designing-for-dyslexia-6d12e8c41cd7)
- [How to Design for Users with Dyslexia](https://www.prologic-technologies.com/blog/how-to-design-for-users-with-dyslexia)
- [Supporting Dyslexia in the Math Classroom](https://mathsnoproblem.com/blog/learner-focus/supporting-dyslexia-maths-classroom)
- [Dyslexia: Mastering Math](https://homeschoolingwithdyslexia.com/dyslexia-mastering-math/)

### Other Resources

- [Embla Carousel](https://www.embla-carousel.com/)
- [Container Query Units and Fluid Typography](https://moderncss.dev/container-query-units-and-fluid-typography/) by Stephanie Eckles

## License

&copy; 2024 Ryan Brandle
