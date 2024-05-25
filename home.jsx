import React from 'react';
import Footer from './footer.jsx';
import './home.css';
import Navbar from './header.jsx';


function ImageWrapper({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} />;
}

function SocialMediaLink({ src, alt, text }) {
    return (
        <div className="social-media-link">
            <ImageWrapper src={src} alt={alt} className="social-media-icon" />
            <div className="social-media-text">{text}</div>
        </div>
    );
}

function MyComponent() {
    return (
        <>
          <Navbar/>
            <div className="container">
             
                <div className="about-us-content">
          <h1 className="about-us-title">About us</h1>
          <p className="about-us-description">
            At NutriRecipes, we're on a mission to redefine how people approach nutrition and health management. Unlike
            generic recipe platforms, we specialize in providing recipes specifically tailored to common health
            conditions.
            <br />
            <br />
            Whether you're looking for diabetic-friendly desserts, heart-healthy meals, low-sodium options for high blood
            pressure, gluten-free alternatives for gluten intolerance or dairy-free alternatives for lactose
            intolerance, NutriRecipes can surely be your go-to destination for nutritious and delicious recipes. We
            understand the unique dietary needs of individuals managing these conditions and strive to offer a diverse
            range of recipes that cater to their specific requirements while ensuring great taste and nutritional value.
            Join us on our journey towards better health through the power of nutritious eating with NutriRecipes!
            <br />
            <br />
            Here at NutriRecipes, we're a dedicated team of health and tech enthusiasts committed to revolutionizing the
            way people approach nutrition and healthy eating.
            <br />
            <br />
            Our mission is to empower individuals to make informed dietary choices and lead healthier lives through
            access to delicious, nutritious recipes tailored to their unique needs. Driven by our passion for health and
            wellness, our team collaborates closely to curate a diverse collection of recipes that cater to various
            dietary preferences, restrictions, and health goals. From managing chronic conditions to supporting overall
            well-being, we believe that every meal should be an opportunity to nourish the body and serve your food
            cravings.
          </p>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c76b3523d8c72b540ec4a89d09b24f6c4f726b471cc209ab48b1e0112918272e?apiKey=1aa57a3556434780b9855b4a3f862b6d&" alt="NutriRecipes about us" className="about-us-image" />

                
                <Footer/>
                </div>
                </>
                )};
                
export default MyComponent;
