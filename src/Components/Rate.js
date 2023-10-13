import React from 'react';

export default function Rate({ rate,setrate }) {
  const arrStar = [1, 2, 3, 4, 5];
  return (
    <div className='RateContainer'>
      {arrStar.map((el )=> 
        <span 
        onClick={()=>
        {setrate(el);
        }}
        >
          {el <= rate ?(
             <i className="fas fa-star" key={el}></i> 
             ):(
             <i className="far fa-star" key={el}></i>
             )}
             </span >
      )}
        </div>
  );
}
