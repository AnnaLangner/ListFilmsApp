var movies = [
	{
		id: 1,
		
		title: 'The Lord of the Rings',
		desc: 'Set in the fictional world of Middle-earth, the hobbit Frodo Baggins (Elijah Wood) he and the Fellowship embark on a quest to destroy the One Ring.'
	},
	{
		id: 2,
		
		title: 'The Green Mile',
		desc: 'A retired prison guard tells her friend about an extraordinary man who was sentenced to death for the murder of two 9-year-old girls.'
	},
	{
		id: 3,
		
		title: 'Deadpool',
		desc: 'A former soldier of special forces is subjected to a dangerous experiment. He soon releases his alter ego and starts hunting for a man who almost destroyed his life.'
	}

];



var moviesElements = movies.map(function (movie) {
	return React.createElement('li', {key: movie.id},
		
		React.createElement('h2', {}, movie.title),
    	React.createElement('p', {}, movie.desc)
		);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'List of films'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));