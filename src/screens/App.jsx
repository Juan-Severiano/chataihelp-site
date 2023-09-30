import { Component } from "react";
import '../styles/styles.css'

export default class App extends Component {
  render() {
    return  (
      <>
      <div className="fundo-video">
        <video className='video' autoPlay loop src="/videos/video-bg.mp4" alt="Mulher usando o computador"></video>
      </div>
      <main className="container home d-flex justify-content-between mt-5">
        <aside className="welcome d-flex align-items-center justify-content-center">
          <h1 className='title-home'>SEJAM BEM VINDOS</h1>
          <h2>CONHEÇA MAIS SOBRE O NOSSO PROJETO</h2>
        </aside>
        <aside id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/icon.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/1.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/2.png" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </aside>
      </main>
    </>
    )
  }
}
