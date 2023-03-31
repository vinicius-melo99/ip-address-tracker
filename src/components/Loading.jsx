import React from 'react';
import loading from '../../images/loading.gif';

export default function Loading() {
  return (
    <div className="loading-component">
      <img src={ loading } alt="loading gif" />
    </div>
  )
}
