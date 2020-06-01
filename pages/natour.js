import React, { Fragment } from "react";
import Head from "next/head";

export default function natour() {
  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/ico" href="/static/natourfavicon.ico" />
      </Head>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>About Natous
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>Your benfits
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <header className="header">
        <div className="header__logo-box">
          <img
            src="/static/images/logo-white.png"
            alt="Logo"
            className="header__logo"
          />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>

          <a href="#section-tours" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exciting tours for adventurous people
            </h2>
          </div>

          <div className="rownat">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                You're going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>

              <h3 className="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores nulla deserunt voluptatum nam.
              </p>

              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  srcSet="/static/images/nat-1.jpg 300w, /static/images/nat-1-large.jpg 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 1"
                  className="composition__photo composition__photo--p1"
                  src="/static/images/nat-1-large.jpg"
                />

                <img
                  srcSet="/static/images/nat-2.jpg 300w, /static/images/nat-2-large.jpg 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 2"
                  className="composition__photo composition__photo--p2"
                  src="/static/images/nat-2-large.jpg"
                />

                <img
                  srcSet="/static/images/nat-3.jpg 300w, /static/images/nat-3-large.jpg 1000w"
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt="Photo 3"
                  className="composition__photo composition__photo--p3"
                  src="/static/images/nat-3-large.jpg"
                />

                {/* <img src="/static/images/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1">
                            <img src="/static/images/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2">
                            <img src="/static/images/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3"> */}
              </div>
            </div>
          </div>
        </section>
        <section className="section-features">
          <div className="rownat">
            <div className="col-1-of-4">
              <div className="feature-box">
                <svg className="feature-box__icon ">
                  <use xlinkHref="/static/images/sprite.svg#icon-global"></use>
                </svg>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Explore the world
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <svg className="feature-box__icon ">
                  <use xlinkHref="/static/images/sprite.svg#icon-map-pin"></use>
                </svg>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Meet nature
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <svg className="feature-box__icon">
                  <use xlinkHref="/static/images/sprite.svg#icon-presentation"></use>
                </svg>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Find your way
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <svg className="feature-box__icon">
                  <use xlinkHref="/static/images/sprite.svg#icon-heart"></use>
                </svg>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Live a healthier life
                </h3>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Most popular tours</h2>
          </div>

          <div className="rownat">
            <div className="col-1-of-3">
              <div className="natcard">
                <div className="natcard__side natcard__side--front">
                  <div className="natcard__picture natcard__picture--1">
                    &nbsp;
                  </div>
                  <h4 className="natcard__heading">
                    <span className="natcard__heading-span natcard__heading-span--1">
                      The Sea Explorer
                    </span>
                  </h4>
                  <div className="natcard__details">
                    <ul>
                      <li>3 day tours</li>
                      <li>Up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficulty: easy</li>
                    </ul>
                  </div>
                </div>
                <div className="natcard__side natcard__side--back natcard__side--back-1">
                  <div className="natcard__cta">
                    <div className="natcard__price-box">
                      <p className="natcard__price-only">Only</p>
                      <p className="natcard__price-value">$297</p>
                    </div>
                    <a href="#" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="natcard">
                <div className="natcard__side natcard__side--front">
                  <div className="natcard__picture natcard__picture--2">
                    &nbsp;
                  </div>
                  <h4 className="natcard__heading">
                    <span className="natcard__heading-span natcard__heading-span--2">
                      The Forest Hiker
                    </span>
                  </h4>
                  <div className="natcard__details">
                    <ul>
                      <li>7 day tours</li>
                      <li>Up to 40 people</li>
                      <li>6 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: medium</li>
                    </ul>
                  </div>
                </div>
                <div className="natcard__side natcard__side--back natcard__side--back-2">
                  <div className="natcard__cta">
                    <div className="natcard__price-box">
                      <p className="natcard__price-only">Only</p>
                      <p className="natcard__price-value">$497</p>
                    </div>
                    <a href="#" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="natcard">
                <div className="natcard__side natcard__side--front">
                  <div className="natcard__picture natcard__picture--3">
                    &nbsp;
                  </div>
                  <h4 className="natcard__heading">
                    <span className="natcard__heading-span natcard__heading-span--3">
                      The Snow Adventurer
                    </span>
                  </h4>
                  <div className="natcard__details">
                    <ul>
                      <li>5 day tours</li>
                      <li>Up to 15 people</li>
                      <li>3 tour guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Difficulty: hard</li>
                    </ul>
                  </div>
                </div>
                <div className="natcard__side natcard__side--back natcard__side--back-3">
                  <div className="natcard__cta">
                    <div className="natcard__price-box">
                      <p className="natcard__price-only">Only</p>
                      <p className="natcard__price-value">$897</p>
                    </div>
                    <a href="#" className="btn btn--white">
                      Book now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">
              Discover all tours
            </a>
          </div>
        </section>
        <section className="section-stories">
          <div className="bg-video-nat">
            <video
              className="bg-video-nat__content"
              // style={{ opacity: 0.31 }}
              autoPlay
              muted
              loop
            >
              <source src="/static/vid/video.mp4" type="video/mp4" />
              <source src="/static/vid/video.webm" type="video/webm" />
              Your brownatser is not supported!
            </video>
          </div>

          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>

          <div className="rownat">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="/static/images/nat-8.jpg"
                  alt="Person on a tour"
                  className="story__img"
                />
                <figcaption className="story__caption">Mary Smith</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </div>
          </div>

          <div className="rownat">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="/static/images/nat-9.jpg"
                  alt="Person on a tour"
                  className="story__img"
                />
                <figcaption className="story__caption">Jack Wilson</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  WOW! My life is completely different now
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                  Aperiam, ipsum sapiente aspernatur libero repellat quis
                  consequatur ducimus quam nisi exercitationem omnis earum qui.
                </p>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn-text">
              Read all stories &rarr;
            </a>
          </div>
        </section>
        <section className="section-book">
          <div className="rownat">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start booking now</h2>
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full name"
                      id="name"
                      required
                    />
                    <label htmlFor="name" className="form__label">
                      Full name
                    </label>
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email address"
                      id="email"
                      required
                    />
                    <label htmlFor="email" className="form__label">
                      Email address
                    </label>
                  </div>

                  <div className="form__group u-margin-bottom-medium">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Small tour group
                      </label>
                    </div>

                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Large tour group
                      </label>
                    </div>
                  </div>

                  <div className="form__group">
                    <button className="btn btn--green">Next step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer-nat">
        <div className="footer-nat__logo-box">
          <picture className="footer-nat__logo">
            <source
              srcSet="/static/images/logo-green-small-1x.png 1x, /static/images/logo-green-small-2x.png 2x"
              media="(max-width: 37.5em)"
            />
            <img
              srcSet="/static/images/logo-green-1x.png 1x, /static/images/logo-green-2x.png 2x"
              alt="Full logo"
              src="/static/images/logo-green-2x.png"
            />
          </picture>
        </div>
        <div className="rownat">
          <div className="col-1-of-2">
            <div className="footer-nat__navigation">
              <ul className="footer-nat__list">
                <li className="footer-nat__item">
                  <a href="#" className="footer-nat__link">
                    Company
                  </a>
                </li>
                <li className="footer-nat__item">
                  <a href="#" className="footer-nat__link">
                    Contact us
                  </a>
                </li>
                <li className="footer-nat__item">
                  <a href="#" className="footer-nat__link">
                    Carrers
                  </a>
                </li>
                <li className="footer-nat__item">
                  <a href="#" className="footer-nat__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer-nat__item">
                  <a href="#" className="footer-nat__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer-nat__copyright">
              This page was created by{" "}
              <a href="#" className="footer-nat__link">
                Aashay Phirke{" "}
              </a>
              with reference to Advanced CSS SASS course of Jonas Schmedtmann.
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
