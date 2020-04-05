import React from 'react';
import Snake from './Snake';
import Food from './Food';


const getRandomCoords = () => {
	const [min, max] = [1, 97];
	// Reference: https://gist.github.com/kerimdzhanov/7529623
	const xCord = Math.round((Math.random() * (max - min + 1)) + min);
	const yCord = Math.round((Math.random() * (max - min + 1)) + min);
	return [xCord, yCord]
}

class App extends React.Component {

	state = {
		// Snake speed is in Milliseconds (ms).
		snakeSpeed: 100,
		// Hardcoded positions of the snake-modules on init.
		snakeCoordinates: [ [50,0], [50,3], [50,6] ],
		direction: 'Down',
		foodCoordinates: getRandomCoords()
	}

	onKeyDown = (event) => {
		console.log(event);
		if (event.keyCode === 37) {
			this.setState({ direction: 'Left' })
		} else if (event.keyCode === 38) {
			this.setState({ direction: 'Up' })
		} else if (event.keyCode === 39) {
			this.setState({ direction: 'Right' })
		} else if (event.keyCode === 40) {
			this.setState({ direction: 'Down' })
		}
	}

	// REACT LIFECYCLE METHODS

	// Call on Init
	componentDidMount = () => {
		console.log('componentDidMount');
		setInterval(this.moveSnake,this.state.snakeSpeed);
		document.onkeydown = this.onKeyDown;
	}

	componentDidUpdate = () => {
		console.log('componentDidUpdate');
		this.snakeCrossBoundaries();
		this.snakeHitsItself();
		this.snakeEatFood();
	}

	moveSnake = () => {
		const snakeCoords = this.state.snakeCoordinates;
		// Taking the last element as head
		let head = snakeCoords[snakeCoords.length - 1];

		const direction = this.state.direction;
		console.log(direction);

		if (direction === 'Left') {
			head = [head[0] - 2, head[1]]
		} else if (direction === 'Up') {
			head = [head[0], head[1] - 2]
		} else if (direction === 'Right') {
			head = [head[0] + 2, head[1]]
		} else if (direction === 'Down') {
			head = [head[0], head[1] + 2]
		}

		snakeCoords.push(head);
		console.log(snakeCoords);
		// Just remove the first element/ tail of the snake array just to interpret as snake is moving
		snakeCoords.shift();
		this.setState({ snakeCoordinates: snakeCoords });
	}

	// Conditions for Game Over
	snakeCrossBoundaries = () => {
		const snakeCoords = this.state.snakeCoordinates;
		let head = snakeCoords[snakeCoords.length - 1];
		if (head[0] >= 97 || head[1] >= 97 || head[0] <= 1 || head[1] <= 1) {
			this.gameOver();
		}
	}

	snakeHitsItself = () => {
		const snakeCoords = [...this.state.snakeCoordinates];
		let head = snakeCoords[snakeCoords.length - 1];
		snakeCoords.pop();
		snakeCoords.forEach(coords => {
			if (coords[0] === head[0] && coords[1] === head[1]) {
				this.gameOver();
			}
		})
	}

	snakeEatFood = () => {
		const snakeCoords = this.state.snakeCoordinates;
		let head = snakeCoords[snakeCoords.length - 1];
		let food = this.state.foodCoordinates;
		if (head[0] === food[0] && head[1] === food[1]) {
			alert("food eat")
		}
	}

	gameOver = () => {
		alert(`Game Over. The length of the snake is ${this.state.snakeCoordinates.length}`);
		// Reset the snake coords
		this.setState({
			// Snake speed is in Milliseconds (ms).
			snakeSpeed: 100,
			// Hardcoded positions of the snake-modules on init.
			snakeCoordinates: [ [50,0], [50,3], [50,6] ],
			direction: 'Down',
			foodCoordinates: getRandomCoords()
		});
	}

	render() {
		return (
			<React.Fragment>
		    	<h1 className="main-title">{ this.props.title }</h1>
		    	<div className="game-window">
		    		<Snake snakeCoordinates={ this.state.snakeCoordinates }/>
		    		<Food foodCoordinates={ this.state.foodCoordinates }/>
		    	</div>
			</React.Fragment>
			)
	}
}

export default App;
