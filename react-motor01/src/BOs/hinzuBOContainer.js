import BOEinzeln from "./BOEinzeln";

export default function hinzuBOContainer(
  mBOconatiner,
  grname,
  name,
  value,
  options,
  disabled,
  setBONeu,
  janein
) {
  const lBOEinzeln = new BOEinzeln(
    grname,
    name,
    value,
    options,
    disabled,
    setBONeu,
    janein
  );

  mBOconatiner.push(lBOEinzeln);
}
