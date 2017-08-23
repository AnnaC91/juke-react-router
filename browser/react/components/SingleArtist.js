import React, { Component } from 'react';
import axios from 'axios';

export default class SingleArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: {},
        }
    }

    componentDidMount() {
        const artistId = this.props.match.params.artistId
        axios.get(`/api/artists/${artistId}`)
            .then(res => res.data)
            .then(artist => {
                this.setState({ artist })
            });
    }

    render() {
        console.log('this.props.match.params', this.props.match.params)
        const artist = this.state.artist;

        return (
            <div>
                <h3>ARTIST NAME</h3>
                <h4>ALBUMS</h4>
                <h4>SONGS</h4>
            </div>
        );
    }
}