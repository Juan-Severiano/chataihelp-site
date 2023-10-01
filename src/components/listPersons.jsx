import list from "../assets/list";

export default () => (
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
)