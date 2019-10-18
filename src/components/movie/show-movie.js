import React from 'react'

import {Button,Container,Row,Col} from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { Redirect } from 'react-router-dom'


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

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/movie' />
        }
      }

    
    render() {
          
        return(
        <div>
            {this.renderRedirect()}

            <Container>
                <Row >
                    <Col xs lg="5">
                    <h1>
                        Show Movie List
                    </h1>
                    </Col>
                    <Col xs lg="2">
                    <Button onClick={this.setRedirect}> back</Button>
                    </Col>
                </Row >
            </Container>

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