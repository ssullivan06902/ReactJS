const { createElement } = React
const { render } = ReactDOM

const styleH1 = {
	backgroundColor: 'orange',
	color: 'white',
	fontFamily: 'veranda'
}

const styleH2 = {
	backgroundColor: 'blue',
	color: 'white',
	fontFamily: 'veranda'
}

const title = createElement(
	'h1',
	{id: 'title', className: 'header', style: styleH1},
	'Hello World!'
)

render(
	title,
	document.getElementById('react-container')
)

const subtitle = createElement(
	'h2',
	{id:'subtitle', className: 'header', style: styleH2},
	'These are the voyages of the starship Enterprise!'
)

render(
	subtitle,
	document.getElementById('react-subtitle')
)
