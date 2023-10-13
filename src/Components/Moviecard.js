import React from 'react';
import {Card} from 'react-bootstrap';
import Rate from './Rate'
export default function Moviecard({movies}) {
  return (
    <div className='cardContainer'>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movies.imgUrl} />
      <Card.Body>
        <Card.Title>{movies.Title}</Card.Title>
        <Card.Text>
          {movies.Description}
        </Card.Text>
        <Rate rate={movies.rate}/> 
      </Card.Body>
    </Card>
    </div>
  )
}


