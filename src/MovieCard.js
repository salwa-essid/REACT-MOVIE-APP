import React from 'react'
import Rating from './rating'







const MovieCard = (props) => {
    const {movie = {}} = props
    const {
        title = '',
        year = '',
        image = ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2yeDaMrDqJhdCPt2ypNoR2ITGZHLjCKWnquwDaP-FPBuP_gJk'),
        rating = 0
    } = movie
    return (
        <div className="movie-card">
            <div className="movie-rating"><Rating count={rating} /></div>
            <div
                className="movie-image"
                style={{
                backgroundImage:
                    `url('${image}')`
                }}
            />
            <div className="movie-description">{title} - {year}</div>
            </div>
    )
}

export default MovieCard