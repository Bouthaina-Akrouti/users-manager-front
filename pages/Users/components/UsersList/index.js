import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, firstName, lastName, Password, LastLoginDate, CreatedAt, UpdateAt) {
  return { id, firstName, lastName, Password, LastLoginDate, CreatedAt, UpdateAt };
}

const rows = [
  createData(0, 'firstName', 'lastName', 123456, '07/01/2020', '12/12/2012', '03/03/2000'),
  createData(1, 'firstName', 'lastName', 123456, '07/01/2020', '12/12/2012', '03/03/2000'),
  createData(2, 'firstName', 'lastName', 123456, '07/01/2020', '12/12/2012', '03/03/2000'),
  createData(3, 'firstName', 'lastName', 123456, '07/01/2020', '12/12/2012', '03/03/2000'),
  createData(4, 'firstName', 'lastName', 123456, '07/01/2020', '12/12/2012', '03/03/2000'),
];

export const UsersList = () => {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Family Nmae</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Last Login Date</TableCell>
              <TableCell align="right">Created At</TableCell>
              <TableCell align="right">Update At</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.password}</TableCell>
                <TableCell align="right">{row.LastLoginDate}</TableCell>
                <TableCell align="right">{row.CreatedAt}</TableCell>
                <TableCell align="right">{row.UpdateAt}</TableCell>
                <TableCell align="right">
                  <DeleteIcon />
                  <EditIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary">
        Add User
      </Button>

    </div>

  )
}
