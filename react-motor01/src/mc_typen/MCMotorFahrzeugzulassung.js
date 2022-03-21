import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MotorComboBox from "../basis_typen/MotorComboBox";
import MotorTextField from "../basis_typen/MotorTextField";
import MotorDate from "../basis_typen/MotorDate";

import BONamen from "../BOs/BONamen";

export class MCMotorFahrzeugzulassung extends React.Component {
  render() {
    if (this.props.BoContainer) {
      return (
        <Box sx={{ flexGrow: 1 }}>
          Fahrzeugzulassung
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <MotorTextField
                container={this.props.BoContainer}
                grname={BONamen.K_GR_FAHRZEUGZULASSUNG}
                name={BONamen.K_E_AMTL_KENNZEICHEN}
              />
            </Grid>
            <Grid item xs={6}>
              <MotorComboBox
                container={this.props.BoContainer}
                grname={BONamen.K_GR_FAHRZEUGZULASSUNG}
                name={BONamen.K_E_KGS}
              />
            </Grid>
            <Grid item xs={6}>
              <MotorDate
                container={this.props.BoContainer}
                grname={BONamen.K_GR_FAHRZEUGZULASSUNG}
                name={BONamen.K_E_ANMELDEDATUM}
              />
            </Grid>
            <Grid item xs={6}>
              <MotorDate
                container={this.props.BoContainer}
                grname={BONamen.K_GR_FAHRZEUGZULASSUNG}
                name={BONamen.K_E_ERSTZULDATUM}
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
