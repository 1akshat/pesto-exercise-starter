import React from 'react';

const Snake = ({snakeCoordinates}) => {
	return (
		<React.Fragment>
			{
				snakeCoordinates.map( coords => {
					const style = {
						left: `${coords[0]}%`,
						top: `${coords[1]}%`
					}
					return ( <div className="snake-module" style={style}></div> );
				})
			}
		
		</React.Fragment>
		);
}

export default Snake;