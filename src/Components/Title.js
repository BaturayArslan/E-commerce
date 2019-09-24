import React from 'react';

export default function Title({ name, title }) {
  return (
    <div>
      <div className="row-nowrap text-center">
        <h1>
          <strong className="text-title">
            {' '}
            {name} {title}{' '}
          </strong>
        </h1>
      </div>
    </div>
  );
}
