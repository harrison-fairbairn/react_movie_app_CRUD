import React, {Fragment} from 'react';
import { Review } from './Review';
import {ReviewList} from './ReviewList';
import {Stars} from './Stars';

export class Movie extends React.Component {
    render () {
        const {
            title, description, reviews, rating, movieListUpdater,
        } = this.props;
        return (
            <div style= {{border: '1px solid black'}}>
            <p>
                Title: {title}
            </p>
            <p>
                Description: {description}
            </p>
            <Stars rating = {rating}/>
            <ReviewList movieListUpdater = { movieListUpdater } reviews = {reviews} title={title}/>
            </div>

        )
    }; 
}