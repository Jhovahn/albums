import React from 'react';
import Album from './Album';

const AlbumList = ({ list }) => (
  <div>
    <ul style={{ 'list-style-type': 'none' }}>
      {list.map((item, key) => (
        <li>
          <Album
            id={item.id}
            title={item.title}
            number={Math.floor(Math.random() * 250)}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default AlbumList;
