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

import MotorComboBox from "../basis_typen/MotorComboBox";
import MotorTextField from "../basis_typen/MotorTextField";
import MotorCheckBox from "../basis_typen/MotorCheckBox";

import BONamen from "../BOs/BONamen";
import BOAktion from "../BOs/BOAktion";
import lieferElementBOContainerSG from "../BOs/lieferElementBOContainerSG";
import lieferElementBOContainerSGZeilenID from "../BOs/lieferElementBOContainerSGZeilenID";
import loescheElementeBOContainer from "../BOs/loescheElementeBOContainer";
import lieferFreienZeilenIDBOContainer from "../BOs/lieferFreienZeilenIDBOContainer";
import aktualisiereBOContainer from "../BOs/aktualisiereBOContainer";

export class SGMotorZubehoer extends React.Component {
  constructor(props) {
    super(props);

    this.hinzufuegenZubehoerzeile = this.hinzufuegenZubehoerzeile.bind(this);
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
              <Grid item xs={9}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 900 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Art des Zubehörs</TableCell>
                        <TableCell align="center">zuschlagspflichtig</TableCell>
                        <TableCell align="center">Hersteller</TableCell>
                        <TableCell align="center">Wert in EUR</TableCell>
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
                          <TableCell
                            component="th"
                            scope="row"
                            key={lEineZeilenID}
                          >
                            <MotorComboBox
                              container={this.props.BoContainer}
                              grname={this.props.grname}
                              name={BONamen.K_E_ZUBEHOERART}
                              zeilenid={lEineZeilenID.zeilenid}
                              setBOContainerNeuInState={
                                this.props.setBOContainerNeuInState
                              }
                              breite={200}
                            />
                          </TableCell>
                          <TableCell align="right">
                            {" "}
                            <MotorCheckBox
                              container={this.props.BoContainer}
                              grname={this.props.grname}
                              name={BONamen.K_E_ZUHEHOER_ZUSCHLAGSPFLICHTIG}
                              zeilenid={lEineZeilenID.zeilenid}
                              setBOContainerNeuInState={
                                this.props.setBOContainerNeuInState
                              }
                              breite={100}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <MotorTextField
                              container={this.props.BoContainer}
                              grname={this.props.grname}
                              name={BONamen.K_E_ZUHEHOER_HERSTELLER}
                              zeilenid={lEineZeilenID.zeilenid}
                              setBOContainerNeuInState={
                                this.props.setBOContainerNeuInState
                              }
                              breite={200}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <MotorTextField
                              container={this.props.BoContainer}
                              grname={this.props.grname}
                              name={BONamen.K_E_ZUHEHOER_WERT}
                              zeilenid={lEineZeilenID.zeilenid}
                              setBOContainerNeuInState={
                                this.props.setBOContainerNeuInState
                              }
                              breite={100}
                            />
                          </TableCell>
                          <TableCell align="right">
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
                      this.hinzufuegenZubehoerzeile();
                    }}
                  >
                    ein Zubehör hinzufügen
                  </Button>
                </TableContainer>
              </Grid>
            </Grid>
          </Box>
        );
      }
    }

    return <div>Zubehör kommt noch</div>;
  }

  hinzufuegenZubehoerzeile() {
    let lNeueZeilenID = lieferFreienZeilenIDBOContainer(
      this.props.BoContainer,
      this.props.grname
    );

    let lContainerNeu = aktualisiereBOContainer(
      this.props.BoContainer,
      BOAktion.ADD,
      this.props.grname,
      BONamen.K_E_ZUBEHOERART,
      lNeueZeilenID,
      "000",
      [
        { label: "Bitte wählen", id: "000" },
        { label: "Info-Nav-Systen", id: "274" },
        { label: "Soundsystem", id: "333" },
        { label: "parkdistance control", id: "444" },
      ],
      false,
      false
    );

    lContainerNeu = aktualisiereBOContainer(
      lContainerNeu,
      BOAktion.ADD,
      this.props.grname,
      BONamen.K_E_ZUHEHOER_ZUSCHLAGSPFLICHTIG,
      lNeueZeilenID,
      "",
      [],
      false,
      true
    );

    lContainerNeu = aktualisiereBOContainer(
      lContainerNeu,
      BOAktion.ADD,
      this.props.grname,
      BONamen.K_E_ZUHEHOER_HERSTELLER,
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
      BONamen.K_E_ZUHEHOER_WERT,
      lNeueZeilenID,
      "0",
      [],
      false,
      false
    );

    this.props.setBOContainerNeuInState(lContainerNeu);
  }
}

export default SGMotorZubehoer;
