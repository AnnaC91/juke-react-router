import React, { Component } from 'react';
// import axios from 'axios';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound'

export default function Main() {


  return (
    <HashRouter>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
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
              component={StatefulAlbums}
            />
            <Route
              path='/'
              exact
              component={StatefulAlbums}
            />
              <Route
              component={NotFound}
            />

          </Switch>
        </div>
        <Player />
      </div>
    </HashRouter>
  );
}


// {
//   this.state.selectedAlbum.id ?
//   <SingleAlbum album={this.state.selectedAlbum} /> :
//   <AllAlbums albums={this.state.albums} selectAlbum={this.selectAlbum} />
// }