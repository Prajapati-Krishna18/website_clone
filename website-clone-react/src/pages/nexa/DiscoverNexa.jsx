import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './DiscoverNexa.module.css';

export default function DiscoverNexa() {
  useEffect(() => {
    document.title = 'Help Me Select - NEXA';
  }, []);

  return (
    <div className={styles.containerPage || ''}>
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

      <section className={styles['help-select-section']}>
        <div className={styles['cover-image']}>
          <img 
            src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:bb25491b-2d46-4e76-9924-8bdc3ca3938d/as/Help-me-select_Desktop-modified.jpg?height=786&width=2000&id=1&preferwebp=true" 
            alt="Car under a sheet" 
          />
        </div>

        <div className={styles['select-content']}>
          <div className={styles['select-text-left']}>
            <h1>Help Me Select</h1>
          </div>
          <div className={styles['select-text-right']}>
            <p>Let us know about your lifestyle, priorities and drive preferences and we will help you shortlist a few options for your car.</p>
          </div>
        </div>

        <nav className={styles['select-steps']}>
          <div className={`${styles['step-item']} ${styles.active}`}>
            <span className={styles['step-number']}>1</span>
            <span className={styles['step-label']}>Lifestyle</span>
          </div>
          <div className={styles['step-line']}></div>
          <div className={styles['step-item']}>
            <span className={styles['step-number']}>2</span>
            <span className={styles['step-label']}>Price</span>
          </div>
          <div className={styles['step-line']}></div>
          <div className={styles['step-item']}>
            <span className={styles['step-number']}>3</span>
            <span className={styles['step-label']}>Body Type</span>
          </div>
          <div className={styles['step-line']}></div>
          <div className={styles['step-item']}>
            <span className={styles['step-number']}>4</span>
            <span className={styles['step-label']}>Features</span>
          </div>
          <div className={styles['step-line']}></div>
          <div className={styles['step-item']}>
            <span className={styles['step-number']}>5</span>
            <span className={styles['step-label']}>Engine Type</span>
          </div>
        </nav>
      </section>

      <div className={styles.container}>
        <div className={styles.left}>
          <img 
            src="https://www.nexaexperience.com/adobe/dynamicmedia/deliver/dm-aid--6bb91f98-f6a0-4d34-be19-f55c33fa79ae/Baleno_Help_Me_Select.jpg?preferwebp=true&quality=80" 
            alt="Ignis Car" 
          />
          <p className={styles.caption}>Sports Car Enthusiast</p>
        </div>

        <div className={styles.right}>
          <p className={styles.step}>1/5</p>
          <h2>Let us know the options that best reflect your lifestyle and preferences.</h2>

          <form className={styles.options}>
            <div className={styles.column}>
              <label><input type="checkbox" /> Urban Commutes</label>
              <label><input type="checkbox" /> Off-road Adventures</label>
              <label><input type="checkbox" /> Long Drives</label>
              <label><input type="checkbox" /> Business Professional</label>
            </div>
            <div className={styles.column}>
              <label><input type="checkbox" /> Sports Car Enthusiast</label>
              <label><input type="checkbox" /> Family Getaways</label>
              <label><input type="checkbox" /> Luxury Enthusiast</label>
              <label><input type="checkbox" /> Eco-Conscious</label>
            </div>
          </form>

          <p className={styles.note}>Select up to 3 options to shortlist the perfect cars.</p>

          <button className={styles['next-btn']}>Next</button>
        </div>
      </div>

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
