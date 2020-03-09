import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
    return (
        <div>
            HelloWorld
        </div>
    );
}

ReactDOM.render(
    <HelloWorld/>,
    document.querySelector('#root')
);
