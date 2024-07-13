import React, { Fragment, useEffect, useState } from 'react';

import {
  Avatar,
  Box,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  TablePagination,
  TextField,
  Typography,
} from '@mui/material';

import Filters from '../../api/filters';
import UserService from '../../api/services/userService';

function Users() {
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(Filters.LIMIT);
  const [page, setPage] = useState(Filters.PAGE);
  const [count, setCount] = useState(0);
  const [find, setFind] = useState(Filters.FIND);
  const [order, setOrder] = useState(Filters.ORDER);

  useEffect(() => {
    const fetchData = async () => {
      let query = `?limit=${limit}&page=${page}&order=${order}`;
      if (find) {
        query += `&find=${find}`;
      }

      const response = await UserService.findAndCountAll(query);
      console.log(response);
      setCount(response.count);
      setUsers(response.data);
    };

    fetchData();
  }, [find, limit, order, page]);

  const handleSearchFind = (event) => {
    setFind(event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    setPage(parseInt(newPage, 10));
  };

  const handleChangeRowsPerPage = (event) => {
    const newLimit = parseInt(event.target.value, 10);
    setLimit(newLimit);
    setPage(0);
  };

  return (
    <>
      <CssBaseline />
      <Box>
        <Grid container justifyContent="center" sx={{ flexGrow: 1 }}>
          <Grid item xs={10} md={6} sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <TextField
                variant="standard"
                value={find}
                onChange={handleSearchFind}
                size="normal"
                placeholder="Search..."
                label="Search"
              />
              <FormControl variant="standard" sx={{ width: '200px' }}>
                <InputLabel id="order">Ordenar por</InputLabel>
                <Select labelId="order" id="order" label="Order by" value={order} onChange={handleOrderChange}>
                  <MenuItem value="a-z">A-Z</MenuItem>
                  <MenuItem value="z-a">Z-A</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <List sx={{ flexGrow: 1 }}>
              {users.map((user) => (
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
              ))}
            </List>
            <Box>
              <TablePagination
                component="div"
                count={count}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={limit}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Results per page"
                labelDisplayedRows={({ from, to, count }) =>
                  `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`
                }
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Users;
