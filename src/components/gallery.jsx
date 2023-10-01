import imgs from "../assets/imgs"

export default () => {
   return ( <section id="gallery" className=" grid-one section white-bg container">
        <div className="main-content grid-one-content">
            <h2 className="grid-main-heading">Confira nossa galeria de imagens</h2>
            <p className="grid-description">confira imagens de diversas fases das produções do nosso projeto</p>
            <div className="grid">
                {
                  imgs.map((item) => (
                    <div className="gallery-img">
                      <img src={`/gallery/${item}.jpeg`} alt="our gallery of images" />
                    </div>
                  ))
                }
            </div>
        </div>
    </section>
)}