import React from 'react';
import { ReviewForm } from './ReviewForm';
import { Review } from './Review';


export class ReviewList extends React.Component {
    render () {
        const {
            reviews, movieListUpdater, title
        } = this.props;
        return <div>
            <h1></h1>
            <Review reviews={reviews}/>
            <ReviewForm movieListUpdater = { movieListUpdater } title={title}/>
            </div>
    } 
}