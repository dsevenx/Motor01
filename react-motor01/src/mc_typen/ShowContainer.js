import React from "react";

import { Table } from "react-bootstrap";

export class ShowContainer extends React.Component {
  render() {
    if (this.props.BoContainer) {
      return (
        <Table className="mt-4" striped bordered hover siz="sm">
          <thead>
            <tr>
              <th>Gruppe</th>
              <th>Name</th>
              <th>Wert</th>
              <th>Eingabewert</th>
              <th>Optionen</th>
              <th>XML-Sendestrom</th>
            </tr>
          </thead>
          <tbody>
            {this.props.BoContainer.map((lBO) => (
              <tr key={lBO.grname + lBO.name}>
                <td>{lBO.grname}</td>
                <td>{lBO.name}</td>
                <td>{lBO.value}</td>
                <td>{lBO.eingabe_value}</td>
                <td>{this.getOptionen(lBO.options)}</td>
                <td>{lBO.getXMLText()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }

    return <div></div>;
  }

  getOptionen(pOptionen) {
    if (!pOptionen) {
      return "";
    }

    const items = pOptionen.map((item) => {
      return (
        <td key={item.id}>
          {item.id}:{item.label}
        </td>
      );
    });

    return (
      <div className="bestandsdaten_freiemerkmale">
        <table>
          <tbody>
            <tr>{items}</tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowContainer;
