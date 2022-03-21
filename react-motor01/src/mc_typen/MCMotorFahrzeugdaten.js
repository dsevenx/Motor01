import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MotorComboBox from "./../basis_typen/MotorComboBox";
import MotorTextField from "./../basis_typen/MotorTextField";

import BONamen from "../BOs/BONamen";

export class MCMotorFahrzeugdaten extends React.Component {
  render() {
    if (this.props.BoContainer) {
      return (
        <Box sx={{ flexGrow: 1 }}>
          Fahrzeugdaten
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MotorComboBox
                container={this.props.BoContainer}
                grname={BONamen.K_GR_FAHRZEUGDATEN}
                name={BONamen.K_E_FAHRZEUGART}
              />
            </Grid>
            <Grid item xs={6}>
              <MotorComboBox
                container={this.props.BoContainer}
                grname={BONamen.K_GR_FAHRZEUGDATEN}
                name={BONamen.K_E_FAHRZEUGVERWENDUNG}
              />
            </Grid>
            <Grid item xs={6}>
              <MotorComboBox
                container={this.props.BoContainer}
                grname={BONamen.K_GR_FAHRZEUGDATEN}
                name={BONamen.K_E_HSN}
              />
            </Grid>
            <Grid item xs={6}>
              <MotorTextField
                container={this.props.BoContainer}
                grname={BONamen.K_GR_FAHRZEUGDATEN}
                name={BONamen.K_E_FIN}
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
