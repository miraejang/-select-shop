import React from 'react';

export default function Banner({ children, image }) {
  return (
    <>
      <div>
        <img src={image} alt='background' />
      </div>
      <div>{children}</div>
    </>
  );
}
