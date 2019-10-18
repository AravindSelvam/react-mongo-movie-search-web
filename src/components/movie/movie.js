import React from 'react'

import {Button,Container,Row,Col} from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

import { Redirect } from 'react-router-dom'




class Movie extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            movieName : "",
            movieList : []
        }
    }


    setMovieName = (event) => {
            this.setState({
                movieName : event.target.value
            })
            console.log(this.state.movieName)
    }

    showMovies = () => {
        return <Redirect to='/show-movie' />
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/show-movie' />
        }
      }

    searchMovie = () => {
        fetch('http://www.omdbapi.com/?type=movie&apikey=801b5c33&s='+this.state.movieName)
        .then( result => result.json())
        .then(
            (result) => {
            console.log(result)
            if(result && result.Search){
                console.log("movie List"+result.Search)
                let     movieList = result.Search
                this.setState({
                    movieList:movieList
                })
            }

            },(error)=>(
                console.log(error)
            )
        )
    }

    saveMovie = (movie) =>{

        let header = new Headers();

        header.append('GET', 'POST', 'OPTIONS');
        header.append('Content-Type', 'application/json');
        header.append('Accept', 'application/json');
        console.log("Movie---->"+JSON.stringify(movie))

        let movieRequest ={"title":movie.Title,"year":movie.Year,"imdbID":movie.imdbID}

        fetch('http://localhost:8080/save/movie',{
            method:'POST',
            headers: header,
            body:JSON.stringify(movieRequest)
        }).then((result)=>{
            alert("movie saved successfully "+ movie.Title)
        }, (error)=>{
            alert("Error while save movie")
        })
    }

    
    render() {
        return (
            <div>
                {this.renderRedirect()}

            <h1>
                Create Movie
            </h1>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <input type="text" placeholder="Enter Movie Name" value={this.state.value}
                        onChange={this.setMovieName}>
                        </input>
                    </Col>
                    <Col xs lg="2">
                    <Button onClick={this.searchMovie}> Search Movies</Button>
                    </Col>

                    <Col xs lg="2">
                    <Button onClick={this.setRedirect}> Show Movies</Button>
                    </Col>
                </Row>
            </Container>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Movie Name</th>
                    <th>Year</th>
                    <th>Save</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.movieList.map( (movie,index) => (
                            <tr>
                                <td>
                                {index+1}
                                </td>
                                <td>
                                    {movie.imdbID}
                                </td>
                                <td>
                                    {movie.Title}
                                </td>
                                <td>
                                    {movie.Year}
                                </td>
                                <td>
                                    <Button onClick={ () => this.saveMovie(movie)}>Save</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            
            </div>
        )
    }

}

export default Movie