'use strict';
import React, { Component } from 'react';
import axios from 'axios';
const ROOT_URL = "http://localhost:8090";
import { Link } from 'react-router';

export default class ImagePreview extends Component {

 getUrl(photo)
{
	return 'https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg'.replace('{farm-id}', photo.farm).replace('{server-id}', photo.server).replace('{id}', photo.id).replace('{secret}', photo.secret);
}
getUrlOrigina(photo)
{
	return 'https://www.flickr.com/photos/{owner}/{id}/'.replace('{owner}',photo.owner).replace('{id}',photo.id);
}


  render() {
    return (     
        <div className="imagen">
        < a href={this.getUrlOrigina(this.props)} target='_blank' >
          <img className="imageResult"  src={`${this.getUrl(this.props)}`}/>
        < /a>
        </div>
      
    );
  }
}
