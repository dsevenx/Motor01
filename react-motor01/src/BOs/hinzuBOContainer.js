import BOEinzeln from "./BOEinzeln";

export default function hinzuBOContainer(
  mBOconatiner,
  grname,
  name,
  value,
  options,
  disabled,
  setBONeu
) {
  const lBOEinzeln = new BOEinzeln(
    grname,
    name,
    value,
    options,
    disabled,
    setBONeu
  );

  mBOconatiner.push(lBOEinzeln);
}
