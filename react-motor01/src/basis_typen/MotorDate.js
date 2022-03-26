import * as React from "react";
import TextField from "@mui/material/TextField";
import lieferElementBOContainer from "../BOs/lieferElementBOContainer";

export default function MotorDate(props) {
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
        <TextField
          id={lID}
          label={lBO.name}
          onChange={(event) => {
            lBO.setValue(event.target.value);
          }}
          type="date"
          defaultValue={lBO.value}
          sx={{ width: 300 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      );
    }
  }
  return <div>Datum fehlt</div>;
}
