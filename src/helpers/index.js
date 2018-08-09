import React from 'react';

export function renderInput({ input, type, placeholder, className }){
  return (
    <input className={className} {...input} type={type ? type : 'text'} placeholder={placeholder} />
  )
}