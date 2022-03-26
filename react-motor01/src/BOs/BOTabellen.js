export default class BOTabellen {
  constructor(grname, name, ueberschriften, disable, BOEinzeln) {
    this.grname = grname;
    this.name = name;
    this.ueberschriften = ueberschriften;
    this.disable = disable;
    this.BOEinzeln = BOEinzeln;
  }

  setValue(pValue) {
    this.setValue(this.grname, this.name, pValue);
  }

  getGrname() {
    return this.grname;
  }

  getName() {
    return this.name;
  }

  getXMLText() {
    if (this.eingabe_value && this.eingabe_value !== "") {
      if (this.janein) {
        if (this.eingabe_value === "on") {
          return (
            "<" +
            this.name +
            "_e eingabe='sba_eingegben>J</" +
            this.name +
            "_e>"
          );
        } else {
          return (
            "<" +
            this.name +
            "_e eingabe='sba_eingegben>N</" +
            this.name +
            "_e>"
          );
        }
      } else {
        return (
          "<" +
          this.name +
          "_e eingabe='sba_eingegben>" +
          this.eingabe_value +
          "</" +
          this.name +
          "_e>"
        );
      }
    }
    return "";
  }
}
