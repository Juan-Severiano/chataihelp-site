import { Component } from "react";
import '../styles/styles.css'
import InfoImgs from "../components/infoImgs";
import list from "../assets/list";

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
          <main className="persons-container container d-flex flex-wrap align-items-center justify-content-center">
            {
                list.map(person =>  (
                    <div className="person-card">
                        <img src={`/persons/${person.cover}.png`} alt="icon" className="img-person" />
                        <h4>{person.name}</h4>
                        <h5>{person.cargo}</h5>
                        <a href={`https://instagram.com/${person.insta}/`} className="nav-link" target="_blank">
                            <p><i class="bi bi-instagram"></i> {person.insta}</p>
                        </a>
                    </div>
                    ))
            }
          </main>
        </main>
      </>
    )
  }
}
