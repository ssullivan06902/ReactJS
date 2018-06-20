const { render } = ReactDOM

render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
	Hello World!
	</h1>,
	document.getElementById('react-container')
)

render(
	<h2 id='title'
		className='header'
		style={{backgroundColor: 'blue', color: 'white', fontFamily: 'verdana'}}>
	These are the voyages of the starship Enterprise!
	</h1>,
	document.getElementById('react-container')
)
