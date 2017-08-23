import React, { Component } from 'react';
import axios from 'axios';
import Songs from './Songs';
import AllAlbums from './AllAlbums'
import { NavLink } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';




export default class SingleArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: {},
            artistAlbums: [],
            artistSongs: []
        }
    }

    componentDidMount() {
        const artistId = this.props.match.params.artistId
        const gettingArtist= axios.get(`/api/artists/${artistId}`)
        const gettingArtistAlbums = axios.get(`/api/artists/${artistId}/albums`)
        const gettingArtistSongs = axios.get(`/api/artists/${artistId}/songs`)

        Promise.all([gettingArtist, gettingArtistAlbums, gettingArtistSongs])
            .then(array => {
               return array.map(artist=>artist.data)
            })
            .then(array=>{
               this.setState({artist:array[0]})
               return array 
            })
            .then(array => {
                this.setState({artistAlbums:array[1]})
                return array 
            })
            .then(array => {
                this.setState({artistSongs:array[2]})
                return array 
            })
            .catch((error)=>console.log(error).bind(console))    
    }

    // render() {
    //     const artist = this.state.artist;
    //     console.log("this.state.artistAlbums", this.state.artistAlbums)
    //     return (
    //         <div>
    //             <h3>ARTIST NAME</h3>
    //             <h4>{this.state.artist.name} </h4>
    //             <AllAlbums albums={this.state.artistAlbums} />
    //             <h4>SONGS</h4>
    //             <Songs songs = {this.state.artistSongs}/>
    //         </div>
    //     );
    // }

    render () {
        
          const artist = this.state.artist; // or however you've named it
        
          return (
            <div>
              <h3>{ artist.name }</h3>
           <HashRouter>
            <div>   
                <ul className="nav nav-tabs">
                    <li><NavLink to={`/artists/${artist.id}/albums`}>ALBUMS</NavLink></li>
                    <li><NavLink to={`/artists/${artist.id}/songs`}>SONGS</NavLink></li>
                </ul>
                <Route path = '/artists/:artistId/albums' render={()=><AllAlbums albums={this.state.artistAlbums}/>}/>
                <Route path = '/artists/:artistId/songs' render={()=><Songs songs={this.state.artistSongs}/>}/>
            </div>   
           </HashRouter>   
        
              {/* Routes will go here! */}
            </div>
          );
        }
}