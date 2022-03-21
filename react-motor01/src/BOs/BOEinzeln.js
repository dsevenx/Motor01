export default class BOEinzeln {
  constructor(grname, name, value, options, disable, setBONeu) {
    this.grname = grname;
    this.name = name;
    this.value = value;
    this.options = options;
    this.disable = disable;
    this.eingabe_value = "";
    this.setBONeu = setBONeu;
  }

  setValue(pValue) {
    this.setBONeu(this.grname, this.name, pValue);
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
    return "";
  }
  getOptions() {
    return this.options;
  }
}
