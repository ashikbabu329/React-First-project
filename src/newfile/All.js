import React from "react";
const All = () => {
    return ( 
        <div>
  <div className="w3-main" style={{marginLeft: '340px', marginRight: '40px'}}>
    <div className="w3-container" style={{marginTop: '80px'}} id="showcase">
      <h1 className="w3-jumbo"><b>Interior Designer by ASHIK AHMED</b></h1>
      <h1 className="w3-xxxlarge w3-text-red"><b>Showcase.</b></h1>
      <hr style={{width: '50px', border: '5px solid red'}} className="w3-round" />
    </div>
    <div className="w3-row-padding">
      <div className="w3-half">
        <img src="./image/atrium.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Concrete meets bricks" />
        <img src="./image/bedroom.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Light, white and tight scandinavian design" />
        <img src="./image/diningroom.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="White walls with designer chairs" />
      </div>
      <div className="w3-half">
        <img src="./image/atrium.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Windows for the atrium" />
        <img src="./image/bedroom.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Bedroom and office in one space" />
        <img src="./image/livingroom2.jpg" style={{width: '100%'}} onclick="onClick(this)" alt="Scandinavian design" />
      </div>
    </div>
    <div id="modal01" className="w3-modal w3-black" style={{paddingTop: 0}} onclick="this.style.display='none'">
      <span className="w3-button w3-black w3-xxlarge w3-display-topright">×</span>
      <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
        <img id="img01" className="w3-image" />
        <p id="caption" />
      </div>
    </div>
    <div className="w3-container" id="services" style={{marginTop: '75px'}}>
      <h1 className="w3-xxxlarge w3-text-red"><b>Services.</b></h1>
      <hr style={{width: '50px', border: '5px solid red'}} className="w3-round" />
      <p>We are a interior design service that focus on what's best for your home and what's best for you!</p>
      <p>Some text about our services - what we do and what we offer. We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div className="w3-container" id="designers" style={{marginTop: '75px'}}>
      <h1 className="w3-xxxlarge w3-text-red"><b>Designers.</b></h1>
      <hr style={{width: '50px', border: '5px solid red'}} className="w3-round" />
      <p>The best team in the world.</p>
      <p>We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p><b>Our designers are thoughtfully chosen</b>:</p>
    </div>
    <div className="w3-row-padding w3-grayscale">
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="./image/team2.jpg" alt="John" style={{width: '100%'}} />
          <div className="w3-container">
            <h3>John Doe</h3>
            <p className="w3-opacity">CEO &amp; Founder</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          </div>
        </div>
      </div>
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="/.image/team1.jpg" alt="Jane" style={{width: '100%'}} />
          <div className="w3-container">
            <h3>Jane Doe</h3>
            <p className="w3-opacity">Designer</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          </div>
        </div>
      </div>
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="./image/team3.jpg" alt="Mike" style={{width: '100%'}} />
          <div className="w3-container">
            <h3>Mike Ross</h3>
            <p className="w3-opacity">Architect</p>
            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w3-container" id="packages" style={{marginTop: '75px'}}>
      <h1 className="w3-xxxlarge w3-text-red"><b>Packages.</b></h1>
      <hr style={{width: '50px', border: '5px solid red'}} className="w3-round" />
      <p>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
    </div>
    <div className="w3-row-padding">
      <div className="w3-half w3-margin-bottom">
        <ul className="w3-ul w3-light-grey w3-center">
          <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
          <li className="w3-padding-16">Floorplanning</li>
          <li className="w3-padding-16">10 hours support</li>
          <li className="w3-padding-16">Photography</li>
          <li className="w3-padding-16">20% furniture discount</li>
          <li className="w3-padding-16">Good deals</li>
          <li className="w3-padding-16">
            <h2>$ 199</h2>
            <span className="w3-opacity">per room</span>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
          </li>
        </ul>
      </div>
      <div className="w3-half">
        <ul className="w3-ul w3-light-grey w3-center">
          <li className="w3-red w3-xlarge w3-padding-32">Pro</li>
          <li className="w3-padding-16">Floorplanning</li>
          <li className="w3-padding-16">50 hours support</li>
          <li className="w3-padding-16">Photography</li>
          <li className="w3-padding-16">50% furniture discount</li>
          <li className="w3-padding-16">GREAT deals</li>
          <li className="w3-padding-16">
            <h2>$ 249</h2>
            <span className="w3-opacity">per room</span>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-red w3-padding-large w3-hover-black">Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
    <div className="w3-container" id="contact" style={{marginTop: '75px'}}>
      <h1 className="w3-xxxlarge w3-text-red"><b>Contact.</b></h1>
      <hr style={{width: '50px', border: '5px solid red'}} className="w3-round" />
      <p>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p>
      <form action="/action_page.php" target="_blank">
        <div className="w3-section">
          <label>Name</label>
          <input className="w3-input w3-border" type="text" name="Name" required />
        </div>
        <div className="w3-section">
          <label>Email</label>
          <input className="w3-input w3-border" type="text" name="Email" required />
        </div>
        <div className="w3-section">
          <label>Message</label>
          <input className="w3-input w3-border" type="text" name="Message" required />
        </div>
        <button type="submit" className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom">Send Message</button>
      </form>  
    </div>
  </div>
  <div className="w3-light-grey w3-container w3-padding-32" style={{marginTop: '75px', paddingRight: '58px'}}><p className="w3-right">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-opacity">Anirbanit student ASHIK</a></p></div>
</div>

     );
}
 
export default All ;