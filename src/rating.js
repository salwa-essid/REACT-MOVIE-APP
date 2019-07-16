import React from 'react'

const Rating=({count, onChangeRating = () => {}})=>{
   let starsHtml=[]
   for(let i=0;i<5;i++){
    if(i<count){
        starsHtml.push(<span key={i} onClick={() => onChangeRating(i+1)}>★</span>)
    }
    else{
        //i+1 5tr nejma 1 cest pas 0 puisk un tableau
        starsHtml.push(<span key={i} onClick={() => onChangeRating(i+1)}>☆</span>)
    }
   }
   return(
    <div>{starsHtml}</div>
   )
}
export default Rating