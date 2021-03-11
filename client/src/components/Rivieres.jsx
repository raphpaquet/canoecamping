import Tabs from 'react-bootstrap/Tabs'

export default function Rivieres() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-title-group">
          <h2 className="section-heading centered">Les Rivières</h2>
          <div className="section-subheading centered">Voici les 3 rivières naviguables de la région.</div>
          <div data-duration-in="300" data-duration-out="100" className="tabs-wrapper tabs">
            <div className="tab-menu">
              <a href="#noire" data-toggle="tab" className="button tab w--curent">
                <div>Riviere Noire</div>
              </a>
              <a href="#orange" data-toggle="tab" className="button tab">
                <div>Riviere Orange</div>
              </a>
              <a href="#mauve" data-toggle="tab" className="button tab">
                <div>Riviere Mauve</div>
              </a>
            </div>
            <div className="tab-content">
              <div className="tab-pane show w--tab-active" id="noire">
                {/* misses sizes for images  */}
                <div><img src="./images/map.png" style={{width:"70rem", height:"auto"}} className="fullwidth-image"/>
                  <h2>La Rivière Noire</h2>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br> 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              <div className="tab-pane" id="orange">
                {/* misses sizes for images  */}
                <div><img src="./images/map.png" style={{width:"70rem", height:"auto"}} className="fullwidth-image"/>
                  <h2>La Rivière Orange</h2>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br> 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                </div>
              </div>
              <div className="tab-pane" id="mauve">
                {/* misses sizes for images  */}
                <div><img src="./images/map.png" style={{width:"70rem", height:"auto"}} className="fullwidth-image"/>
                  <h2>La Rivière Mauve</h2>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br> 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}