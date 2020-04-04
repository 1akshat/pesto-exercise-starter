import React from 'react';
import Snake from './Snake';
import Food from './Food';

const App = (props) => {

	// Hardcoded positions of the snake-modules on init.
	const state = {
		snakeCoordinates: [
			[0,0], 
			[3,0]
		],
		foodCoordinates: [18,76]
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
