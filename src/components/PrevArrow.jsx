import React from 'react';


export const PrevArrow = (props) => {
  return (
    <div className='arrow-container prev'>
      <button onClick={ props.onClick } className='arrow'></button>
    </div>
  );
};

export default PrevArrow;
