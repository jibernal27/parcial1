'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>

        </header>

        <div className="app-content ">  
        </div>

        <footer className="col-md-12" >
          <p>
           Construido con React, Express y Node.js. Código fuente <a href="https://github.com/jibernal27/parcial1">github</a>
          </p>
        </footer>
      </div>
    );
  }
}
