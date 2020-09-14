import React from 'react'
import "./home.css";
import Product from './Product';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img  className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" />
            

            <div className="home__row">
                <Product 
                 id="123456789"
                 title="Xbox One S 1TB All-Digital Edition Console (Disc-Free Gaming) - Discontinued."
                 price={20.00} 
                 image="https://images-na.ssl-images-amazon.com/images/I/61p7mgi0GAL._AC_SL1200_.jpg"
                 rating={5}
                  /> 

                <Product 
                id="167456789"
                title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games."
                price={350.00}
                image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SX522_.jpg"
                rating={2}
                  /> 
            </div>
            

            <div className="home__row">
            <Product 
                id="161156789"
                title="Nintendo Switch 32GB Console Video Games w/ 32GB Memory Card | Neon Red/Neon Blue Joy-Con | 1080p Resolution | 802.11ac WiFi | HDMI | Surround Sound | IR Motion Camera."
                price={350.00}
                image="https://images-na.ssl-images-amazon.com/images/I/61445UADu9L._AC_SL1000_.jpg"
                rating={2}
                  /> 

<Product 
                id="167496789"
                title="Super Smash Bros. Ultimate - Nintendo Switch."
                price={350.00}
                image="https://images-na.ssl-images-amazon.com/images/I/81aJ-R4E6gL._SL1500_.jpg"
                rating={2}
                  /> 

<Product 
                id="167456709"
                title="Elite Series 2 Controller - Black."
                price={350.00}
                image="https://images-na.ssl-images-amazon.com/images/I/71F6eID-ImL._SL1500_.jpg"
                rating={2}
                  /> 
                 
            </div>


            <div className="home__row">
            <Product 
                id="167456709"
                title="Sceptre 24 Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN)."
                price={350.00}
                image="https://images-na.ssl-images-amazon.com/images/I/81mHL0psH-L._AC_SL1500_.jpg"
                rating={5}
                  /> 
            </div>
        </div></div>
    )
}

export default Home

