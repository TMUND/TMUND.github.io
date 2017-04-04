import React from 'react';


export const NextArrow = (props) => {
  return (
    <div className='arrow-container next'>
      <button onClick={ props.onClick } className='arrow'></button>
    </div>
  );
};

export default NextArrow;
