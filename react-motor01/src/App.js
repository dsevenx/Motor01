import "./App.css";
import React, { Component } from "react";
import { MainAntagausgesteuert } from "./MainAntagausgesteuert";

// ID Elemente
window.K_E_FAHRZEUGART = "Fahrzeugart";
window.K_E_FAHRZEUGVERWENDUNG = "Fahrzeugverwendung";

// Gruppen
window.K_GR_FAHRZEUGDATEN = "Fahrzeugdaten";

export default class App extends Component {
  render() {
    return (
      <div>
        {" "}
        <MainAntagausgesteuert />
      </div>
    );
  }
}
