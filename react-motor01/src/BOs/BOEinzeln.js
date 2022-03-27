export default class BOEinzeln {
  constructor(grname, name, zeilenid, value, options, disable, janein) {
    this.grname = grname;
    this.name = name;
    this.zeilenid = zeilenid;
    this.value = value;
    this.options = options;
    this.disable = disable;
    this.eingabe_value = "";
    this.janein = janein;
  }

  getGrname() {
    return this.grname;
  }

  getName() {
    return this.name;
  }

  getGuiZuValue() {
    let lWert = this.options.find((x) => x.id === this.value);

    if (lWert) {
      return lWert.label;
    }

    return "";
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
  getOptions() {
    return this.options;
  }
}
