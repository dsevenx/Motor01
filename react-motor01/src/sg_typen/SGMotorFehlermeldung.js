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

import MotorTextField from "../basis_typen/MotorTextField";

import BONamen from "../BOs/BONamen";

import lieferElementBOContainerSG from "../BOs/lieferElementBOContainerSG";
import lieferElementBOContainerSGZeilenID from "../BOs/lieferElementBOContainerSGZeilenID";

export class SGMotorFehlermeldung extends React.Component {
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
                        <TableCell align="center">Art der Meldung</TableCell>
                        <TableCell align="center">ID Meldung</TableCell>
                        <TableCell align="center">Fehlertext</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {lZeilenID.map((lEineZeilenID) => (
                        <TableRow
                          key={lEineZeilenID.zeilenid}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="right">
                            <MotorTextField
                              container={this.props.BoContainer}
                              grname={this.props.grname}
                              name={BONamen.K_E_FEHLER_ART}
                              zeilenid={lEineZeilenID.zeilenid}
                              setBOContainerNeuInState={
                                this.props.setBOContainerNeuInState
                              }
                              disabeld="true"
                            />
                          </TableCell>

                          <TableCell align="right">
                            <MotorTextField
                              container={this.props.BoContainer}
                              grname={this.props.grname}
                              name={BONamen.K_E_FEHLER_ID}
                              zeilenid={lEineZeilenID.zeilenid}
                              setBOContainerNeuInState={
                                this.props.setBOContainerNeuInState
                              }
                              disabeld="true"
                            />
                          </TableCell>
                          <TableCell align="right">
                            <MotorTextField
                              container={this.props.BoContainer}
                              grname={this.props.grname}
                              name={BONamen.K_E_FEHLER_TEXT}
                              zeilenid={lEineZeilenID.zeilenid}
                              setBOContainerNeuInState={
                                this.props.setBOContainerNeuInState
                              }
                              disabeld="true"
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

    return <div>Feldermeldungen kommen noch</div>;
  }
}

export default SGMotorFehlermeldung;
