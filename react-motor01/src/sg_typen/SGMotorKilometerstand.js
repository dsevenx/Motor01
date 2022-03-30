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
import Button from "@mui/material/Button";

import MotorComboBox from "./../basis_typen/MotorComboBox";
import MotorTextField from "./../basis_typen/MotorTextField";
import MotorDate from "../basis_typen/MotorDate";

import BONamen from "../BOs/BONamen";
import BOAktion from "../BOs/BOAktion";

import lieferElementBOContainerSG from "../BOs/lieferElementBOContainerSG";
import lieferElementBOContainerSGZeilenID from "../BOs/lieferElementBOContainerSGZeilenID";
import loescheElementeBOContainer from "../BOs/loescheElementeBOContainer";
import lieferFreienZeilenIDBOContainer from "../BOs/lieferFreienZeilenIDBOContainer";
import aktualisiereBOContainer from "../BOs/aktualisiereBOContainer";

export class SGMotorKilometerstand extends React.Component {
  constructor(props) {
    super(props);

    this.hinzufuegenKilometerstandzeile = this.hinzufuegenKilometerstandzeile.bind(
      this
    );
  }
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
              <Grid item xs={12}>
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
                        <TableCell align="center">Optionen</TableCell>
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
                          <TableCell component="th" scope="row" align="center">
                            <MotorComboBox
                              container={this.props.BoContainer}
                              grname={this.props.grname}
                              name={BONamen.K_E_KILOMETERSTANDSGRUND}
                              zeilenid={lEineZeilenID.zeilenid}
                              setBOContainerNeuInState={
                                this.props.setBOContainerNeuInState
                              }
                              breite={300}
                            />
                          </TableCell>
                          <TableCell align="center">
                            {" "}
                            <MotorDate
                              container={this.props.BoContainer}
                              grname={this.props.grname}
                              name={BONamen.K_E_KILOMETERSTANDSDATUM}
                              zeilenid={lEineZeilenID.zeilenid}
                              setBOContainerNeuInState={
                                this.props.setBOContainerNeuInState
                              }
                              breite={100}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <MotorTextField
                              container={this.props.BoContainer}
                              grname={this.props.grname}
                              name={BONamen.K_E_KILOMETERSTAND}
                              zeilenid={lEineZeilenID.zeilenid}
                              setBOContainerNeuInState={
                                this.props.setBOContainerNeuInState
                              }
                              breite={100}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Button
                              onClick={() => {
                                loescheElementeBOContainer(
                                  this.props.BoContainer,
                                  this.props.grname,
                                  lEineZeilenID.zeilenid,
                                  this.props.setBOContainerNeuInState
                                );
                              }}
                            >
                              Löschen
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Button
                    variant="contained"
                    onClick={() => {
                      this.hinzufuegenKilometerstandzeile();
                    }}
                  >
                    ein Kilometerstand hinzufügen
                  </Button>
                </TableContainer>
              </Grid>
            </Grid>
          </Box>
        );
      }
    }

    return <div>Kilometerstand kommt noch</div>;
  }

  hinzufuegenKilometerstandzeile() {
    let lNeueZeilenID = lieferFreienZeilenIDBOContainer(
      this.props.BoContainer,
      this.props.grname
    );

    let lContainerNeu = aktualisiereBOContainer(
      this.props.BoContainer,
      BOAktion.ADD,
      this.props.grname,
      BONamen.K_E_KILOMETERSTANDSGRUND,
      lNeueZeilenID,
      "0",
      [
        { label: "Bitte wählen", id: "0" },
        { label: "Versicherungsbeginn", id: "1" },
        { label: "KM-Meldung", id: "2" },
        { label: "Antragsmeldung", id: "6" },
      ],
      false,
      false
    );

    lContainerNeu = aktualisiereBOContainer(
      lContainerNeu,
      BOAktion.ADD,
      this.props.grname,
      BONamen.K_E_KILOMETERSTANDSDATUM,
      lNeueZeilenID,
      "",
      [],
      false,
      false
    );

    lContainerNeu = aktualisiereBOContainer(
      lContainerNeu,
      BOAktion.ADD,
      this.props.grname,
      BONamen.K_E_KILOMETERSTAND,
      lNeueZeilenID,
      "",
      [],
      false,
      false
    );

    this.props.setBOContainerNeuInState(lContainerNeu);
  }
}

export default SGMotorKilometerstand;
