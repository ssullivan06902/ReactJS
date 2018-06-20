'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
	'h1',
	{ id: 'title',
		className: 'header',
		style: { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana' } },
	'Hello World!'
), document.getElementById('react-container'));

render(React.createElement(
	'h2',
	{ id: 'title',
		className: 'header',
		style: { backgroundColor: 'blue', color: 'white', fontFamily: 'verdana' } },
	'These are the voyages of the starship Enterprise!'
), document.getElementById('react-subtitle'));
