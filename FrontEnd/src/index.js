import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Layout from './components/Layout';
ReactDOM.render(<Layout/>, document.querySelector('.container'));

ReactDOM.render(<App/>, document.querySelector('.app-content'));
