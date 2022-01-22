import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card'

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return

    <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <Card thought={thought} showUsername={showUsername} />

        ))}
    </div>
  );
};

export default ThoughtList;
