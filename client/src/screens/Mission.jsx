import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import './Mission.scss'

export default function Mission() {
  return (
    <div id="mission">
      <Navigation />
        <h2 className="title">Notre Mission</h2>
      <div className="mission">
        <div className="img-section">
          {/* <img className="mission-img" src="/images/night-camping.jpg" /> */}
          <img className="mission-img" src="/images/feu.jpg" />
          {/* <img className="mission-img" src="/images/stretch.jpg" /> */}
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra nam libero justo laoreet. Tristique senectus et netus et malesuada fames ac turpis. Quis lectus nulla at volutpat diam ut venenatis. Lectus quam id leo in vitae turpis massa. Fusce id velit ut tortor pretium viverra suspendisse potenti. Mauris a diam maecenas sed enim ut sem viverra aliquet. Facilisi morbi tempus iaculis urna id volutpat lacus. Nulla porttitor massa id neque. Magna fermentum iaculis eu non. Sit amet luctus venenatis lectus magna fringilla urna. Quam pellentesque nec nam aliquam sem et tortor consequat id. Morbi quis commodo odio aenean sed adipiscing diam. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Auctor urna nunc id cursus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet.</p>
      </div>
      <Footer />
    </div>
  )
}