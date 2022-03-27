export default function loescheElementeBOContainer(
  mBOconatiner,
  grname,
  zeilenid,
  setBOContainerNeuInState
) {
  let lBOs = mBOconatiner.filter(
    (x) => x.grname === grname && x.zeilenid === zeilenid
  );

  if (lBOs) {
    setBOContainerNeuInState(lBOs);
  }
}
