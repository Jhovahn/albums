import React from 'react';

const number = Math.floor(Math.random() * 500);

const Album = ({ id, title, number }) => (
  <div>
    <h1>{`${id}. ${title}`}</h1>
    <img src={`https://picsum.photos/200/200/?image=${number}`} />
  </div>
);

export default Album;
