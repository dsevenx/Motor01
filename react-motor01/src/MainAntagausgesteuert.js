import React, { Component } from "react";
import MotorAppBar from "./basis_typen/MotorAppBar";
import MCMotorFahrzeugdaten from "./mc_typen/MCMotorFahrzeugdaten";
import MCMotorFahrzeugzulassung from "./mc_typen/MCMotorFahrzeugzulassung";
import hinzuBOContainer from "./BOs/hinzuBOContainer";
import { Container, Row } from "react-bootstrap";

import BONamen from "./BOs/BONamen";
import ShowContainer from "./mc_typen/ShowContainer";
import BOEinzeln from "./BOs/BOEinzeln";

export class MainAntagausgesteuert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BoContainer: [],
    };

    this.setBONeu = this.setBONeu.bind(this);
  }

  componentDidMount() {
    let lContainer = [];

    hinzuBOContainer(
      lContainer,
      BONamen.K_GR_FAHRZEUGDATEN,
      BONamen.K_E_FAHRZEUGART,
      "KFZ0001",
      [
        { label: "PKW", id: "KFZ0001" },
        { label: "LKW", id: "KFZ0005" },
        { label: "Arbeitsmaschine", id: "KFZ0014" },
        { label: "Motorrad", id: "KFZ0023" },
      ],
      false,
      this.setBONeu,
      false
    );

    hinzuBOContainer(
      lContainer,
      BONamen.K_GR_FAHRZEUGDATEN,
      BONamen.K_E_FAHRZEUGVERWENDUNG,
      "KFZ001",
      [
        { label: "ohne Vermiertung", id: "KFZ001" },
        { label: "Taxi", id: "KFZ006" },
      ],
      false,
      this.setBONeu,
      false
    );

    hinzuBOContainer(
      lContainer,
      BONamen.K_GR_FAHRZEUGDATEN,
      BONamen.K_E_HSN,
      "0005",
      [
        { label: "BMW", id: "0005" },
        { label: "Mercedes", id: "0708" },
        { label: "Audi", id: "0688" },
      ],
      false,
      this.setBONeu,
      false
    );

    hinzuBOContainer(
      lContainer,
      BONamen.K_GR_FAHRZEUGDATEN,
      BONamen.K_E_FIN,
      "VORBELFIN",
      [],
      false,
      this.setBONeu,
      false
    );

    hinzuBOContainer(
      lContainer,
      BONamen.K_GR_FAHRZEUGZULASSUNG,
      BONamen.K_E_AMTL_KENNZEICHEN,
      "M-lk 123",
      [],
      false,
      this.setBONeu,
      false
    );

    hinzuBOContainer(
      lContainer,
      BONamen.K_GR_FAHRZEUGZULASSUNG,
      BONamen.K_E_KGS,
      "110000",
      [
        { label: "Berlin", id: "110000" },
        { label: "München", id: "098765" },
        { label: "Erfurt", id: "997755" },
        { label: "Weimar", id: "117755" },
      ],
      false,
      this.setBONeu,
      false
    );

    hinzuBOContainer(
      lContainer,
      BONamen.K_GR_FAHRZEUGZULASSUNG,
      BONamen.K_E_ERSTZULDATUM,
      "2020-03-03",
      [],
      false,
      this.setBONeu,
      false
    );

    hinzuBOContainer(
      lContainer,
      BONamen.K_GR_FAHRZEUGZULASSUNG,
      BONamen.K_E_ANMELDEDATUM,
      "2021-04-04",
      [],
      false,
      this.setBONeu,
      false
    );

    hinzuBOContainer(
      lContainer,
      BONamen.K_GR_FAHRZEUGZULASSUNG,
      BONamen.K_E_KENNZEICHN_PRUEFEN,
      "",
      [],
      false,
      this.setBONeu,
      true
    );

    this.setState({ BoContainer: lContainer });
  }

  setBONeu(grname, name, value) {
    let BoContainer_neu = [...this.state.BoContainer];

    const itemIndex = BoContainer_neu.findIndex(
      (item) => item.grname === grname && item.name === name
    );

    if (itemIndex > -1) {
      const BOEinzelNeu = new BOEinzeln(
        BoContainer_neu[itemIndex].grname,
        BoContainer_neu[itemIndex].name,
        value,
        BoContainer_neu[itemIndex].options,
        BoContainer_neu[itemIndex].disabled,
        BoContainer_neu[itemIndex].setBONeu,
        BoContainer_neu[itemIndex].janein
      );

      if (BoContainer_neu[itemIndex].janein === true) {
        if (BoContainer_neu[itemIndex].value === "on") {
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

      this.setState({ BoContainer: BoContainer_neu });
    }
  }

  render() {
    return (
      <div>
        <MotorAppBar></MotorAppBar>
        {this.state.LastUpdateElement}
        <Container fluid>
          <Row>
            <MCMotorFahrzeugdaten BoContainer={this.state.BoContainer} />
          </Row>
          <Row>
            <MCMotorFahrzeugzulassung BoContainer={this.state.BoContainer} />
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <ShowContainer BoContainer={this.state.BoContainer} />
          </Row>
        </Container>
      </div>
    );
  }
}
