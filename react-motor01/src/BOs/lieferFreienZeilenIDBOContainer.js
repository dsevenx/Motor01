export default function lieferFreienZeilenIDBOContainer(mBOconatiner, grname) {
  let lZeilenID = 0;

  let lListeVonDieserGruppe = mBOconatiner.filter((x) => x.grname === grname);

  lListeVonDieserGruppe.forEach((item) => {
    if (lZeilenID < parseInt(item.zeilenid)) {
      lZeilenID = parseInt(item.zeilenid);
    }
  });

  return lZeilenID + 1 + "";
}
