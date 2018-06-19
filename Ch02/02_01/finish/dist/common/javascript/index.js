const { createElement } = React
const { render } = ReactDOM

const title = createElement(
	'h1',
	{id: 'title', className: 'header'},
	'Hello World! These are the voyages of the starship Enterprise!'
)

render(
	title,
	document.getElementById('react-container')
)
