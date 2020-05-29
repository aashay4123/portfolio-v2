import React, { Fragment } from "react";
import Head from "next/head";

export default function hotel() {
  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/ico" href="/static/Hotelfavicon.ico" />
      </Head>

      <div className="hotelcontainer">
        <div className="sidebar">
          <button className="navi-btnh"></button>
        </div>
        <header className="headerhotel">
          <img
            src="/static/images/logohotel.png"
            alt="Nexter logo"
            className="headerhotel__logo"
          />
          <h3 className="heading-3">Your own home:</h3>
          <h1 className="heading-1">The ultimate personal freedom</h1>
          <button className="btnh headerhotel__btnh">
            View our properties
          </button>
          <div className="headerhotel__seenon-text">Seen on</div>
          <div className="headerhotel__seenon-logos">
            <img src="/static/images/logo-bbc.png" alt="Seen on logo 1" />
            <img src="/static/images/logo-forbes.png" alt="Seen on logo 2" />
            <img
              src="/static/images/logo-techcrunch.png"
              alt="Seen on logo 3"
            />
            <img src="/static/images/logo-bi.png" alt="Seen on logo 4" />
          </div>
        </header>
        <div className="realtors">
          <h3 className="heading-3">Top 3 Realtors</h3>
          <div className="realtors__list">
            <img
              src="/static/images/realtor-1.jpeg"
              alt="Realtor 1"
              className="realtors__img"
            />
            <div className="realtors__details">
              <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
              <p className="realtors__sold">245 houses sold</p>
            </div>

            <img
              src="/static/images/realtor-2.jpeg"
              alt="Realtor 2"
              className="realtors__img"
            />
            <div className="realtors__details">
              <h4 className="heading-4 heading-4--light">Kim Brown</h4>
              <p className="realtors__sold">212 houses sold</p>
            </div>

            <img
              src="/static/images/realtor-3.jpeg"
              alt="Realtor 3"
              className="realtors__img"
            />
            <div className="realtors__details">
              <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
              <p className="realtors__sold">198 houses sold</p>
            </div>
          </div>
        </div>
        <section className="features">
          <div className="feature">
            <svg className="feature__item">
              <use xlinkHref="/static/images/sprite.svg#icon-global"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              Worlds best luxury homes
            </h4>
            <p className="feature__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__item">
              <use xlinkHref="/static/images/sprite.svg#icon-trophy"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              only the best properties
            </h4>
            <p className="feature__text">
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
              rerum sed a eligendi aut quia.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__item">
              <use xlinkHref="/static/images/sprite.svg#icon-map-pin"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              All homes in top location
            </h4>
            <p className="feature__text">
              Tenetur distinctio necessitatibus pariatur voluptatibus quidem
              consequatur harum.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__item">
              <use xlinkHref="/static/images/sprite.svg#icon-key"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">New home in one week</h4>
            <p className="feature__text">
              Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__item">
              <use xlinkHref="/static/images/sprite.svg#icon-presentation"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">top 1% realtors</h4>
            <p className="feature__text">
              Quidem consequatur harum, voluptatum mollitia quae. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </div>
          <div className="feature">
            <svg className="feature__item">
              <use xlinkHref="/static/images/sprite.svg#icon-lock"></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">
              secure payments on Nexter
            </h4>
            <p className="feature__text">
              Pariatur voluptatibus quidem consequatur harum, voluptatum
              mollitia quae.
            </p>
          </div>
        </section>
        <div className="storyhotel__pictures">
          <img
            src="/static/images/story-1.jpeg"
            alt="couple with new house"
            className="storyhotel__img--1"
          />
          <img
            src="/static/images/story-2.jpeg"
            alt="New house"
            className="storyhotel__img--2"
          />
        </div>
        <div className="storyhotel__content">
          <h3 className="heading-3 mb-sm">happy customers</h3>
          <h2 className="heading-2 heading-2--dark mb-lg">
            &ldquo;The best decision of our lives&rdquo;
          </h2>
          <p className="storyhotel__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
            harum volupta!
          </p>
          <button className="btnh">Find your own home</button>
        </div>
        <section className="homes">
          <div className="home">
            <img
              src="/static/images/house-1.jpeg"
              alt="House 1"
              className="home__img"
            />
            <svg className="home__like">
              <use xlinkHref="/static/images/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">Beautiful Familiy House</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>USA</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>5 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-expand"></use>
              </svg>
              <p>
                325 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-key"></use>
              </svg>
              <p>$1,200,000</p>
            </div>
            <button className="btnh home__btnh">Contact realtor</button>
          </div>
          <div className="home">
            <img
              src="/static/images/house-2.jpeg"
              alt="House 2"
              className="home__img"
            />
            <svg className="home__like">
              <use xlinkHref="/static/images/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">Modern Glass Villa</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>Canada</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>6 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-expand"></use>
              </svg>
              <p>
                450 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-key"></use>
              </svg>
              <p>$2,750,000</p>
            </div>
            <button className="btnh home__btnh">Contact realtor</button>
          </div>
          <div className="home">
            <img
              src="/static/images/house-3.jpeg"
              alt="House 3"
              className="home__img"
            />
            <svg className="home__like">
              <use xlinkHref="/static/images/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">Cozy Country House</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>UK</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>4 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-expand"></use>
              </svg>
              <p>
                250 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-key"></use>
              </svg>
              <p>$850,000</p>
            </div>
            <button className="btnh home__btnh">Contact realtor</button>
          </div>
          <div className="home">
            <img
              src="/static/images/house-4.jpeg"
              alt="House 4"
              className="home__img"
            />
            <svg className="home__like">
              <use xlinkHref="/static/images/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">Large Rustical Villa</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>Portugal</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>6 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-expand"></use>
              </svg>
              <p>
                480 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-key"></use>
              </svg>
              <p>$1,950,000</p>
            </div>
            <button className="btnh home__btnh">Contact realtor</button>
          </div>
          <div className="home">
            <img
              src="/static/images/house-5.jpeg"
              alt="House 5"
              className="home__img"
            />
            <svg className="home__like">
              <use xlinkHref="/static/images/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">Majestic Palace House</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>Germany</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>18 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-expand"></use>
              </svg>
              <p>
                4230 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-key"></use>
              </svg>
              <p>$9,500,000</p>
            </div>
            <button className="btnh home__btnh">Contact realtor</button>
          </div>
          <div className="home">
            <img
              src="/static/images/house-6.jpeg"
              alt="House 6"
              className="home__img"
            />
            <svg className="home__like">
              <use xlinkHref="/static/images/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">Modern Familiy Apartment</h5>
            <div className="home__location">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>Italy</p>
            </div>
            <div className="home__rooms">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>3 rooms</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-expand"></use>
              </svg>
              <p>
                180 m<sup>2</sup>
              </p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="/static/images/sprite.svg#icon-key"></use>
              </svg>
              <p>$600,000</p>
            </div>
            <button className="btnh home__btnh">Contact realtor</button>
          </div>
        </section>
        <section className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src="/static/images/gal-1.jpeg"
              alt="Gallery image 1"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="/static/images/gal-2.jpeg"
              alt="Gallery image 2"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src="/static/images/gal-3.jpeg"
              alt="Gallery image 3"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src="/static/images/gal-4.jpeg"
              alt="Gallery image 4"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src="/static/images/gal-5.jpeg"
              alt="Gallery image 5"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src="/static/images/gal-6.jpeg"
              alt="Gallery image 6"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--7">
            <img
              src="/static/images/gal-7.jpeg"
              alt="Gallery image 7"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--8">
            <img
              src="/static/images/gal-8.jpeg"
              alt="Gallery image 8"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--9">
            <img
              src="/static/images/gal-9.jpeg"
              alt="Gallery image 9"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--10">
            <img
              src="/static/images/gal-10.jpeg"
              alt="Gallery image 10"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--11">
            <img
              src="/static/images/gal-11.jpeg"
              alt="Gallery image 11"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--12">
            <img
              src="/static/images/gal-12.jpeg"
              alt="Gallery image 12"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--13">
            <img
              src="/static/images/gal-13.jpeg"
              alt="Gallery image 13"
              className="gallery__img"
            />
          </figure>
          <figure className="gallery__item gallery__item--14">
            <img
              src="/static/images/gal-14.jpeg"
              alt="Gallery image 14"
              className="gallery__img"
            />
          </figure>
        </section>
        <footer className="footerhot">
          <ul className="navi">
            <li className="navi__item">
              <a href="#" className="navi__link">
                find your dream home
              </a>
            </li>
            <li className="navi__item">
              <a href="#" className="navi__link">
                Request Proposal
              </a>
            </li>
            <li className="navi__item">
              <a href="#" className="navi__link">
                Download home planner
              </a>
            </li>
            <li className="navi__item">
              <a href="#" className="navi__link">
                contact us
              </a>
            </li>
            <li className="navi__item">
              <a href="#" className="navi__link">
                submit your property
              </a>
            </li>
            <li className="navi__item">
              <a href="#" className="navi__link">
                come work with us
              </a>
            </li>
          </ul>
          <p className="copy">
            This page was created by Aashay Phirke with reference to Advanced
            CSS SASS course of Jonas Schmedtmann.
          </p>
        </footer>
      </div>
    </Fragment>
  );
}
