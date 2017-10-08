/* global global */

// Polyfill
import "babel-polyfill";

// React
import React from 'react';
import ReactDOM from 'react-dom';

import TodoContainer from './container/todo-container';

ReactDOM.render(
    <TodoContainer />,
    document.getElementById('root')
);