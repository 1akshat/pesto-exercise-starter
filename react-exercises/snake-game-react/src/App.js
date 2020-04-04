import React from 'react';
import Snake from './Snake';

const App = (props) => {

	// Hardcoded positions of the snake-modules on init.
	const state = {
		snakeCoordinates: [
			[0,0], 
			[0,3]
		]
		
	}
	
	return (
			<React.Fragment>
		    	<h1 className="main-title">{props.title}</h1>
		    	<div className="game-window">
		    		<Snake snakeCoordinates={state.snakeCoordinates}/>
		    	</div>
			</React.Fragment>
			)
}

export default App;
