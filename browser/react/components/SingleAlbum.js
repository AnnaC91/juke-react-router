import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';
import pathName from 'path'; 


export default class SingleAlbum extends Component {
  constructor(props) {
    super(props)
    this.state= {
      album: {},
    } 
  }
  
  componentDidMount() {
    const albumId = this.props.match.params.albumId
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => {
        this.setState({ album })
      });
  }

  render () {
    console.log('this.props', this.props)
    const album = this.state.album;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }  <a href = {`mailto:?subject=Recommended Album: ${album.name}&body=Check out this album! ${pathName.join(document.location.origin, this.props.match.url)}`} ><button className = "btn btn-default" name="Share">Share</button></a></h3>
          <div><img src={ album.imageUrl } className="img-thumbnail" /></div>
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}
