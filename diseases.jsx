import React, { useState } from "react";
import Footer from './footer.jsx';
import Navbar from './header.jsx';
import './diseases.css';

function Diseases(){

  return (
    <>
      <Navbar />
      <main className="container">
      
      <section className="main-content">
          <h1 className="title">Diseases</h1>
          <section className="disease-categories">
            <section className="disease-section">
              <article className="category">
                <div className="category-card">
                  <h2 className="card-title">High Cholesterol</h2>
                  <p className="card-description">
                   High cholesterol, particularly low-density lipoprotein (LDL) cholesterol, is a prevalent condition that heightens the risk of heart disease, stroke, and other cardiovascular issues.
                  </p>
                  <button className="view-recipes">View Recipes</button>
                </div>
              </article>
              <article className="category">
                <div className="category-card">
                  <h2 className="card-title">Chronic Kidney</h2>
                  <p className="card-description">
                    Chronic kidney disease is a gradual loss of kidney function, causing complications like fluid retention, electrolyte imbalances, and waste product accumulation.
                  </p>
                  <button className="view-recipes">View Recipes</button>
                </div>
              </article>
              <article className="category">
                <div className="category-card">
                  <h2 className="card-title">Coronary Artery</h2>
                  <p className="card-description">
                    Coronary Artery Disease is a heart condition characterized by the narrowing or blockage of coronary arteries, causing symptoms like angina, shortness of breath, and heart attacks.
                  </p>
                  <button className="view-recipes">View Recipes</button>
                </div>
              </article>
            </section>
            <section className="disease-section">
              <article className="category">
                <div className="category-card">
                  <h2 className="card-title">Diabetes type 2</h2>
                  <p className="card-description">
                    Diabetes Type 2 is a chronic metabolic condition causing high blood sugar levels due to insulin resistance, leading to complications like heart disease, kidney damage, and nerve damage.
                  </p>
                  <button className="view-recipes">View Recipes</button>
                </div>
              </article>
              <article className="category">
                <div className="category-card">
                  <h2 className="card-title">High Blood pressure</h2>
                  <p className="card-description">
                    High blood pressure, also known as hypertension, is a common condition with no symptoms but can lead to serious health complications like heart disease, stroke, and kidney damage.
                  </p>
                  <button className="view-recipes">View Recipes</button>
                </div>
              </article>
              <article className="category">
                <div className="category-card">
                  <h2 className="card-title">Gluten intolerance</h2>
                  <p className="card-description">
                    Gluten Intolerance, also known as celiac disease, is a condition where the body's immune system reacts negatively to gluten, causing digestive issues, fatigue, joint pain, and skin problems.
                  </p>
                  <button className="view-recipes">View Recipes</button>
                </div>
              </article>
            </section>
            <section className="disease-section">
              <article className="category">
                <div className="category-card">
                  <h2 className="card-title">Lactose intolerance</h2>
                  <p className="card-description">
                    Lactose Intolerance is a digestive disorder causing symptoms like bloating, abdominal pain, gas, and diarrhoea due to insufficient production of lactase enzyme.
                  </p>
                  <button className="view-recipes">View Recipes</button>
                </div>
              </article>
              <article className="category">
                <div className="category-card">
                  <h2 className="card-title">Vitamins D3 deficiency</h2>
                  <p className="card-description">
                    Vitamin D3 deficiency, characterized by fatigue, muscle weakness, bone pain, and weakened immune system, is a significant health issue requiring adequate intake.
                  </p>
                  <button className="view-recipes">View Recipes</button>
                </div>
              </article>
              <article className="category">
                <div className="category-card">
                  <h2 className="card-title">Iron deficiency</h2>
                  <p className="card-description">
                    Iron deficiency is a prevalent nutritional disorder characterized by insufficient iron intake, causing symptoms like fatigue, weakness, pale skin, and shortness of breath.
                  </p>
                  <button className="view-recipes">View Recipes</button>
                </div>
              </article>
            </section>
          </section>
      </section>
     </main>
      <Footer />
    </>
  );
}

export default Diseases;
