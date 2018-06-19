const { createElement } = React
const { render } = ReactDOM

const title = createElement(
	'h1',
	{id: 'title', className: 'header'},
	'Hello World!'
)

render(
	title,
	document.getElementById('react-container')
)

const subtitle = createElement(
	'h2',
	{id:'subtitle', className: 'header'},
	'These are the voyages of the starship Enterprise!'
)

render(
	subtitle,
	document.getElementById('react-subtitle')
)
