import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Bittorrent.module.css';

export default function Bittorrent() {
  const [currentDot, setCurrentDot] = useState(0);

  useEffect(() => {
    document.title = 'BitTorrent Web Clone';
  }, []);

  return (
    <div className={styles.containerPage || ''}>
      <header className={styles['main-header']}>
        <nav className={`${styles.container} ${styles['main-nav']}`}>
          <div className={styles.logo}>
            <Link to="/">BitTorrent</Link>
          </div>
          <ul className={styles['nav-links']}>
            <li><a href="#">PRODUCTS▶</a></li>
            <li><Link to="/bittorrent/help">HELP</Link></li>
            <li><a href="#">LANGUAGE</a></li>
            <li><a href="#">🌐</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.hero}>
        <div className={`${styles.container} ${styles['hero-content']}`}>
          <div className={styles['hero-text']}>
            <span className={styles['hero-subtitle']}>BitTorrent Web</span>
            <h1>Stream torrents while you download.</h1>
            <p>Quickly download and play torrent files. Ideal for new users.</p>
            <div className={styles['hero-buttons']}>
              <a href="#" className={`${styles.btn} ${styles['btn-primary']}`}>Free Download</a>
              <a href="#" className={`${styles.btn} ${styles['btn-secondary']}`}>Learn More</a>
            </div>
          </div>

          <div className={styles['hero-image']}>
            <img 
              src="https://www.bittorrent.com/static/carousel-hero-web-fd250f53422acaeffbcb56094e4aa1c5.png" 
              alt="BitTorrent Girl" 
              width="700px" 
            />
          </div>
        </div>

        <a className={`${styles['carousel-arrow']} ${styles.left}`}>&lt;</a>
        <a className={`${styles['carousel-arrow']} ${styles.right}`}>&gt;</a>
        <div className={styles['carousel-dots']}>
          <span 
            className={`${styles.dot} ${currentDot === 0 ? styles.active : ''}`}
            onClick={() => setCurrentDot(0)}
          ></span>
          <span 
            className={`${styles.dot} ${currentDot === 1 ? styles.active : ''}`}
            onClick={() => setCurrentDot(1)}
          ></span>
        </div>
      </main>

      <section className={styles['products-bar']}>
        <div className={`${styles.container} ${styles['products-content']}`}>
          <a href="#" className={styles['product-item']}>
            <span className={styles['product-item-icon']}>▶</span> <strong>BitTorrent Web</strong>
          </a>

          <a href="#" className={styles['product-item']}>
            <span className={styles['product-item-icon']}>💻</span> <strong>BitTorrent Classic</strong>
          </a>

          <a href="#" className={styles['product-item']}>
            <span className={styles['product-item-icon']}>µ</span> <strong>µTorrent Lite</strong>
            <span className={styles['new-badge']}>NEW</span>
          </a>

          <a href="#" className={styles['product-item']}>
            <span className={styles['product-item-icon']}>📱</span> <strong>BitTorrent Android</strong>
          </a>

          <a href="#" className={styles['all-products-link']}>All Products →</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles['footer-container']}>
          <div className={styles['footer-logo']}>
            <h2>BitTorrent</h2>
          </div>

          <div className={styles['footer-column']}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className={styles['footer-column']}>
            <h4>Downloads</h4>
            <ul>
              <li><a href="#">Windows</a></li>
              <li><a href="#">Mac</a></li>
              <li><a href="#">Android</a></li>
            </ul>
          </div>

          <div className={styles['footer-column']}>
            <h4>Platforms</h4>
            <ul>
              <li><a href="#">Windows</a></li>
              <li><a href="#">Mac</a></li>
              <li><a href="#">Android</a></li>
            </ul>
          </div>

          <div className={styles['footer-column']}>
            <h4>Support</h4>
            <ul>
              <li><Link to="/bittorrent/help">Help</Link></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Site Feedback</a></li>
              <li><a href="#">Tip of the Day</a></li>
            </ul>
          </div>

          <div className={styles['footer-social']}>
            <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" /></a>
            <a href="#"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" /></a>
          </div>
        </div>

        <hr />

        <div className={styles['footer-bottom']}>
          <p>Version 1.3.13 © 2025 BitTorrent Limited All Rights Reserved.</p>
          <div className={styles['footer-links']}>
            <a href="#">EULA</a> |
            <a href="#">Copyright</a> |
            <a href="#">Terms of Use</a> |
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
