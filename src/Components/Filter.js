import React from 'react';
import Rate from './Rate';
import { InputGroup,FormControl } from 'react-bootstrap';
export default function Filter(setsearch,setrate,rate) {
  return (
    <>
    <div className='filterContainer'>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
        <i className="fas fa-search"></i>
        </InputGroup.Text>
        <FormControl
          placeholder="search by title"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=> setsearch(e.target.value)}
        />
      </InputGroup>
      
    
    <Rate rate={rate} setrate={setrate} />
    </div>
    </>
  );
}



