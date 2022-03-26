export default function lieferElementBOContainerSG(mBOconatiner, grname) {
  let lBOs = mBOconatiner.filter((x) => x.grname === grname);

  if (lBOs) {
    return lBOs;
  }

  return [];
}
