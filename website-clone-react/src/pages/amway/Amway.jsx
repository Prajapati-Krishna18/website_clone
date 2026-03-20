import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Amway.module.css';

export default function Amway() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  useEffect(() => {
    document.title = 'Amway Clone';
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
            <a href="https://www.amway.in/" target="_blank" rel="noreferrer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYsBR2S3Fx5QqJtbkuuxoRg3sLRfHjkjInw&s"
                alt="Amway Logo" 
                className={styles['nav2-logo']}
              />
            </a>

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
      <div className={styles['after-nav']}>
        <div className={styles['after-nav-img']}>
          <img
            src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt5498e836fd159fc0/68d0f2bf7b2e153eab810ce9/Banner_Better_Choices_Smarter_Prices-02.jpg"
            alt="layout" width="570px"
          />
        </div>
        <div className={styles['after-nav-text']}>
          <h1>Making Wellness <br />affordable with<br />revised GST rates</h1>
          <p>Amway India is excited to pass on GST benefits to you. New <br />rates will be efficitives from 22 sep-25.</p>
          <div className={styles['know-more']}><a href="#">Know more</a></div>
        </div>
      </div>
      <section className={styles['products-section']}>

        <h2>Discover Our Products</h2>
        <div className={styles['products-container']}>

          <div className={styles['product-card']}>
            <div className={styles['product-image']} style={{ background: 'radial-gradient(circle, #d8f5d2, #c3ecc3)' }}>
              <img
                src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/bltea4f0fc5649a1443/6888b2eb0b94d86c3be9705b/Nutrition_375x280.png?width=200&auto=webp"
                alt="Nutrition"
              />
            </div>
            <h3>NUTRITION →</h3>
          </div>

          <div className={styles['product-card']}>
            <div className={styles['product-image']} style={{ background: 'radial-gradient(circle, #ffe0e0, #f5c8c8)' }}>
              <img
                src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blte3a4b291f1cbc934/6888b2d6e4f57017e9bc35d5/Beauty_375x280.png?width=200&auto=webp"
                alt="Beauty"
              />
            </div>
            <h3>BEAUTY →</h3>
          </div>

          <div className={styles['product-card']}>
            <div className={styles['product-image']} style={{ background: 'radial-gradient(circle, #ffeac8, #f7d9a9)' }}>
              <img
                src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt42c24a1e792825ef/6204e3c95c8d1c13fce370ce/Home_and_living.png?width=200&auto=webp"
                alt="Home & Living"
              />
            </div>
            <h3>HOME & LIVING →</h3>
          </div>

          <div className={styles['product-card']}>
            <div className={styles['product-image']} style={{ background: 'radial-gradient(circle, #d8ebff, #b8d9ff)' }}>
              <img
                src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blte408d6ea9f590b9c/6527962f589cd56a44b27ed7/personal_care1.jpg?width=200&auto=webp"
                alt="Personal Care"
              />
            </div>
            <h3>PERSONAL CARE →</h3>
          </div>

        </div>
      </section>

      <section className={styles['top-selling']}>
        <h2>Top selling</h2>

        <div className={styles['product-list']}>

          <div className={styles['product-card']}>
            <img
              src="https://www.amway.in/_next/image?url=https%3A%2F%2Fmedia.amway.in%2Fsys-master%2Fimages%2Fh4b%2Fh45%2F9126104236062%2FEIA.w560.h560.308496ID_1.png&w=1440&q=75"
              alt="Anti Dandruff Shampoo"
            />
            <span className={styles.category}>🧴 Non-Food</span>
            <h4>SATINIQUE™</h4>
            <p className={styles.name}>Anti Dandruff Shampoo Sachets</p>
            <p className={styles.size}>30 N</p>
            <p className={styles.price}>MRP ₹ 6</p>
            <p className={styles.tax}>(incl. of all taxes)</p>
            <button className={styles['cart-btn']}>ADD TO CART</button>
          </div>

          <div className={styles['product-card']}>
            <img
              src="https://www.amway.in/_next/image?url=https%3A%2F%2Fmedia.amway.in%2Fsys-master%2Fimages%2Fhdc%2Fhe3%2F9126101811230%2FEIA.w560.h560.308494ID_1.png&w=1440&q=75"
              alt="Hairfall Control Shampoo"
            />
            <span className={styles.category}>🧴 Non-Food</span>
            <h4>SATINIQUE™</h4>
            <p className={styles.name}>Hairfall Control Shampoo Sachets</p>
            <p className={styles.size}>4 ml</p>
            <p className={styles.price}>MRP ₹ 6</p>
            <p className={styles.tax}>(incl. of all taxes)</p>
            <button className={styles['cart-btn']}>ADD TO CART</button>
          </div>

          <div className={styles['product-card']}>
            <img
              src="https://www.amway.in/_next/image?url=https%3A%2F%2Fmedia.amway.in%2Fsys-master%2Fimages%2Fha6%2Fh1d%2F9169718607902%2FEIA.w560.h560.308497ID_1.png&w=1440&q=75"
              alt="2-in-1 Shampoo & Conditioner"
            />
            <span className={styles.category}>🧴 Non-Food</span>
            <h4>SATINIQUE™</h4>
            <p className={styles.name}>2-in-1 Shampoo & Conditioner Sachets</p>
            <p className={styles.size}>30 N</p>
            <p className={styles.price}>MRP ₹ 6</p>
            <p className={styles.tax}>(incl. of all taxes)</p>
            <button className={styles['cart-btn']}>ADD TO CART</button>
          </div>

        </div>
      </section>

      <section className={styles['our-story']}>
        <h2>Our Story</h2>

        <div className={styles['story-grid']}>
          <div className={styles['story-item']}>
            <div className={styles.icon} style={{ backgroundColor: '#ffece3' }}>
              <img
                src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/bltde9aa75469eb52ba/611dee8c25695f14a34d8ded/our-milestones-India.png"
                alt="India Map"
              />
            </div>
            <h3>20+ Years</h3>
            <p>Empowering people to live better, healthier lives with our flagship brands Nutrilite & Artistry</p>
          </div>

          <div className={styles['story-item']}>
            <div className={styles.icon} style={{ backgroundColor: '#d8f2eb' }}>
              <img
                src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blte41238acc2650d97/624d81b34edd947eefb3cb95/Amway-Icons-India_1.png"
                alt="Handshake"
              />
            </div>
            <h3>Unleashing Entrepreneurship</h3>
            <p>Proud to have more than 5.50 lakh passionate distributors including &gt; 60% women</p>
          </div>

          <div className={styles['story-item']}>
            <div className={styles.icon} style={{ backgroundColor: '#e9f8de' }}>
              <img
                src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt2a74e7500a1c24be/624d81b37d552701c63667c1/Amway-Icons-Bar-Graph_1.png"
                alt="Factory"
              />
            </div>
            <h3>Making In India</h3>
            <p>Manufacturing in a state-of-the-art, LEED Gold Certified plant in Tamil Nadu</p>
          </div>

          <div className={styles['story-item']}>
            <div className={styles.icon} style={{ backgroundColor: '#fff8dc' }}>
              <img
                src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/bltbf064ddcde0fdaed/611deebb1da1da13cddc0921/our-milestones-eyes-closed-smile.png"
                alt="Smile"
              />
            </div>
            <h3>100% Satisfaction</h3>
            <p>We offer our customers with money-back guarantee & seamless product experience</p>
          </div>
        </div>

        <div className={styles['catalogue-box']}>
          <img
            src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt891ec03bab0f1681/643f8e44884b8852e46b7d1b/flipbook_desktop_new.png"
            alt="Digital Catalogue"
          />
          <div className={styles['catalogue-content']}>
            <p>📘 <strong>View Digital Product Catalogue</strong></p>
            <a href="#" className={styles['open-link']}>↗</a>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>What People Have To Say About Us</h2>
        <a href="#" className={styles['know-more']}>Know More</a>

        <div className={styles['testimonial-container']}>
          <div className={styles.testimonial}>
            <img
              src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt81a9afe9528830cb/6253c9e9856d7a0143817489/Rashmita_Mohanty_-_Size_-_640_X_400_PX.jpg"
              alt="Client 1"
            />
            <div className={styles['testimonial-text']}>
              <span className={styles.quote}>“</span>
              <p>Amway helped me realize my true potential for success</p>
              <h4>Rashmita Mohanty</h4>
              <span>Amway Business Owner</span>
            </div>
          </div>

          <div className={styles.testimonial}>
            <img
              src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt107bae6029352ae2/6253c659180ea87eed67757b/Mr._Samarjit_&_Mrs._Minati_Panda_-_Size_-_640_X_400_PX.jpg"
              alt="Client 2"
            />
            <div className={styles['testimonial-text']}>
              <span className={styles.quote}>“</span>
              <p>Amway has given us the opportunity to create healthy living</p>
              <h4>Samarjit Chowdhury &amp; Minati Panda</h4>
              <span>Amway Business Owner</span>
            </div>
          </div>
        </div>

        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
        </div>
      </section>

      <section className={styles.hero}>
        <img
          src="https://images.contentstack.io/v3/assets/blt7fba682eccffca60/blt80e5599946859919/6253b4a45b71147a38d9f4f4/AmwayBusiness_Desktop.jpg?auto=webp&width=1920"
          alt="Amway Banner"
        />
        <div className={styles['hero-content']}>
          <h1>Power. Passion. Purpose.</h1>
          <p>Unleash your entrepreneurial drive with Amway</p>
          <button>START YOUR BUSINESS</button>
        </div>
      </section>

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
