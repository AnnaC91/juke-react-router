import React, { Component } from 'react';
// import axios from 'axios';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route, Switch } from 'react-router-dom';

export default class Main extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    // };
    // this.selectAlbum = this.selectAlbum.bind(this);
    // this.deselectAlbum = this.deselectAlbum.bind(this);
  }


  // selectAlbum(albumId) {
  //   axios.get(`/api/albums/${albumId}`)
  //     .then(res => res.data)
  //     .then(album => this.setState({
  //       selectedAlbum: album
  //     }));
  // }

  // deselectAlbum() {
  //   this.setState({ selectedAlbum: {} });
  // }

  render() {
    return (
      <HashRouter>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar deselectAlbum={this.deselectAlbum} />
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route
                path='/artists/:artistId'
                component={SingleArtist}
              />
              <Route
                path='/artists'
                component={AllArtists}
              />
              <Route
                path='/albums/:albumId'
                component={SingleAlbum}
              />
              <Route
                path='/albums'
                component={AllAlbums}
              />
              <Route
                path='/'
                component={AllAlbums}
              />
            </Switch>
          </div>
          <Player />
        </div>
      </HashRouter>
    );
  }
}


// {
//   this.state.selectedAlbum.id ?
//   <SingleAlbum album={this.state.selectedAlbum} /> :
//   <AllAlbums albums={this.state.albums} selectAlbum={this.selectAlbum} />
// }