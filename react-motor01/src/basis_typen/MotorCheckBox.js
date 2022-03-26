import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import lieferElementBOContainer from "../BOs/lieferElementBOContainer";

export default function MotorCheckBox(props) {
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
            "& > :not(style)": { width: 100 },
          }}
          noValidate
          autoComplete="off"
        >
          {lBO.getName()}{" "}
          <Checkbox
            id={lID}
            {...lBO.getName()}
            defaultChecked={lBO.value}
            onChange={(event) => {
              lBO.setValue(event.target.value);
            }}
          />
        </Box>
      );
    }
  }

  return <div>CheckBox fehlt</div>;
}
