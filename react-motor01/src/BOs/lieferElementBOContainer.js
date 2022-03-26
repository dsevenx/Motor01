import BOEinzeln from "./BOEinzeln";

export default function lieferElementBOContainer(
  mBOconatiner,
  grname,
  name,
  zeilenid
) {
  let lBO = mBOconatiner.find(
    (x) => x.grname === grname && x.name === name && x.zeilenid === zeilenid
  );

  if (lBO instanceof BOEinzeln) {
    return lBO;
  }

  return null;
}
