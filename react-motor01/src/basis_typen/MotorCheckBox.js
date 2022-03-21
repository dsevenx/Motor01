import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function MotorCheckBox() {
  return (
    <div>
      Wo ist dies <Checkbox {...label} defaultChecked />
    </div>
  );
}
