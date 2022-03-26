import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import MotorComboBox from "./../basis_typen/MotorComboBox";
import MotorTextField from "./../basis_typen/MotorTextField";
import MotorDate from "../basis_typen/MotorDate";

import BONamen from "../BOs/BONamen";
import lieferElementBOContainerSG from "../BOs/lieferElementBOContainerSG";
import lieferElementBOContainerSGZeilenID from "../BOs/lieferElementBOContainerSGZeilenID";

export class SGMotorKilometerstand extends React.Component {
  render() {
    if (this.props && this.props.BoContainer && this.props.grname) {
      const lBOs = lieferElementBOContainerSG(
        this.props.BoContainer,
        this.props.grname
      );

      const lZeilenID = lieferElementBOContainerSGZeilenID(lBOs);

      if (lZeilenID) {
        return (
          <Box sx={{ flexGrow: 1 }}>
            {this.props.grname}
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 900 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Angabegrund</TableCell>
                        <TableCell align="center">
                          Datum des Kilometestands
                        </TableCell>
                        <TableCell align="center">
                          Kilometerstandswert
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {lZeilenID.map((lEineZeilenID) => (
                        <TableRow
                          key={lEineZeilenID}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <MotorComboBox
                              container={this.props.BoContainer}
                              grname={BONamen.K_GR_KILOMETERSTANDSANGABEN}
                              name={BONamen.K_E_KILOMETERSTANDSGRUND}
                              zeilenid={lEineZeilenID.zeilenid}
                            />
                          </TableCell>
                          <TableCell align="right">
                            {" "}
                            <MotorDate
                              container={this.props.BoContainer}
                              grname={BONamen.K_GR_KILOMETERSTANDSANGABEN}
                              name={BONamen.K_E_KILOMETERSTANDSDATUM}
                              zeilenid={lEineZeilenID.zeilenid}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <MotorTextField
                              container={this.props.BoContainer}
                              grname={BONamen.K_GR_KILOMETERSTANDSANGABEN}
                              name={BONamen.K_E_KILOMETERSTAND}
                              zeilenid={lEineZeilenID.zeilenid}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Box>
        );
      }
    }

    return <div>kommt noch</div>;
  }
}

export default SGMotorKilometerstand;
