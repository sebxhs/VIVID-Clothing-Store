"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const InputDesign = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.div}>
        <Header />
        <HeroSection />
        <ProductCollections />
        <Footer />
      </main>
    </>
  );
};

const Header = () => {
  return (
    <header className={styles.div2}>
      <h1 className={styles.div3}>VTVID</h1>
      <nav className={styles.div4}>
        <a className={styles.div5}>Shop</a>
        <a className={styles.div6}>Lookbooks</a>
        <a className={styles.div7}>About Us</a>
        <a className={styles.div8}>Contact</a>
        <a className={styles.div9}>Help</a>
        <a className={styles.div10}>Account</a>
      </nav>
      <a className={styles.div11} aria-label="Menu">
        <i className={styles.i} aria-hidden="true">
          ☰
        </i>
      </a>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className={styles.div12}>
      <div className={styles.div13}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F5099c9be96b742b8a19200c312540852%2Fcf69b92f787b4395afcec959acd64ff3"
          alt="Fashion model showcasing high-end clothing"
          className={styles.img}
        />
        <div className={styles.div14} />
      </div>
      <div className={styles.div15}>
        <h2 className={styles.div16}>Experience high-end fashion redefined.</h2>
        <p className={styles.div17}>
          Our collections blend the elegance of luxury with the creativity of
          streetwear, crafted for those who stand out. Discover what makes us
          different.
        </p>
        <a className={styles.div18}>Explore Collection</a>
      </div>
      <div
        className={styles.div19}
        role="tablist"
        aria-label="Slideshow navigation"
      >
        <a
          className={styles.div20}
          aria-label="Slide 1"
          aria-selected="true"
          role="tab"
        />
        <a
          className={styles.div21}
          aria-label="Slide 2"
          aria-selected="false"
          role="tab"
        />
        <a
          className={styles.div22}
          aria-label="Slide 3"
          aria-selected="false"
          role="tab"
        />
        <a
          className={styles.div23}
          aria-label="Slide 4"
          aria-selected="false"
          role="tab"
        />
      </div>
    </section>
  );
};

const ProductCollections = () => {
  return (
    <section className={styles.div24}>
      <h2 className={styles.div25}>TOP COLLECTIONS</h2>
      <div className={styles.div26}>
        <ProductCard imageUrl="https://cdn.builder.io/api/v1/image/assets%2F5099c9be96b742b8a19200c312540852%2Fea9e9027a6df4e61a58dbf3f8af5fc2a" />
        <ProductCard imageUrl="https://cdn.builder.io/api/v1/image/assets%2F5099c9be96b742b8a19200c312540852%2F397e1206595c495f9ef0470a96230ab6" />
        <ProductCard imageUrl="https://cdn.builder.io/api/v1/image/assets%2F5099c9be96b742b8a19200c312540852%2Ffb3be4db4be047aba93d53c504b74a38" />
        <ProductCard imageUrl="https://cdn.builder.io/api/v1/image/assets%2F5099c9be96b742b8a19200c312540852%2Ff29f9625cedc48309dd4a8ae3794d962" />
        <ProductCard imageUrl="https://cdn.builder.io/api/v1/image/assets%2F5099c9be96b742b8a19200c312540852%2Fbb7709d7efc74b5fa15e73deb7160f15" />
      </div>
      <div className={styles.div37}>
        <button className={styles.div38}>Explore Collection</button>
      </div>
    </section>
  );
};

const ProductCard = ({ imageUrl }) => {
  return (
    <article className={styles.div27}>
      <img
        src={imageUrl}
        alt="Fashion collection item"
        className={styles.wFullhAuto}
      />
      <a className={styles.div28} aria-label="Add to favorites">
        <i className={styles.i2} aria-hidden="true">
          ♡
        </i>
      </a>
    </article>
  );
};

const Footer = () => {
  return (
    <footer className={styles.div39}>
      <div className={styles.div40}>
        <FooterColumn
          title="Quick Links"
          links={["Privacy Policy", "Terms of Use", "Contact Us"]}
        />
        <FooterColumn
          title="Quick Links"
          links={["Privacy Policy", "Terms of Use", "Contact Us"]}
        />
        <div className={styles.div51}>
          <h3 className={styles.div52}>Social Media</h3>
          <div className={styles.div53}>
            <a className={styles.i7} aria-label="Facebook">
              <i aria-hidden="true">f</i>
            </a>
            <a className={styles.i8} aria-label="Instagram">
              <i aria-hidden="true">📷</i>
            </a>
            <a className={styles.i9} aria-label="LinkedIn">
              <i aria-hidden="true">in</i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div className={styles.div41}>
      <h3 className={styles.div42}>{title}</h3>
      {links.map((link, index) => (
        <a key={index} className={styles.div43}>
          {link}
        </a>
      ))}
    </div>
  );
};

export default InputDesign;
