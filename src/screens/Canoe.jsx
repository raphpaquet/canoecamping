import './Canoe.scss';
import Navigation from '../components/Navigation';
import ArrowDown from '../components/ArrowDown';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import ScrollableTabsButtonAuto from '../components/ScrollableTabs';



export default function Canoe() {

 const activityRef = useRef();

 const handleClick = () => {
  activityRef.current.scrollIntoView({ behavior: 'smooth' })
 }

  return (
      <div id="activity">
        <Helmet>
          <meta name="description" content="page explicative pour aventure de canot et canot camping Outaouais"></meta>
          <title>ARS canot</title>
        </Helmet>
        <div className="activity">
        <section className="nav-image-canoe">
          
            <div className="img-text">
              <h3 className="activity-title" onClick={handleClick}>Canot & Canot/Camping<ArrowDown onClick={handleClick}/></h3>
            </div>
        </section>
        <section className="activity-info" ref={activityRef}>
          <ScrollableTabsButtonAuto />
          
          </section>
        </div>
      </div>
  )
}