export default function lieferElementBOContainerSGZeilenID(mBOListe) {
  let lZeilenIDListe = new Set();
  return mBOListe.filter((item) => {
    let k = item.zeilenid;
    return lZeilenIDListe.has(k) ? false : lZeilenIDListe.add(k);
  });
}
