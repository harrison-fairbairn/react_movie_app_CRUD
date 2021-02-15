import React from 'react';

export class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
    } 

    handleChange(e) {
        this.setState({
            ...this.state, 
            [e.target.name]: e.target.value
        });
    }

    render () {
        const {
            movieListUpdater, title
        } = this.props;

        const {
            review, stars
        } = this.state;

        return <div><h3></h3>
        <form>
        <div>
                <label htmlFor= "stars">
                   Star Ranking from 1-5
                </label>
                <input type="text" name="stars" onChange={this.handleChange}>

                </input>
            </div>
            <div>
                <label htmlFor="review">
                   Leave a Rating/Review Here!
                </label>
                <input type="text" name="review" onChange={this.handleChange} />
            </div>
            <div>
                <input type='submit' value="Submit Review"  onClick={(e) => 
                { e.preventDefault();
                    console.log(title, stars, review);
                    movieListUpdater(title, stars, review)
                }}>

                </input>
            </div>
        </form>
        </div>
    } 

}