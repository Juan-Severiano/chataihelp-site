import { Component } from "react";
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="header container d-flex align-items-center justify-content-center navbar navbar-expand-dr">
          <Link to='/'><img className="logo" src="/chataihelp-logo.png" alt="" /></Link>
        </header>
      </>
    )
  }
}
