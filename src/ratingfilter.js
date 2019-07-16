import React from "react"
import Rating from './rating'




const RatingFilter = ({onChange, count}) => (
  
  //on change tab3a appmovie bech lparent tousselou 'information kif yecliqui 3al etoile
      <div className="rating-filter">
          <span className="rating-filter-text">Minimum rating</span>
          <Rating
              count={count}
              onChangeRating={(newRating) =>{
                  onChange(newRating)
              }} />
        </div>
  )
  
  export default RatingFilter