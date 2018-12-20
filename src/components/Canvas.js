import React from './react';

const Canvas = (image, onImageSelect, key ) => (
    <div className='container'>
      <div>
        <img src={ image } alt=""/>
      </div>
      <button className="btn" type="button" onClick={() => onImageSelect(key)}>
        Select
      </button>
    </div>
  );

export default Canvas;
