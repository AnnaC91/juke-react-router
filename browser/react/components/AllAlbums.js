import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function AllAlbums(props) {

  const albums = props.albums;
  console.log('props', props)
  console.log('albums', albums)
  return (
    <div>
      <h3>Albums</h3>
      <div className="row">
        {
          albums.map(album => (
            <div className="col-xs-4" key={album.id}>
              <Link className="thumbnail" to={`/albums/${album.id}`}>
                <img src={album.imageUrl} />
                <div className="caption">
                  <h5>
                    <span>{album.name}</span>
                  </h5>
                  <small>{album.songs.length} songs</small>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
