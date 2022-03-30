import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MotorComboBox from "../basis_typen/MotorComboBox";
import MotorTextField from "../basis_typen/MotorTextField";
import MotorDate from "../basis_typen/MotorDate";
import MotorCheckBox from "../basis_typen/MotorCheckBox";

import BONamen from "../BOs/BONamen";

export class MCMotorFahrzeugzulassung extends React.Component {
  render() {
    if (this.props.BoContainer && this.props.grname) {
      return (
        <Box sx={{ flexGrow: 1 }}>
          Fahrzeugzulassung
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <MotorTextField
                container={this.props.BoContainer}
                grname={this.props.grname}
                name={BONamen.K_E_AMTL_KENNZEICHEN}
                setBOContainerNeuInState={this.props.setBOContainerNeuInState}
                breite={200}
              />
            </Grid>
            <Grid item xs={2}>
              <MotorComboBox
                container={this.props.BoContainer}
                grname={this.props.grname}
                name={BONamen.K_E_KGS}
                setBOContainerNeuInState={this.props.setBOContainerNeuInState}
                breite={200}
              />
            </Grid>
            <Grid item xs={2}>
              <MotorCheckBox
                container={this.props.BoContainer}
                grname={this.props.grname}
                name={BONamen.K_E_KENNZEICHN_PRUEFEN}
                setBOContainerNeuInState={this.props.setBOContainerNeuInState}
                breite={200}
              />
            </Grid>
            <Grid item xs={2}>
              <MotorDate
                container={this.props.BoContainer}
                grname={this.props.grname}
                name={BONamen.K_E_ANMELDEDATUM}
                setBOContainerNeuInState={this.props.setBOContainerNeuInState}
                breite={200}
              />
            </Grid>
            <Grid item xs={2}>
              <MotorDate
                container={this.props.BoContainer}
                grname={this.props.grname}
                name={BONamen.K_E_ERSTZULDATUM}
                setBOContainerNeuInState={this.props.setBOContainerNeuInState}
                breite={200}
              />
            </Grid>
          </Grid>
        </Box>
      );
    }

    return <div></div>;
  }
}

export default MCMotorFahrzeugzulassung;
