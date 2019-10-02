/* eslint-disable no-script-url */

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export default function TrialsTable(props) {

  let rows = props.trials;

  return (
      <Table size="small">
        <TableBody>
          {rows.map((row,i) => (
            <TableRow key={i}>
              <TableCell>{i+1}</TableCell>
              <TableCell>{row}s</TableCell>
              <TableCell><IconButton aria-label="delete" onClick={() => props.onDeleteClick(i)}><DeleteIcon/></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}
