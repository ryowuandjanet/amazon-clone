import React from "react";
import "./styles/Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="49538094"
            title="C++ Book"
            price={239.99}
            image="https://m.media-amazon.com/images/I/81vmJCNCm6L._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="25846532"
            title="C++ Crash Course"
            price={41.32}
            image="https://m.media-amazon.com/images/I/81sg8BWtomL._AC_UL320_.jpg"
            rating={1}
          />
          <Product
            id="14965785"
            title="Java in a Nutshell"
            price={39.28}
            image="https://m.media-amazon.com/images/I/91s6pEQSOOL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="264812542"
            title="Ruby on Rails Tutorial "
            price={44.99}
            image="https://m.media-amazon.com/images/I/819V9rHLbPL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Home;
