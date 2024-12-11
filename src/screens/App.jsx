import { Component } from "react";
import '../styles/styles.css';

export default class App extends Component {
  render() {
    return (
      <>
        <div className="fundo-video">
          <video
            className="video"
            autoPlay
            loop
            src="/videos/video-bg.mp4"
            alt="Mulher usando o computador"
          ></video>
        </div>
        <main className="container home d-flex justify-content-between mt-5">
          <aside className="welcome d-flex align-items-start justify-content-center flex-column">
            <h1 className="title-home">SEJAM BEM VINDOS</h1>
            <h2>Faça download do nosso app e conheça nosso projeto</h2>
            <a
              href="/app@latest.apk"
              download
              className="text-uppercase btn mt-5 w-25 fw-semibold"
              style={{ backgroundColor: "#fd64c2" }}
            >
              <i className="bi bi-download me-2"></i> download
            </a>
          </aside>
          <aside id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/icon.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/1.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/2.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/3.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/4.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/5.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="/6.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </aside>
        </main>
      </>
    );
  }
}
