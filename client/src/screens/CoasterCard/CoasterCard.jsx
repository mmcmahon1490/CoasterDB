import React from 'react';
import { Link } from 'react-router-dom';

export default function CoasterCard(){
  return (
    <div>
    <h2>coaster card!</h2>
      <Link to='edit'>edit coaster</Link>
      <button>delete</button>
      </div>
  )
}