import React from 'react'

import {Button,Container,Row,Col} from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

const host ="http://localhost:8080"
class ShowMovie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movieList : []
        }
    }

    

    componentDidMount(){

        fetch(host+'/get/movies')
        .then( result => result.json())
        .then(
            (result)=>{
                this.setState( {movieList : result })
            },
            (error) => {alert(error)}
        )

    }

    
    render() {
          
        return(
        <div>

            <h1>
                Show Movie List
            </h1>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Movie Name</th>
                    <th>Year</th>
                    
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
                                    {movie.title}
                                </td>
                                <td>
                                    {movie.year}
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
export default ShowMovie