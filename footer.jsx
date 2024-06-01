import React from 'react';
import './Footer.css';

function SocialMediaLink({ href, alt, text }) {
  return (
    <div className="social-media-link">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={alt} alt={text} className="social-media-icon" />
      </a>
      <div className="social-media-text">{text}</div>
    </div>
  );
}

const socialMediaLinks = [
  { href: "https://www.instagram.com/foodfusionpk/", alt: "https://cdn.builder.io/api/v1/image/assets/TEMP/0add17c61312480008373642f74bdc5f07a284e8a262e0027e22b8429246ed43?apiKey=1aa57a3556434780b9855b4a3f862b6d&", text: "NutriRecipes.official" },
  { href: "https://www.facebook.com/foodfusionpk/", alt: "https://cdn.builder.io/api/v1/image/assets/TEMP/2518cd28910e5cc0d955086bdc7b089361c94d3ae4cce041effb390ccc26183e?apiKey=1aa57a3556434780b9855b4a3f862b6d&", text: "NutriRecipes" },
  { href: "https://www.youtube.com/foodfusion/", alt: "https://cdn.builder.io/api/v1/image/assets/TEMP/aedc38ecd9f76e954f0abc95235093de12b47f60880f52e9a6c0c6d4264f16dd?apiKey=1aa57a3556434780b9855b4a3f862b6d&", text: "NutriRecipes Official" },
  { href: "https://twitter.com/foodfusionpk/", alt: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e10f16e4a1ce574676cc370b347e0df58fa2bfc896fa3cf6c0cbb072c2b2c76?apiKey=1aa57a3556434780b9855b4a3f862b6d&", text: "The NutriRecipes" },
];

const gmail_links = [
  { href: "mailto:hfatima2806@gmail.com", alt: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3afb87977ce0a08dacd0899b8dbc511518dcba5cc126b42c9628e7eb4ae2694?apiKey=1aa57a3556434780b9855b4a3f862b6d&", text: "info.official@NutriRecipes.com" }
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-text">
            <p className="footer-description">Healthy & tasty nutrient-rich recipes which are easy to prepare and tested. Boost your energy levels and simply feel great!</p>
            <p className="contact-us-title">Contact us:</p>
            <div className="contact-info">
              <a href={gmail_links[0].href} target="_blank" rel="noopener noreferrer">
                <img src={gmail_links[0].alt} alt="Email icon" className="email-icon" />
              </a>
              <div className="email-address">{gmail_links[0].text}</div>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <div className="social-media-section">
            <h2 className="social-media-title">Follow us here:</h2>
            <div className="social-media-links">
              {/* Social media links */}
              {socialMediaLinks.map((link, index) => (
                <SocialMediaLink key={index} href={link.href} alt={link.alt} text={link.text} />
              ))}
             
            </div>
          </div>
        </div>
        <div className="footer-column">
        
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e1473134063b1970fcd3cc8589f533f63ee618c61cf341a8fb13f2e0e1f309c?apiKey=1aa57a3556434780b9855b4a3f862b6d&" alt="NutriRecipes footer" className="footer-image" />
          </div>
        </div>

      

      
    </footer>
  );
}

export default Footer;
