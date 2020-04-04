import React from 'react';
import Snake from './Snake';
import Food from './Food';


const getRandomCoords = () => {
	const min = 1;
	const max = 97;
	// Reference: https://gist.github.com/kerimdzhanov/7529623
	const xCord = (Math.random() * (max - min + 1)) + min;
	const yCord = (Math.random() * (max - min + 1)) + min;
	return [xCord, yCord]
}

const App = (props) => {

	// Hardcoded positions of the snake-modules on init.
	const state = {
		snakeCoordinates: [
			[50,0], 
			[50,3],
			[50,6]
		],
		foodCoordinates: getRandomCoords()
	}
	
	return (
			<React.Fragment>
		    	<h1 className="main-title">{ props.title }</h1>
		    	<div className="game-window">
		    		<Snake snakeCoordinates={ state.snakeCoordinates }/>
		    		<Food foodCoordinates={ state.foodCoordinates }/>
		    	</div>
			</React.Fragment>
			)
}

export default App;
