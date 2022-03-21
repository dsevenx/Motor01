import BOEinzeln from "./BOEinzeln";

export default function lieferElementBOContainer(mBOconatiner, grname, name) {
  let lBO = mBOconatiner.find((x) => x.grname === grname && x.name === name);

  if (lBO instanceof BOEinzeln) {
    return lBO;
  }

  return null;
}
