import React from 'react';

const App = (props) => {

    return (
        <React.Fragment>
            <h1 className="main-title">{props.title}</h1>
            <div className="snake-window">...</div>
        </React.Fragment>
    )
}

export default App;
