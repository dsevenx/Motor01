import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import lieferElementBOContainer from "../BOs/lieferElementBOContainer";

export default function MotorTextField(props) {
  if (props && props.container && props.name && props.grname) {
    const lBO = lieferElementBOContainer(
      props.container,
      props.grname,
      props.name
    );

    if (lBO) {
      let lID = lBO.getGrname() + lBO.getName();
      return (
        <Box
          component="form"
          sx={{
            "& > :not(style)": { width: 300 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id={lID}
            label={lBO.name}
            variant="outlined"
            defaultValue={lBO.value}
            onChange={(event) => {
              lBO.setValue(event.target.value);
            }}
          />
        </Box>
      );
    }
  }
  return <div>Textfield fehlt</div>;
}
