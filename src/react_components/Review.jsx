import React from 'react';

export class Review extends React.Component {
    render () {
        const {
            reviews, 
        } = this.props
        return <div>
            <h4>Leave a review!</h4>
            {reviews.map(review => {
                return <p>
                    {review.text}
                </p>
            })}           
        </div>

    } 
}