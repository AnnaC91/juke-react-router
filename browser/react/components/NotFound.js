import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>'Oops, something happened!  You are lost!  You are not supposed to be here.  Here's how to go <Link to = '/'>home! </Link> </div>
    )
}