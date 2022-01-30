import React from 'react';
// import { Link } from 'react-router-dom';
import Tile from '../Tile';
import { Grid } from 'semantic-ui-react'
const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return (
      <h3>No Photos Yet</h3>
    )

  }

  // stackable columns={2}
  // 
  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      <Grid >
        {thoughts &&
          <Grid.Row>
            {thoughts.map((thought) => (
              <Grid.Column mobile={16} tablet={8} computer={4} className='mb-5'>
                <Tile thought={thought} showUsername={showUsername} />
              </Grid.Column>
            ))}
          </Grid.Row>
        }
      </Grid>
    </div >
  );
};

export default ThoughtList;
