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

render(
	<h1 id='title'
		className='header'
		style={styleH1}>
	Hello World!
	</h1>,
	document.getElementById('react-container')
)

render(
	<h2 id='subtitle'
		className='header'
		style={styleH2}>
	These are the voyages of the starship Enterprise!
	</h2>,
	document.getElementById('react-subtitle')
)
