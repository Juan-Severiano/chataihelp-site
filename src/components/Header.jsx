import { Component } from "react";
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
                <header className="header container d-flex align-items-center justify-content-center">
                  <Link to='/'><img className="logo" src="/chataihelp-logo.png" alt="" /></Link>
                  <ul className="nav nav-bar container">
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
                </header>
            </>
        )
    }
}