import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

function UserCard({ user }) {
  return (
    <Link to={`/users/${user.id}`}>
      <ListItem key={user.id}>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary={`${user.name} ${user.lastname}`}
          secondary={
            <Fragment>
              <Typography>{user.email}</Typography>
              <Typography>{user.biography}</Typography>
            </Fragment>
          }
        />
      </ListItem>
    </Link>
  );
}

export default UserCard;
