import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";
import { HiDotsHorizontal } from "react-icons/hi";

function createData(id, systemIdentifier, DID, Status) {
  return { id, systemIdentifier, DID, Status };
}

const rows = [
  createData(
    1,
    "johndoelongaddress@ema1l.com",
    "DID:INDY:reghdfhfsrthaqtjhsrtjsrtjh",
    "🔴 Inactive"
  ),
  createData(
    2,
    "johndoelongaddress@email.com",
    "DID:INDY:reghdfhfsrthaqtjhsrtjsrtjh",
    "🔴 Inactive"
  ),
  createData(
    3,
    "johndoelongaddress@email.com",
    "DID:INDY:reghdfhfsrthaqtjhsrtjsrtjh",
    "🟢 Active"
  ),
  createData(
    4,
    "johndoelongaddress@email.com",
    "DID:INDY:reghdfhfsrthaqtjhsrtjsrtjh",
    "🟢 Active"
  ),
  createData(
    5,
    "johndoelongaddress@email.com",
    "DID:INDY:reghdfhfsrthaqtjhsrtjsrtjh",
    "🟢 Active"
  ),
  createData(
    6,
    "johndoelongaddress@email.com",
    "DID:INDY:reghdfhfsrthaqtjhsrtjsrtjh",
    "🔴 Inactive"
  ),
  createData(
    7,
    "johndoelongaddress@email.com",
    "DID:INDY:reghdfhfsrthaqtjhsrtjsrtjh",
    "🔴 Inactive"
  ),
  createData(
    8,
    "johndoelongaddress@email.com",
    "DID:INDY:reghdfhfsrthaqtjhsrtjsrtjh",
    "🟢 Active"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>##</TableCell>
            <TableCell align="right">System Identifier</TableCell>
            <TableCell align="right">DID</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.systemIdentifier}</TableCell>
              <TableCell align="right">{row.DID}</TableCell>
              <TableCell align="right">{row.Status}</TableCell>
              <TableCell align="right">
                <div className="editSettings">
                  <HiDotsHorizontal />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
