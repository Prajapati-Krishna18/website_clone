import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HelpCenter.module.css';

export default function HelpCenter() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  useEffect(() => {
    document.title = 'Help Center - Amway';
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles['both-nav']}>
        <div className={styles.nav}>
          <div className={styles['nav1-left']}>
            <a href="#">Resources & Downloads</a>
            <a href="#">Content Library</a>
            <a href="#">Start a Business</a>
            <a href="#">About Amway</a>
          </div>

          <div className={styles['nav1-right']}>
            <div className={styles.location}>
              <span className="material-symbols-outlined">location_on</span>
              <a href="#">Select Delivery Location</a>
            </div>

            <div 
              className={styles['nav1-drop']}
              onMouseEnter={() => setIsHelpOpen(true)}
              onMouseLeave={() => setIsHelpOpen(false)}
            >
              <a href="#">Help Center ▼</a>
              {isHelpOpen && (
                <div className={styles['nav1-drop-content']} style={{ display: 'block' }}>
                  <a href="#">Contact Us</a>
                  <Link to="/amway/helpcenter">Write to Us</Link>
                </div>
              )}
            </div>
            <a href="#">Sign In</a>
          </div>
        </div>

        <div className={styles.nav2}>
          <div className={styles['nav2-left']}>
            <Link to="/amway">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYsBR2S3Fx5QqJtbkuuxoRg3sLRfHjkjInw&s"
                alt="Amway Logo" 
                className={styles['nav2-logo']} 
              />
            </Link>

            <div className={styles['nav2-links']}>
              <div 
                className={styles['nav-drop']}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <a href="#">PRODUCTS ▼</a>
                {isProductsOpen && (
                  <div className={`${styles['nav-drop-content']} ${styles['mega-menu']}`} style={{ display: 'block' }}>
                    <div className={styles['mega-menu-columns']}>
                      <div className={styles['mega-menu-column']}>
                        <a href="#" className={styles['menu-card']}>
                          <img 
                            src="https://www.amway.in/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblt7fba682eccffca60%2Fblt94f1fcccffc491bd%2F68066e06a09055d7477f04cb%2FBanner1.png&w=1440&q=75"
                            alt="Nutrition" 
                          />
                          <span>Nutrition</span>
                        </a>
                        <ul className={styles['mega-menu-list']}>
                          <li><a href="#">Protein</a></li>
                          <li><a href="#">Vitamin & Minerals</a></li>
                          <li><a href="#">Omega 3 & Calcium</a></li>
                          <li><a href="#">Health Supplements</a></li>
                          <li><a href="#">Nutrilite Traditional Herbs Range</a></li>
                          <li><a href="#">Weight Management</a></li>
                          <li><a href="#" className={styles['all-products-link']}>Nutrition Baskets</a></li>
                          <li><a href="#" className={styles['all-products-link']}>All Nutrition Products</a></li>
                        </ul>
                      </div>
                      <div className={styles['mega-menu-column']}>
                        <a href="#" className={styles['menu-card']}>
                          <img 
                            src="https://www.amway.in/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblt7fba682eccffca60%2Fblt47ec264d1eed5c86%2F684bbc2437c391362822bb28%2FBanner.png&w=1440&q=75"
                            alt="Beauty" 
                          />
                          <span>Beauty</span>
                        </a>
                        <ul className={styles['mega-menu-list']}>
                          <li><a href="#">Skin Care</a></li>
                          <li><a href="#">Makeup</a></li>
                          <li><a href="#">Skin Nutrition</a></li>
                          <li><a href="#" className={styles['all-products-link']}>Beauty Baskets</a></li>
                          <li><a href="#" className={styles['all-products-link']}>All Beauty Products</a></li>
                        </ul>
                      </div>
                      <div className={styles['mega-menu-column']}>
                        <a href="#" className={styles['menu-card']}>
                          <img 
                            src="https://www.amway.in/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblt7fba682eccffca60%2Fblteb3c7bd5f28b868c%2F68066fad6758e021395b730a%2FBanner3.png&w=1440&q=75"
                            alt="Home & Living" 
                          />
                          <span>Home & Living</span>
                        </a>
                        <ul className={styles['mega-menu-list']}>
                          <li><a href="#">Home Care</a></li>
                          <li><a href="#">Air Treatment</a></li>
                          <li><a href="#">Kitchen Essentials</a></li>
                          <li><a href="#" className={styles['all-products-link']}>Home & Living Baskets</a></li>
                          <li><a href="#" className={styles['all-products-link']}>All Home & Living Products</a></li>
                        </ul>
                      </div>
                      <div className={styles['mega-menu-column']}>
                        <a href="#" className={styles['menu-card']}>
                          <img 
                            src="https://www.amway.in/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblt7fba682eccffca60%2Fbltf4e8a128cc4d93e1%2F68066f839dd5cf657d9a3ce5%2FBanner4.png&w=1440&q=75"
                            alt="Personal Care" 
                          />
                          <span>Personal Care</span>
                        </a>
                        <ul className={styles['mega-menu-list']}>
                          <li><a href="#">Oral Care</a></li>
                          <li><a href="#">Hair Care</a></li>
                          <li><a href="#">Bath & Body Care</a></li>
                          <li><a href="#">Men's Grooming</a></li>
                          <li><a href="#">Hygiene</a></li>
                          <li><a href="#">Deodorants</a></li>
                          <li><a href="#" className={styles['all-products-link']}>Personal Care Baskets</a></li>
                          <li><a href="#" className={styles['all-products-link']}>All Personal Care Products</a></li>
                        </ul>
                      </div>
                      <div className={styles['mega-menu-column']}>
                        <a href="#" className={styles['menu-card']}>
                          <img 
                            src="https://www.amway.in/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fblt7fba682eccffca60%2Fblt2554b61655c7fd45%2F68066f5b0bdcf157645fa423%2FBanner5.png&w=1440&q=75"
                            alt="More Products" 
                          />
                          <span>More Products</span>
                        </a>
                        <ul className={styles['mega-menu-list']}>
                          <li><a href="#">Agricultural Products</a></li>
                          <li><a href="#">Oils</a></li>
                          <li><a href="#">Essentials</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div 
                className={styles['nav-drop']}
                onMouseEnter={() => setIsBrandsOpen(true)}
                onMouseLeave={() => setIsBrandsOpen(false)}
              >
                <a href="#">BRANDS ▼</a>
                {isBrandsOpen && (
                  <div className={`${styles['nav-drop-content']} ${styles['brands-menu']}`} style={{ display: 'flex' }}>
                    <div className={styles['brands-menu-column']}>
                      <a href="#">Nutrilite</a>
                      <a href="#">n* by Nutrilite</a>
                      <a href="#">Artistry</a>
                      <a href="#">Amway Queen</a>
                      <a href="#">Amway Atmosphere</a>
                      <a href="#">Dynamite</a>
                      <a href="#">Satinique</a>
                    </div>
                    <div className={styles['brands-menu-column']}>
                      <a href="#">Nutrilite Traditional Herbs</a>
                      <a href="#">XS</a>
                      <a href="#">Glister</a>
                      <a href="#">Amway Home</a>
                      <a href="#">Attitude</a>
                      <a href="#">G&H</a>
                      <a href="#">Persona</a>
                    </div>
                  </div>
                )}
              </div>
              <a href="#">PROMOTIONS</a>
            </div>
          </div>
          <div className={styles['nav2-right']}>
            <div className={styles['search-container']}>
              <input type="text" placeholder="Search Products" />
              <span className="material-symbols-outlined">search</span>
            </div>
            <span className={`material-symbols-outlined ${styles['cart-icon']}`}>shopping_cart</span>
          </div>
        </div>
      </div>
      
      <div className={styles['main-help2']} style={{ paddingTop: '115px' }}>
        <section className={styles['help-header']}>
          <h1>Help Centre</h1>
        </section>

        <section className={styles['help-container']}>
          <div className={styles.sidebar}>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li className={styles.active}><Link to="/amway/helpcenter">Write to Us</Link></li>
            </ul>
          </div>

          <div className={styles['help-content']}>
            <div className={styles['form-header']}>
              <h2>Send us an Email</h2>
              <p>Please complete all the mandatory steps below</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <h3>Contact Info</h3>
              <div className={styles['form-row']}>
                <div className={styles['form-group']}>
                  <label>Name</label>
                  <input type="text" placeholder="" />
                </div>
                <div className={styles['form-group']}>
                  <label>Mobile Number</label>
                  <input type="text" placeholder="+91" />
                </div>
              </div>

              <div className={styles['form-row']}>
                <div className={styles['form-group']}>
                  <label>Email Address</label>
                  <input type="email" placeholder="example@mail.com" />
                </div>
                <div className={styles['form-group']}>
                  <label>State</label>
                  <select defaultValue="State">
                    <option disabled>State</option>
                    <option>Gujarat</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Uttar Pradesh</option>
                  </select>
                </div>
              </div>

              <h3>Topic or Question Information</h3>
              <div className={styles['form-group']}>
                <label>Category</label>
                <select defaultValue="Please select a category">
                  <option disabled>Please select a category</option>
                  <option>Company Related</option>
                  <option>Order Related</option>
                  <option>Distributor Related</option>
                  <option>Profile Related</option>
                  <option>Product Related</option>
                </select>
              </div>

              <div className={styles['form-group']}>
                <label id="Comments" className={styles['comments-label']} style={{ marginTop: '15px' }}>Comments (Optional)</label>
                <textarea rows="5"></textarea>
              </div>
              <div className={styles['after-textarea']}>
                <input type="checkbox" required />
                <span style={{ marginLeft: '8px' }}>I would like to receive an aknowledgement of this on email</span>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
      
      <footer>
        <div className={styles['footer-container']}>
          <div className={styles['footer-left']}>
            <div className={styles['footer-col']}>
              <h4>Policies</h4>
              <ul>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Rules Of Conduct</a></li>
                <li><a href="#">Product Return Policy</a></li>
                <li><a href="#">Amway Authorized Sales Channels</a></li>
                <li><a href="#">Important Advisory</a></li>
              </ul>
            </div>

            <div className={styles['footer-col']}>
              <h4>Help Centre</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><Link to="/amway/helpcenter">Write to Us</Link></li>
              </ul>
            </div>

            <div className={styles['footer-col']}>
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Careers at Amway</a></li>
                <li><a href="#">Search Amway Business Owners</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">GST Registration Details</a></li>
                <li><a href="#">Shipping and Pickup Procedures</a></li>
              </ul>
            </div>

            <div className={styles['footer-col']}>
              <h4>Connect with Us</h4>
              <div className={styles['social-icons']}>
                <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" /></a>
                <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" /></a>
                <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" /></a>
                <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" /></a>
                <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" alt="Telegram" /></a>
              </div>
              <p>If you have any complaints or suggestions, you may <Link to="/amway/helpcenter">write to us</Link>.</p>
            </div>
          </div>

          <div className={styles['vertical-line']}></div>

          <div className={styles['footer-right']}>
            <p>
              <strong>Amway India Enterprises Pvt. Ltd.</strong><br />
              Regd. Office - Ground Floor, Elegance Tower, Plot No. 8,<br />
              Non Hierarchical Commercial Centre, Jasola, New Delhi-110025
            </p>

            <p>For Queries and Grievances, please contact Mr. Hukam Singh.</p>

            <p>
              Email ID - <a href="mailto:care@amway.com">care@amway.com</a><br />
              Tel: <a href="tel:080-35276600">080-35276600</a><br />
              CIN - U74120DL1995PTC071405
            </p>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          Copyright © 2024 Amway India Enterprises Pvt. Ltd. |
          <a href="#">Site Map</a>
        </div>
      </footer>
    </div>
  );
}
