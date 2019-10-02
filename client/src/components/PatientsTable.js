/* eslint-disable no-script-url */

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export default function PatientsTable(props) {
  const rows = props.patients;
  return (
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row._id}>
              <TableCell>{row.name}</TableCell>
              <TableCell><IconButton aria-label="delete" onClick={() => props.onDeleteClick(row._id)}><DeleteIcon/></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}
