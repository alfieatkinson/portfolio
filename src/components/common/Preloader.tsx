import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

export default function Preloader(): React.JSX.Element {
  return (
    <div className='flex h-screen items-center justify-center'>
      <BallTriangle wrapperClass='preloader' />
    </div>
  );
}
