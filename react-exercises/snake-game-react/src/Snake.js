import React from 'react';

const Snake = ({snakeCoordinates}) => {
	return (
		<React.Fragment>
			{
				snakeCoordinates.map( (coords, index) => {
					const style = {
						left: `${coords[index]}%`,
						right: `${coords[index]}%`
					}
					return ( <div className="snake-module" style={style}></div> );
				})
			}
		
		</React.Fragment>
		);
}

export default Snake;