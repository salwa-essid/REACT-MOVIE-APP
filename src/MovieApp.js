import React ,{Component} from "react";
import NameFilter from './NameFilter'
import RatingFilter from './ratingfilter'
import MovieList from './MovieList'

import './MovieApp.css';

const inception = {
  id:"inception",
    title: 'Inception',
 rating: 5,
 image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg',
  year: 2010}
  

  const mebeforeyou ={
    id:"mebeforeyou",
    title: 'Me before you',
    rating: 3,
    image: 'https://lastfm-img2.akamaized.net/i/u/770x0/cab07a02b8de812336b286dfa5dc9ac3.jpg',
    year: 2016
    
}

const theupside ={
  id:"theupside",
    title: 'The upside',
    image: 'https://superclub.videotron.com/media/catalog/product/cache/bdfe59afc1d8bd5cfc84d1a6934fa46c/u/p/upside_the_dvd_2d.png',
    year: 2017,
    rating: 3
}

const thelegend ={
  id:"thelegend",
    title: 'The legend',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Video/b7/ca/6a/mzi.xiydnopk.jpg/268x0w.jpg',
    year: 2007,
    rating: 4
}
const captain ={
  id:"captain",
    title: 'Captain Marvel',
    image: 'https://thepowerzone.files.wordpress.com/2019/04/affiche-film-captain-marvel-2019.jpg?w=736',
    year: 2019,
    rating: 5
}
const Prophetie ={
  id:" Prophetie",
    title: 'Prophetie',
    image: 'http://fr.web.img3.acsta.net/c_215_290/medias/nmedia/18/92/93/38/20225969.jpg',
    year: 2012,
    rating: 1
}
const RESISTANCE ={
  id:"RESISTANCE",
    title: 'RESISTANCE',
    image: 'https://m.media-amazon.com/images/M/MV5BMTUwNTE1OTQ5Ml5BMl5BanBnXkFtZTgwNzI5MzcwMzE@._V1_.jpg',
    year: 2011,
    rating: 2
}
const zootopia ={
  id:"zootopia",
    title: 'zootopia',
    image: 'https://is3-ssl.mzstatic.com/image/thumb/Video118/v4/8b/89/0e/8b890ec5-4ccd-573b-c079-4cd8fb1eda4f/pr_source.jpg/268x0w.jpg',
    year: 2016,
    rating: 5
}


  const moviesToDisplay = [RESISTANCE,inception,zootopia,mebeforeyou,theupside,thelegend, captain, Prophetie]




class  MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      minRatingFilter: 1,
      movies: moviesToDisplay,
      filtred:moviesToDisplay
     }
     
  }
  
  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }





  getVisibleMovies() {
    return this.state.movies.filter(el => el.rating >= this.state.minRatingFilter)
  }
  serach(keyword){
    this.setState({filtred:this.state.movies.filter((el,i)=>
      {return el.title.toLocaleLowerCase().indexOf(keyword)>-1})})
  }
  



  render() { 
    return ( <div className="movie-app">

        <header className="movie-app-header">
          <NameFilter  searchname={(keyword)=>this.serach(keyword)}/>
              {/* callback  na3mlou appel lfct onChangelbech tet3ada fi props*/}
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating
              })
            }} />
        </header>

    <main className="movie-app-main">
    <MovieList 
       movies={ this.getVisibleMovies()
       }
      // movies={this.state.filtred} 
      onAddMovie={(newMovie) => this.addNewMovie(newMovie)} />           
   
    </main>
  </div> );
  }
}
 


export default MovieApp;
