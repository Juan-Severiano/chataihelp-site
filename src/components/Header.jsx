import { Component } from "react";
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
      return (
        <>
          <header className="header container d-flex align-items-center justify-content-center navbar navbar-expand-dr">
          <div class="container-fluid">
            <Link to='/'><img className="logo" src="/chataihelp-logo.png" alt="" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
           </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav container me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to='/about'>Sobre nós</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/info'>Informações</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/download/chataihelp.apk" download='chataihelp.apk'>Download</a>
              </li>
            </ul>
            </div>
            </div>
          </header>
        </>
      )
    }
}