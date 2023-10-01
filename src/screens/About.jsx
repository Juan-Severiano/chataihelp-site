import { Component } from "react";
import '../styles/styles.css'
import InfoImgs from "../components/infoImgs";
import ListPersons from "../components/listPersons";

export default class About extends Component {
  render() {
    return  (
      <>
        <main className="container" style={{ marginTop: 30, marginBottom: 20 }}>


          <h2 style={{ marginTop: 30, marginBottom: 20 }}>Conheçam um pouco sobre o nosso projeto</h2>
          <hr />
          <InfoImgs />
          <h2 style={{ marginTop: 50, marginBottom: 20 }}>Conheçam nossos colaboradores</h2>
          <hr />
          <ListPersons />
        </main>
      </>
    )
  }
}
