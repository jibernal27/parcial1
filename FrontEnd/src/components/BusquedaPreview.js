'use strict';
import React, { Component } from 'react';


export default class BusquedaPreview extends Component {

  

  render() {
    return (     
        <div className="busqueda">
        <label className="form-control col-md-1" >{this.props.word}</label>
        </div>
      
    );
  }
}
