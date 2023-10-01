import { Component } from "react";
import '../styles/styles.css'
import Gallery from "../components/gallery";
import Code from "../components/code";

export default class Info extends Component {
  render() {
    return  (
      <>
            <ul className="nav navbar nav-info">
              <li className="nav-item"><a href="#gallery"><i class="bi bi-images"></i></a></li>
              <li className="nav-item"><a href="#code"><i class="bi bi-code-slash"></i></a></li>
            </ul>
         <Gallery />
         <Code />
          
      </>
    )
  }
}
