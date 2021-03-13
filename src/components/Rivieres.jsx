import {Tab, Tabs} from 'react-bootstrap';
import { useState } from 'react';
 
export default function Rivieres() {

  const [key, setKey] = useState('noire');

  return (
    <div className="section accent">
      <div className="container">
        <div className="section-title-group">
          <h2 className="section-heading centered">Les Rivières</h2>
          <div className="section-subheading centered">Voici les 3 rivières naviguables de la région.</div>
          <div data-duration-in="300" data-duration-out="100" className="tabs-wrapper tabs">
            <Tabs 
              activeKey={key} 
              onSelect={(k) => setKey(k)} 
              id="tab-menu" 
              className="tabs-links">
              <Tab eventKey="noire" title="Riviere Noire" >
                <div><img src="./images/map.png"  className="fullwidth-image"/>
                  <h3>La Rivière Noire</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br> 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <button className="button plus">En savoir plus</button>
                </div>
              </Tab>
              <Tab eventKey="orange" title="Riviere Orange">
                <div><img src="./images/stretch.jpg" className="fullwidth-image"/>
                  <h3>La Rivière Orange</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br> 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <button className="button plus">En savoir plus</button>
                </div>
              </Tab>
              <Tab eventKey="mauvre" title="Riviere Mauve">
                <div><img src="./images/map.png"  className="fullwidth-image"/>
                  <h3>La Rivière Mauve</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br> 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <button className="button plus">En savoir plus</button>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}