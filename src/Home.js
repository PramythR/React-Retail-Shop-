import React from "react";
import { AnimationWrapper } from "react-hover-animation";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="./images/banner.jpg" alt="" />

        <div className="home__row">
          <Product
            id="123451"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={19.99}
            image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
            rating={5}
          />
          <Product
            id="123452"
            title="TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear Built-in Mic Headset Premium Deep Bass for Sport Black"
            price={35.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71gtHnQGfQL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123453"
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="123454"
            title="Oster Blender | Pro 1200 with Glass Jar, 24-Ounce Smoothie Cup, Brushed Nickel"
            price={64.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81ZutX2ipaL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="123455"
            title="Apple MacBook Pro 15-inch w/ Touch Bar (Mid 2018), 220ppi Retina Display, 6-Core Intel Core i7, 512GB PCIe SSD, 16GB RAM, macOS 10.13, Silver (Renewed)"
            price={1379.0}
            image="https://images-na.ssl-images-amazon.com/images/I/41cJj6G7a1L._AC_.jpg"
            rating={5}
          />
        </div>
        <AnimationWrapper animationConfig="gentle">
          <div className="home__row">
            <Product
              id="123456"
              title="Samsung UN55RU7300FXZA Curved 55-Inch 4K UHD 7 Series Ultra HD Smart TV with HDR and Alexa Compatibility (2019 Model)"
              price={249.99}
              image="https://images-na.ssl-images-amazon.com/images/I/91o08DsRplL._AC_SL1500_.jpg"
              rating={4}
            />
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default Home;
