import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import lieferElementBOContainer from "../BOs/lieferElementBOContainer";
import aktualisiereBOContainer from "../BOs/aktualisiereBOContainer";
import BOAktion from "../BOs/BOAktion";

export default function MotorComboBox(props) {
  if (props && props.container && props.name && props.grname) {
    let lZeilenID = "";
    if (props.zeilenid) {
      lZeilenID = props.zeilenid;
    }

    const lBO = lieferElementBOContainer(
      props.container,
      props.grname,
      props.name,
      lZeilenID
    );

    if (lBO) {
      let lID = lBO.getGrname() + lBO.getName() + lZeilenID;

      return (
        <Autocomplete
          disablePortal
          id={lID}
          isOptionEqualToValue={(option, value) => {
            if (value.id && option.id) {
              return option.id === value.id;
            }

            return option.label === value;
          }}
          value={lBO.getGuiZuValue()}
          defaultValue={lBO.getGuiZuValue()}
          onChange={(event, newValue) => {
            let lContainerNeu = aktualisiereBOContainer(
              props.container,
              BOAktion.UPDATE,
              props.grname,
              props.name,
              lZeilenID,
              newValue.id
            );

            props.setBOContainerNeuInState(lContainerNeu);
          }}
          options={lBO.getOptions()}
          sx={{
            "& > :not(style)": { width: props.breite },
          }}
          renderInput={(params) => <TextField {...params} label={lBO.name} />}
        />
      );
    }
  }
  return <div>ComboBox fehlt</div>;
}
