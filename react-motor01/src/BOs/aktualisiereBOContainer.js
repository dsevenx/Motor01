import BOAktion from "./BOAktion";
import BOEinzeln from "./BOEinzeln";

export default function aktualisiereBOContainer(
  pBOContainer,
  action,
  grname,
  name,
  zeilenid,
  value,
  options,
  disabled,
  janein
) {
  if (action === BOAktion.UPDATE) {
    let BoContainer_neu = [...pBOContainer];

    const itemIndex = BoContainer_neu.findIndex(
      (item) =>
        item.grname === grname &&
        item.name === name &&
        item.zeilenid === zeilenid
    );

    if (itemIndex > -1) {
      const BOEinzelNeu = new BOEinzeln(
        BoContainer_neu[itemIndex].grname,
        BoContainer_neu[itemIndex].name,
        BoContainer_neu[itemIndex].zeilenid,
        value,
        BoContainer_neu[itemIndex].options,
        BoContainer_neu[itemIndex].disabled,
        BoContainer_neu[itemIndex].janein
      );

      if (BoContainer_neu[itemIndex].janein === true) {
        if (
          BoContainer_neu[itemIndex].value === "on" ||
          BoContainer_neu[itemIndex].value === "J"
        ) {
          BOEinzelNeu.value = "off";
          BOEinzelNeu.eingabe_value = "off";
        } else {
          BOEinzelNeu.value = "on";
          BOEinzelNeu.eingabe_value = "on";
        }
      } else {
        BOEinzelNeu.value = value;
        BOEinzelNeu.eingabe_value = value;
      }

      BoContainer_neu[itemIndex] = BOEinzelNeu;

      return BoContainer_neu;
    }
  } else if (action === BOAktion.DELETE) {
    let BoContainer_neuOhne = pBOContainer.filter((item) => {
      return item.zeilenid !== zeilenid || item.grname !== grname;
    });

    return BoContainer_neuOhne;
  } else if (action === BOAktion.ADD) {
    let lOptions = [];
    if (options) {
      lOptions = options;
    }

    const itemIndex = pBOContainer.findIndex(
      (item) =>
        item.grname === grname &&
        item.name === name &&
        item.zeilenid === zeilenid
    );

    if (itemIndex === -1) {
      const BOEinzelNeu = new BOEinzeln(
        grname,
        name,
        zeilenid,
        value,
        lOptions,
        disabled,
        janein
      );

      pBOContainer.push(BOEinzelNeu);

      return pBOContainer;
    }
  }

  return pBOContainer;
}
