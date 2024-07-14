import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import UserService from '../../../api/services/userService';
import { Avatar, Box, Divider, Grid, Paper, Typography } from '@mui/material';

function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await UserService.findById(userId);
      setUser(response.data);
    };

    fetchData();
  }, [userId]);

  return (
    <Grid container spacing={3}>
      <Grid item sx={4} lg={3}>
        <Avatar />
        <Typography>
          {user.name} {user.lastname}
        </Typography>
        <Typography>{user.job}</Typography>
        <Typography>{user.email}</Typography>
      </Grid>
      <Grid item xs={8} md={8} lg={9}>
        {user.biography}
      </Grid>
    </Grid>
  );
}

export default UserDetail;
