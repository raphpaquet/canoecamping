export default function Activity() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-title-group">
          <h2 className="section-heading centered">Les activités offertes</h2>
          <div className="section-subheading center">du plaisir pour tous, garantie !</div>
        </div>
        <div className="row">
          <div className="column col col-4">
            <div className="white-box"><img src="./images/icon-canoe.png" alt="logo" width="70" class="grid-image"/>
              <h3>Canot</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" className="button">Réserver</a>
            </div>
          </div>
          <div className="column col col-4">
            <div className="white-box"><img src="./images/icon-tube.png" alt="logo" width="70" class="grid-image"/>
              <h3>Tubes</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" className="button">Réserver</a>
            </div>
          </div>
          <div className="column col col-4">
            <div className="white-box"><img src="./images/icon-bus.png" alt="logo" width="70" class="grid-image"/>
              <h3>Navette</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="#" className="button">Réserver</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}