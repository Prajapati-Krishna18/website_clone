import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nexa.module.css';

export default function Nexa() {
  useEffect(() => {
    document.title = 'Car Experience Clone - NEXA';
  }, []);

  return (
    <div className={styles.container || ''}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/nexa">NEXA</Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Cars</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Compare</a></li>
            <li><a href="#">Buy</a></li>
            <li><a href="#">Owners</a></li>
            <li><a href="#">NEXA World</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </nav>
        <div className={styles.brand}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0paXp3aS0OwRbrleuUaHnUgidu89zxs0uw&s"
            alt="SUZUKI LOGO"
            width="50px"
          />
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles['hero-content']}>
          <h2>eVITARA</h2>
          <p>Spark Your Imagination</p>
          <div className={styles['btn-container']}>
            <a href="#" className={styles['btn-primary']}>Explore Now</a>
            <a href="#" className={styles.btn}>Build Your Own</a>
          </div>
        </div>
      </section>

      <section className={styles['discover-section']}>
        <div className={styles['discover-text']}>
          <h1>Discover Your<br />Perfect Car</h1>
          <p>Take a short quiz and discover the ideal car tailored<br />for your lifestyle.</p>
          <Link to="/nexa/discover" className={styles.btn}>Help Me Select</Link>
        </div>
      </section>

      <section className={styles['experience-grid']}>
        <div className={`${styles.card} ${styles['card-test-drive']}`}>
          <div className={styles['card-content']}>
            <h3>Test Drive Your<br />Dream Car</h3>
            <p>Identify the dealer, availability and book your slot</p>
            <a href="#" className={styles['btn-card-white']}>Test Drive</a>
          </div>
        </div>

        <div className={styles['grid-right']}>
          <div className={`${styles.card} ${styles['card-accessories']}`}>
            <div className={styles['card-content']}>
              <h3>Genuine NEXA Accessories</h3>
              <p>Enhance your drive, explore car accessories</p>
              <a href="#" className={styles['btn-card-white-outline']}>Check Now</a>
            </div>
          </div>

          <div className={styles['right-bottom-container']}>
            <div className={`${styles.card} ${styles['card-services']}`}>
              <h4>Explore Car Services</h4>
              <p>Keep your car in best health and performance</p>
              <a href="#" className={styles['card-link']}>
                <i className="fa-solid fa-arrow-right-long"></i>
                <span>Book service appointment</span>
              </a>
            </div>

            <div className={`${styles.card} ${styles['card-book']}`}>
              <h4>Book Your Car</h4>
              <p>Your adventure awaits, check out the process</p>
              <a href="#" className={styles['card-link']}>
                <i className="fa-solid fa-arrow-right-long"></i>
                <span>Book a car</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['showroom-locator']}>
        <h1 className={styles['locator-title']}>Locate Your Nearest NEXA Showroom</h1>

        <div className={styles['locator-content']}>
          <div className={styles['locator-sidebar']}>
            <p className={styles['sidebar-text']}>We have identified 3 NEXA Showrooms near <br />Connaught Place</p>
            <a href="#" className={styles['explore-btn']}>
              Explore Nearby Showrooms
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          <div className={styles['showroom-list']}>
            <div className={styles['showroom-item']}>
              <img
                src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:d10a4daf-6ac8-42bf-a925-5f88c8b653e7/as/Dealer-locator-02.png?width=750&id=1&preferwebp=true"
                alt="Showroom Interior"
                className={styles['showroom-img']}
              />
              <div className={styles['showroom-details']}>
                <h2>T.R. Sawhney Automobiles Pvt. Ltd</h2>
                <p className={styles.distance}>3.95 Km Away</p>
                <p className={styles.address}>11/3 (A) KHAN HOUSE, ASAF ALI ROAD,NEAR DELITE CINEMA, DARYAGANJ,NEW DELHI<br />110002</p>
              </div>
              <a href="#" className={styles['navigate-link']}>
                Navigate
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>

            <div className={styles['showroom-item']}>
              <img
                src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:d10a4daf-6ac8-42bf-a925-5f88c8b653e7/as/Dealer-locator-02.png?width=750&id=1&preferwebp=true"
                alt="Showroom Interior"
                className={styles['showroom-img']}
              />
              <div className={styles['showroom-details']}>
                <h2>T.R. Sawhney Automobiles Pvt. Ltd</h2>
                <p className={styles.distance}>5.07 Km Away</p>
                <p className={styles.address}>A4,GREEN PARK EXTENSION, NEW DELHI<br />110093</p>
              </div>
              <a href="#" className={styles['navigate-link']}>
                Navigate
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>

            <div className={styles['showroom-item']}>
              <img
                src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:d10a4daf-6ac8-42bf-a925-5f88c8b653e7/as/Dealer-locator-02.png?width=750&id=1&preferwebp=true"
                alt="Showroom Interior"
                className={styles['showroom-img']}
              />
              <div className={styles['showroom-details']}>
                <h2>Singla Link Agency Pvt Ltd</h2>
                <p className={styles.distance}>6.67 Km Away</p>
                <p className={styles.address}>30-B, RING ROAD,LAJPAT NAGAR-4, NEW DELHI<br />110024</p>
              </div>
              <a href="#" className={styles['navigate-link']}>
                Navigate
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles['nexa-world-section']}>
        <div className={styles['nexa-world-content']}>
          <p className={styles['nexa-world-subtitle']}>Discover the</p>
          <h1 className={styles['nexa-world-title']}>NEXA World</h1>
          <p className={styles['nexa-world-description']}>
            Immerse yourself in inspiration. NEXA creates unparalleled experiences in travel, music,
            lifestyle and limitless possibilities that can ignite your imagination.
          </p>
          <a href="#" className={styles['nexa-world-btn']}>Explore Nexa World</a>
        </div>
        <div className={styles['nexa-world-image']}>
        </div>
      </section>

      <footer className={styles['site-footer']}>
        <div className={styles['footer-container']}>
          <div className={styles['footer-title']}>
            <h1>Created To Inspire<br />Next-gen Greatness</h1>
          </div>

          <div className={styles['footer-links']}>
            <div className={styles['link-column']}>
              <h3>NEXA Cars</h3>
            </div>
            <div className={styles['link-column']}>
              <h3>Technology</h3>
            </div>
            <div className={styles['link-column']}>
              <h3>Services & Parts</h3>
            </div>
            <div className={styles['link-column']}>
              <h3>More From Us</h3>
            </div>
            <div className={styles['link-column']}>
              <h3>Quick Links</h3>
            </div>
            <div className={styles['link-column']}>
              <h3>Contact Us</h3>
            </div>
          </div>

          <div className={styles['footer-toggle']}>
            <i className="fas fa-chevron-down"></i>
          </div>

          <div className={styles['footer-disclaimer']}>
            <p>
              The content and information available on this website is limited to the sales and services offered by Maruti
              Suzuki India Limited in the jurisdiction of India only.
              <br />*Prices/Schemes prevailing at the time of invoice/bill shall be applicable.
              <br />*Caution: Beware of Fake Promotions or Offers
              <br />*Creative visualization. Images are used for illustration purposes only. Accessories and features shown
              may not be the part of standard fitment. 500 km is in-house certified range for 8kWh variant which may vary
              with driving style, road conditions, and other factors. Full-charge range pending for certification under Rule
              124 of the Central Motor Vehicles Rules, 1989.
            </p>
            <p>
              Please do not believe or engage with any promotional messages (SMS) or Web-link which ask you to click on a
              link and fill in your details to win a Maruti Suzuki car. These SMS-based offers are fake, and Maruti Suzuki
              India Limited bears no liability or responsibility whatsoever for any such communication which is fraudulent
              or misleading in nature.
            </p>
          </div>

          <div className={styles['footer-bottom-bar']}>
            <span className={styles.copyright}>MARUTI SUZUKI INDIA LIMITED</span>
            <div className={styles['bottom-links']}>
              <a href="#">TERMS OF USE</a>
              <a href="#">DATA PROTECTION AND PRIVACY</a>
              <a href="#">CCP TERMS AND CONDITIONS</a>
              <a href="#">SITE MAP</a>
              <a href="#">CONTACT US</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
