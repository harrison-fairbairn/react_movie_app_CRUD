import React from 'react';


// the rating itself out of 5 is not being passed in on input
export class Stars extends React.Component {
    render () {
        const {
            rating
        } = this.props;
        return <u><p>Average Ranking: {rating} </p></u>
    } 
}

