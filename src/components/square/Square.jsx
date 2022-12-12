import React from 'react';

const Square = ({value,onClick}) => {
  return (
    <div className='square'
      style={{border: "2px solid",
      height: "100px",
      width: "100%",
      display:'flex',
      justifyContent: "center",
      alignItems: "center"}}
      onClick={onClick}>
      <h5 style={{fontFamily: "sans-serif",fontWeight: "bolder", fontSize: "30px"}}>{value}</h5>
    </div>
  )
}

export default Square;
