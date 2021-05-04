import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@material-ui/core";
import useStyles from "./styles";
import rows from "./dataExample";

const TableData = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow className={classes.row}>
            <TableCell className={classes.cell}>No</TableCell>
            <TableCell>No.SR&nbsp;</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Dept</TableCell>
            <TableCell>Keterangan</TableCell>
            <TableCell>Appr</TableCell>
            <TableCell>Actv</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell align="left">{row.nosr}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.dept}</TableCell>
              <TableCell align="left">{row.ket}</TableCell>
              <TableCell align="left">{row.appr}</TableCell>
              <TableCell align="left">{row.actv}</TableCell>
              <TableCell align="left">{row.created}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
