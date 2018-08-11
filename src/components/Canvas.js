import React from './react';

export default (image, onImageSelect, key }) => {
  console.log(image);
  return (
    <div className='container'>
      <div>
        <img src={ image } alt=""/>
      </div>
      <button className="btn" type="button" onClick={() => onImageSelect(key)}>
        Select
      </button>
    </div>
  );
};