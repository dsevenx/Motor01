import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BOAktion from "../BOs/BOAktion";
import lieferElementBOContainer from "../BOs/lieferElementBOContainer";
import aktualisiereBOContainer from "../BOs/aktualisiereBOContainer";

export default function MotorTextField(props) {
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
              let lContainerNeu = aktualisiereBOContainer(
                props.container,
                BOAktion.UPDATE,
                props.grname,
                props.name,
                lZeilenID,
                event.target.value
              );

              props.setBOContainerNeuInState(lContainerNeu);
            }}
          />
        </Box>
      );
    }
  }
  return <div>Textfield fehlt</div>;
}
