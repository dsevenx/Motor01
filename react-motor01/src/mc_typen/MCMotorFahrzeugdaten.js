import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MotorComboBox from "./../basis_typen/MotorComboBox";
import MotorTextField from "./../basis_typen/MotorTextField";

import BONamen from "../BOs/BONamen";

export class MCMotorFahrzeugdaten extends React.Component {
  render() {
    if (this.props.BoContainer && this.props.grname) {
      return (
        <Box sx={{ flexGrow: 1 }}>
          {this.props.grname}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MotorComboBox
                container={this.props.BoContainer}
                grname={this.props.grname}
                name={BONamen.K_E_FAHRZEUGART}
                setBOContainerNeuInState={this.props.setBOContainerNeuInState}
              />
            </Grid>
            <Grid item xs={6}>
              <MotorComboBox
                container={this.props.BoContainer}
                grname={this.props.grname}
                name={BONamen.K_E_FAHRZEUGVERWENDUNG}
                setBOContainerNeuInState={this.props.setBOContainerNeuInState}
              />
            </Grid>
            <Grid item xs={6}>
              <MotorComboBox
                container={this.props.BoContainer}
                grname={this.props.grname}
                name={BONamen.K_E_HSN}
                setBOContainerNeuInState={this.props.setBOContainerNeuInState}
              />
            </Grid>
            <Grid item xs={6}>
              <MotorTextField
                container={this.props.BoContainer}
                grname={this.props.grname}
                name={BONamen.K_E_FIN}
                setBOContainerNeuInState={this.props.setBOContainerNeuInState}
              />
            </Grid>
          </Grid>
        </Box>
      );
    }

    return <div></div>;
  }
}

export default MCMotorFahrzeugdaten;
