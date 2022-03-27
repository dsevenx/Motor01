import React, { Component } from "react";
import MotorAppBar from "./allg_func/MotorAppBar";
import MCMotorFahrzeugdaten from "./mc_typen/MCMotorFahrzeugdaten";
import MCMotorFahrzeugzulassung from "./mc_typen/MCMotorFahrzeugzulassung";
import SGMotorKilometerstand from "./sg_typen/SGMotorKilometerstand";
import SGMotorZubehoer from "./sg_typen/SGMotorZubehoer";
import aktualisiereBOContainer from "./BOs/aktualisiereBOContainer";
import { Container, Row } from "react-bootstrap";

import BONamen from "./BOs/BONamen";
import BOAktion from "./BOs/BOAktion";
import ShowContainer from "./mc_typen/ShowContainer";

export class MainAntagausgesteuert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BoContainer: [],
    };

    this.setBOContainerNeuInState = this.setBOContainerNeuInState.bind(this);
  }

  componentDidMount() {
    let lContainer = [];

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_FAHRZEUGDATEN,
      BONamen.K_E_FAHRZEUGART,
      "",
      "KFZ0001",
      [
        { label: "PKW", id: "KFZ0001" },
        { label: "LKW", id: "KFZ0005" },
        { label: "Arbeitsmaschine", id: "KFZ0014" },
        { label: "Motorrad", id: "KFZ0023" },
      ],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_FAHRZEUGDATEN,
      BONamen.K_E_FAHRZEUGVERWENDUNG,
      "",
      "KFZ001",
      [
        { label: "ohne Vermiertung", id: "KFZ001" },
        { label: "Taxi", id: "KFZ006" },
      ],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_FAHRZEUGDATEN,
      BONamen.K_E_HSN,
      "",
      "0005",
      [
        { label: "BMW", id: "0005" },
        { label: "Mercedes", id: "0708" },
        { label: "Audi", id: "0688" },
      ],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_FAHRZEUGDATEN,
      BONamen.K_E_FIN,
      "",
      "VORBELFIN",
      [],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_FAHRZEUGZULASSUNG,
      BONamen.K_E_AMTL_KENNZEICHEN,
      "",
      "M-lk 123",
      [],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_FAHRZEUGZULASSUNG,
      BONamen.K_E_KGS,
      "",
      "110000",
      [
        { label: "Berlin", id: "110000" },
        { label: "München", id: "098765" },
        { label: "Erfurt", id: "997755" },
        { label: "Weimar", id: "117755" },
      ],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_FAHRZEUGZULASSUNG,
      BONamen.K_E_ERSTZULDATUM,
      "",
      "2020-03-03",
      [],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_FAHRZEUGZULASSUNG,
      BONamen.K_E_ANMELDEDATUM,
      "",
      "2021-04-04",
      [],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_FAHRZEUGZULASSUNG,
      BONamen.K_E_KENNZEICHN_PRUEFEN,
      "",
      "",
      [],
      false,
      true
    );

    /// KM-Satnd
    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_KILOMETERSTANDSANGABEN,
      BONamen.K_E_KILOMETERSTANDSGRUND,
      "7000",
      "1",
      [
        { label: "Bitte wählen", id: "0" },
        { label: "Versicherungsbeginn", id: "1" },
        { label: "KM-Meldung", id: "2" },
        { label: "Antragsmeldung", id: "6" },
      ],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_KILOMETERSTANDSANGABEN,
      BONamen.K_E_KILOMETERSTANDSDATUM,
      "7000",
      "2021-04-05",
      [],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_KILOMETERSTANDSANGABEN,
      BONamen.K_E_KILOMETERSTAND,
      "7000",
      "1122",
      [],
      false,
      false
    );
    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_KILOMETERSTANDSANGABEN,
      BONamen.K_E_KILOMETERSTANDSGRUND,
      "7001",
      "2",
      [
        { label: "Bitte wählen", id: "0" },
        { label: "Versicherungsbeginn", id: "1" },
        { label: "KM-Meldung", id: "2" },
        { label: "Antragsmeldung", id: "6" },
      ],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_KILOMETERSTANDSANGABEN,
      BONamen.K_E_KILOMETERSTANDSDATUM,
      "7001",
      "2021-04-15",
      [],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_KILOMETERSTANDSANGABEN,
      BONamen.K_E_KILOMETERSTAND,
      "7001",
      "11221",
      [],
      false,
      false
    );

    /// Zubehör
    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_ZUHEHOER,
      BONamen.K_E_ZUBEHOERART,
      "7000",
      "333",
      [
        { label: "Bitte wählen", id: "000" },
        { label: "Info-Nav-Systen", id: "274" },
        { label: "Soundsystem", id: "333" },
        { label: "parkdistance control", id: "444" },
      ],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_ZUHEHOER,
      BONamen.K_E_ZUHEHOER_ZUSCHLAGSPFLICHTIG,
      "7000",
      "",
      [],
      false,
      true
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_ZUHEHOER,
      BONamen.K_E_ZUHEHOER_HERSTELLER,
      "7000",
      "Boose",
      [],
      false,
      false
    );
    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_ZUHEHOER,
      BONamen.K_E_ZUHEHOER_WERT,
      "7000",
      "4900",
      [],
      false,
      false
    );
    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_ZUHEHOER,
      BONamen.K_E_ZUBEHOERART,
      "7001",
      "444",
      [
        { label: "Bitte wählen", id: "000" },
        { label: "Info-Nav-Systen", id: "274" },
        { label: "Soundsystem", id: "333" },
        { label: "parkdistance control", id: "444" },
      ],
      false,
      false
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_ZUHEHOER,
      BONamen.K_E_ZUHEHOER_ZUSCHLAGSPFLICHTIG,
      "7001",
      "J",
      [],
      false,
      true
    );

    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_ZUHEHOER,
      BONamen.K_E_ZUHEHOER_HERSTELLER,
      "7001",
      "MrAbstand",
      [],
      false,
      false
    );
    lContainer = aktualisiereBOContainer(
      lContainer,
      BOAktion.ADD,
      BONamen.K_GR_ZUHEHOER,
      BONamen.K_E_ZUHEHOER_WERT,
      "7001",
      "1200",
      [],
      false,
      false
    );

    // jetzt in state
    this.setBOContainerNeuInState(lContainer);
  }

  setBOContainerNeuInState(BoContainer_neu) {
    this.setState({ BoContainer: BoContainer_neu });
  }

  render() {
    return (
      <div>
        <MotorAppBar></MotorAppBar>
        {this.state.LastUpdateElement}
        <Container fluid>
          <Row>
            <MCMotorFahrzeugdaten
              BoContainer={this.state.BoContainer}
              grname={BONamen.K_GR_FAHRZEUGDATEN}
              setBOContainerNeuInState={this.setBOContainerNeuInState}
            />
          </Row>
          <Row>
            <MCMotorFahrzeugzulassung
              BoContainer={this.state.BoContainer}
              grname={BONamen.K_GR_FAHRZEUGZULASSUNG}
              setBOContainerNeuInState={this.setBOContainerNeuInState}
            />
          </Row>
          <Row>
            <SGMotorKilometerstand
              BoContainer={this.state.BoContainer}
              grname={BONamen.K_GR_KILOMETERSTANDSANGABEN}
              setBOContainerNeuInState={this.setBOContainerNeuInState}
            />
          </Row>
          <Row>
            <SGMotorZubehoer
              BoContainer={this.state.BoContainer}
              grname={BONamen.K_GR_ZUHEHOER}
              setBOContainerNeuInState={this.setBOContainerNeuInState}
            />
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
