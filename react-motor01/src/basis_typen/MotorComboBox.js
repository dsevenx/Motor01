import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import lieferElementBOContainer from "../BOs/lieferElementBOContainer";

export default function MotorComboBox(props) {
  if (props && props.container && props.name && props.grname) {
    const lBO = lieferElementBOContainer(
      props.container,
      props.grname,
      props.name
    );

    if (lBO) {
      let lID = lBO.getGrname() + lBO.getName();

      return (
        <Autocomplete
          disablePortal
          id={lID}
          defaultValue={lBO.getGuiZuValue()}
          onChange={(event, newValue) => {
            lBO.setValue(newValue.id);
          }}
          options={lBO.getOptions()}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label={lBO.name} />}
        />
      );
    }
  }
  return <div>ComboBox fehlt</div>;
}
