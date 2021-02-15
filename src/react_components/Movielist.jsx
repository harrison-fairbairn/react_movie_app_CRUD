// use map function to render a movie component for each movie object
// add review to each movie object
// store data in an array - array has the reviews in string form
// When you hit submit on reviewform it should append their comment to the movie

import React from 'react';
import { Movie } from './Movie';


// why are we defining a rating of 1 within the curly braces? Does this have to do with our loop iteration? So it always starts at 1?
// Thought we would be passing this in as input from the user, or was that just for reference as we built it out?

export class Movielist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [
                {title: 'Diehard', description: 'Action Thriller', rating: '9.1/10' , reviews: [{rating: 1, text: ''}]},
                {title: 'Pandora', description: 'Action Drama', rating: '8.7/10' , reviews: [{rating: 1, text: ''}]},
                {title: 'The Notebook', description: 'Rom-Com', 
                rating: '6.9/10' , reviews: [{rating: 1, text: ''}]},
                {title: 'Deadpool', description: 'Action Comedy', 
                rating: '8.5/10' , reviews: [{rating: 1, text: ''}]},
                {title: 'Dazed and Confused', description: 'Comedy', 
                rating: '7.7/10' , reviews: [{rating: 1, text: ''}]}
            ] 
        }
        this.movieListUpdater = this.movieListUpdater.bind(this);
    }

    movieListUpdater(title, newRating, newReview) {
        console.log(title, newRating, newReview)
        const {
            movieList
        } = this.state;
        const newMovieList = movieList.slice();
        let index;
        for (let i = 0; i < newMovieList.length; i++) {
           if (newMovieList[i].title === title) {
               index = i;
               break;
           } 
       } 

        // Is this written properly below? Why do I keep thinking newRating and newReview should be inside of {} curly braces?
        // Of course when I tried this, clicking submit causes the screen to go blank and not come back without refreshing.
        // Crashing the DOM? Why is this happening??

        newMovieList[index].reviews.push({rating: newRating, text: newReview})
        console.log(index);
        console.log(newMovieList[index]);
        console.log(newMovieList[index].reviews) 
        this.setState({
            movieList: newMovieList
        })
    }


    render (){
        const {
            movieList
        } = this.state;
            return <div> <h1>Review Our List of Movies!<br></br> Or not, whatever you want to do mate.</h1>
                {movieList.map(movie => {
            return <Movie movieListUpdater = { this.movieListUpdater } {...movie} />   
            })}
        </div>
    } 
}



